import { TonConnectButton } from '@tonconnect/ui-react';
import {
    Page,
    Navbar,
    BlockTitle,
    List,
    ListInput,
} from 'konsta/react';
import { useEffect, useState } from 'react';
import { useTonConnect } from './hooks/useTonConnect';
import { useTonAddress } from '@tonconnect/ui-react';
import { Input } from "@material-tailwind/react";

const BOT_TOKEN = '6746951461:AAGmz30aMIIIGxY7qagj7lA1Id1rhte72S4';
const groupName = 'MyGroupChat';

function Register() {
  const [userType, setUserType] = useState(Number);
//   const {astrologers, addAstrologer}=useAstrotelContract();
  const { sender } = useTonConnect();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  
 
  return (
    <div className='flex flex-col items-center'>
      <p className='text-2xl font-bold'>Astrologer Registration</p>

       <input type="text" placeholder="Name eg. Amit Sharma" className="w-2/3 p-2 mt-4 border-b-2"  />
       <input type="number" placeholder="Expirience in years eg.8" className="w-2/3 p-2 mt-4 border-b-2"  />
       <input type="text" placeholder="Expertise eg. Vedic Astrology" className="w-2/3 p-2 mt-4 border-b-2"  />
       <input type="number" placeholder="Fee in Astrotokens eg.40" className="w-2/3 p-2 mt-4 border-b-2"  />
        <div className='mt-8'><TonConnectButton /></div>
    </div>
  );
}

export default Register;