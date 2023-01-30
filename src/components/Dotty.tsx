import React, { useEffect, useState } from "react";
import { ApiPromise, WsProvider } from '@polkadot/api';


const PROVIDER_URL = process.env.NEXT_PUBLIC_WS_PROVIDER_URL;
console.log(`PROVIDER_URL is ${PROVIDER_URL}`);

const Dotty = () => {
    const [genesisHashHexForDisplay, setGenesisHashHexForDisplay] =
      useState<string>("");

    let genesisHashHexString : string;
    //let api: ApiPromise;
    // Construct
    async function connectToChain() {
        const wsProvider = new WsProvider(process.env.NEXT_PUBLIC_WS_PROVIDER_URL);
        const api = await ApiPromise.create({ provider: wsProvider });

        // Retrieve the chain & node information information via rpc calls
        const [chain, nodeName, nodeVersion] = await Promise.all([
        api.rpc.system.chain(),
        api.rpc.system.name(),
        api.rpc.system.version()
        ]);

        console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
        genesisHashHexString = api.genesisHash.toHex().toString();
        console.log(api.genesisHash.toHex());
        return api;
    }

    useEffect(() => {
        (async () => {
            console.log("chainApiUseEffect called");
            const chainApi = await connectToChain();
            setGenesisHashHexForDisplay(chainApi.genesisHash.toHex().toString());
            console.log("useEffect ran. genesisHashHexString is: ", genesisHashHexString);
        })();
    }, []);

    //inside the return ( ... ) it's the HTML world.  Outside of return( ... ) it's TS / javascript world.
    return (
        <div>
        {genesisHashHexForDisplay && (
          <p>
         Genesis Hash from Dotty component is {genesisHashHexForDisplay}.
      </p>)}
    </div>
  );
};

export default Dotty;



