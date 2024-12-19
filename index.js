//import { HTTPTransport } from '@open-rpc/client-js';
//import casperSDK from 'casper-js-sdk';

const { HTTPTransport } = require('@open-rpc/client-js');
const casperSDK = require('casper-js-sdk');
require('dotenv').config();

const { CasperServiceByJsonRPC } = casperSDK;
const { CasperClient } = casperSDK;
const rpcUrl = process.env.INTEGRATION_RPC_URL;
const authKey = process.env.AUTH_KEY;

class CustomCasperClient extends CasperServiceByJsonRPC {
    constructor(url, options) {
        super(url);
        const transport = new HTTPTransport(url, options);
        this.client.requestManager.transports = [transport];
    }
}

const customCasperClient = new CustomCasperClient(rpcUrl, {
    headers: {
        "Authorization": authKey
    }
});
const casperClient = new CasperClient("");
casperClient.nodeClient = customCasperClient;

(async function(){
    const result = await casperClient.nodeClient.getStatus();
    console.log({ result });
    const deploy = await casperClient.getDeploy("324e02c36fd0d98c577893a0370efdd2d7a08b6fcc15d4272bafd24005566127");
    console.log({ deploy });
})();