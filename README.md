# cspr-cloud-example

## A Basic CSPR Cloud Integration Example Implementation

## Overview

This README provides detailed steps to clone the repository, set up the environment, and test the CSPR Cloud using a JavaScript example.

---

## Prerequisites

1. **Register on CSPR.build Console**
    
    - Sign up at [CSPR Console](https://console.cspr.build/sign-up) to create a CSPR.cloud access token.

2. **Clone the Repository**
    
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

3. **Initialise**
   - Initialise 
    
    `npm init`     

4. **Install Dependencies**
    
    - Install the following npm packages:
        
        ```bash
        npm install @open-rpc/client-js casper-js-sdk
        ```
        
5. **Create `index.js`**
    
    - Create an `index.js` file and copy the code from the SDK examples available at [SDK Examples](https://docs.cspr.cloud/casper-node-api/connecting-with-an-sdk#sdk-examples).
6. **Set Up the Environment File**
    
    - Create a `.env` file to manage environment parameters.
        
        ```bash
        touch .env
        npm install dotenv
        ```
        
    - Add the following to the `.env` file:
        
        ```env
        INTEGRATION_RPC_URL=https://node.integration.cspr.cloud/rpc
        TESTNET_RPC_URL=https://node.testnet.cspr.cloud/rpc
        MAINNET_RPC_URL=https://node.cspr.cloud/rpc
        AUTH_KEY=YOUR_AUTH_KEY
        ```
        
7. **Specify Endpoints**
    
    - Refer to the [Endpoints Documentation](https://docs.cspr.cloud/casper-node-api/connecting-with-an-sdk#endpoints) for additional endpoint details.
8. **Update the Code**
    
    - Use the appropriate endpoint and authorization key in `index.js`. For example:
        
        ```javascript
        require('dotenv').config();
        
        const customCasperClient = new CustomCasperClient(process.env.INTEGRATION_RPC_URL, {
            headers: {
                "Authorization": process.env.AUTH_KEY
            }
        });
        ```
        
9.  **Query a Deploy**
    
    - Use the Integration Network to query a deploy:
        1. Go to [Integration Deploys](https://integration.cspr.live/deploys).
        2. Select a Deploy Hash, e.g., `324e02c36fd0d98c577893a0370efdd2d7a08b6fcc15d4272bafd24005566127`.
        3. Update your `index.js` file with the deploy hash:
            
            ```javascript
            const deploy = await casperClient.getDeploy("324e02c36fd0d98c577893a0370efdd2d7a08b6fcc15d4272bafd24005566127");
            ```
            
        4. You can replace `getDeploy` with other RPC methods and pass the required parameters to fetch results from the respective RPC endpoints. Refer to the [RPC Methods Documentation](https://docs.cspr.cloud/) for more details.
10. **Run the Program**
    
    - Execute the program:
        
        ```bash
        node index.js
        ```
        
11. **View the Output**
    
    - The output will be displayed in the terminal. Example output:
        
        ```json
        {
          result: {
            peers: [ [Object], [Object], [Object] ],
            api_version: "1.5.10",
            build_version: "1.5.8",
            chainspec_name: "integration-test",
            starting_state_root_hash: "e27ed941d6a15bd90e5e272c135ac5a9eedb10ab266991e8ffac2890450889fb",
            last_added_block_info: {
              hash: "8d21a35331cc122be1448156d5c3c24985f2c963142d7fcd31190f7eb0d10a79",
              timestamp: "2024-12-19T11:01:34.336Z",
              era_id: 16181,
              height: 4291542,
              state_root_hash: "4acd97687051e7f74b0ecee5f574173b57e8cb57386b799c4e1fc4f883526e51",
              creator: "017fec504c642f2b321b8591f1c3008348c57a81acafceb5a392cf8416a5fb4a3c"
            },
            our_public_signing_key: "0115c9b40c06ff99b0cbadf1140b061b5dbf92103e66a6330fbcc7768f5219c1ce",
            round_length: "16s 384ms",
            next_upgrade: null,
            uptime: "6days 7h 59m 45s 341ms",
            reactor_state: "Validate",
            last_progress: "2024-12-13T03:04:44.370Z",
            available_block_range: { low: 0, high: 4291542 },
            block_sync: { historical: null, forward: null }
          }
        }
        ```