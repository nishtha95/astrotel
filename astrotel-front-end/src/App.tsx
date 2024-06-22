// import WebApp from '@twa-dev/sdk';
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Button, List, ListItem, Checkbox } from 'konsta/react';
import { useEffect, useState } from 'react';
import { useTonClient } from './hooks/useTonClient';
import { Address, OpenedContract } from '@ton/core';
import { USER_TYPE } from '../utils/constants';
import axios from 'axios';
import { useAstrotelContract } from './hooks/useAstrotelContract';
import { useTonConnect } from './hooks/useTonConnect';
import { useTonAddress } from '@tonconnect/ui-react';

const BOT_TOKEN = '6746951461:AAGmz30aMIIIGxY7qagj7lA1Id1rhte72S4';
const groupName = 'MyGroupChat';

function App() {
  const [userType, setUserType] = useState(Number);
  const {astrologers, addAstrologer}=useAstrotelContract();
  const { sender } = useTonConnect();
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  
  useEffect(() => {
    console.log('astrologers',astrologers);
    console.log("sender",sender, userFriendlyAddress);
    console.log('userFriendlyAddress', userFriendlyAddress);
    console.log('rawAddress', rawAddress);
  }, [astrologers]);
  const logInAsAstrologer = () => {
    console.log('logInAsAstrologer');
    addAstrologer('4 years','Vedic Astrology', 100, '1234567890').then((response) => {
      console.log('addAstrologer', response);
    });
  }
  // const logInAsClient = () => {
  //   setUserType(USER_TYPE.CLIENT);
  // }

  
  // async function setChatPermissions(chatId: string, permissions: object, userId: string | null=null) {
  //   const url = `https://api.telegram.org/bot${BOT_TOKEN}/setChatPermissions`;
  //   const data = {
  //     chat_id: chatId,
  //     permissions,
  //     member_id: null as string | null, // Update the type of member_id
  //   };

  //   if (userId) {
  //     data.member_id = userId; 
  //   }

  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   });

  //   const result: any = await response.json();
  //   if (!result.ok) {
  //     console.error('Error setting permissions:', result.description);
  //   }
  // }
 
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src="https://nishtha95.github.io/astrotel/icon.jpeg" alt="Astrotel" className='w-20 h-20 ' />
      <h3 className='text-2xl font-bold mt-5'>Astrotel</h3>
      <h1>Worried about your future?</h1>
      <h2>Get your future predictions from our expert astrologers</h2>

      <div className='absolute bottom-40'><TonConnectButton /></div>
      {/* <div className='m-5' />
      <Button onClick={logInAsAstrologer}>Register as Astrologer</Button>
      <div className='m-5'>Continue as Client</div> */}
      
    </div>
  );
}

export default App