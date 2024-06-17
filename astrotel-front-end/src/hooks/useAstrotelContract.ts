import { useEffect, useState } from 'react';
import {AstrotelMainContract} from '../contracts/astrotel_AstrotelMainContract';
import { AstrologerContract } from '../contracts/astrotel_AstrologerContract';
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { Address, OpenedContract } from '@ton/core';
import { useTonConnect } from './useTonConnect';
import { toNano } from 'ton';
export function useAstrotelContract() {
const CONTRACT_ADDRESS= 'EQAUzYYqZQ4BSc-jNOtxeVEr1FUUSSIoVWw5rMHFfgfS0DC8';
const client = useTonClient();
const [astrologers, setAstrologers] = useState<null | Address[]>();
const { sender } = useTonConnect();

const astrotelContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = AstrotelMainContract.fromAddress(Address.parse(CONTRACT_ADDRESS));
    return client.open(contract) as OpenedContract<AstrotelMainContract>;
}, [client]);

  useEffect(() => {
    async function getAllAstrologers() {
      if (!astrotelContract) return;
      setAstrologers(null);
      try{
        const result = await astrotelContract.getGetAllAstrologers();
        console.log(result.values());
        for(const val of result.values()){
            console.log('val',val.toString());
            const contract = AstrologerContract.fromAddress(val);
            const astrologerContract= client?.open(contract) as OpenedContract<AstrologerContract>;
            astrologerContract.getGetAccountDetails().then((result) => console.log(result)).catch((e) => console.log('error', e));
        }
        // setAstrologers(Object.values(val));
      }catch(e){
        console.log('error',e);
      }
    }
    getAllAstrologers();
  }, [astrotelContract]);

return {
    astrologers: astrologers || [],
    address: astrotelContract?.address.toString(),
    addAstrologer: async(expertise:string, fees: number,telegram_id:string, ) => {
        return astrotelContract?.send(sender, { value: toNano(1) }, {expertise:expertise,fees:BigInt(fees),telegram_id:telegram_id, $$type: 'AddAstrologer' });
    }
};
}