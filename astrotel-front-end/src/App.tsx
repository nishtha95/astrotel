// import WebApp from '@twa-dev/sdk';
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Button, List, ListItem, Checkbox } from 'konsta/react';
import { useEffect, useState } from 'react';
import { useTonClient } from './hooks/useTonClient';
import { useAsyncInitialize } from '../hooks/useAsyncInitialize';
import { Address, OpenedContract } from '@ton/core';
import { USER_TYPE } from '../utils/constants';
import axios from 'axios';
import { useAstrotelContract } from './hooks/useAstrotelContract';
const BOT_TOKEN = '6746951461:AAGmz30aMIIIGxY7qagj7lA1Id1rhte72S4';
const groupName = 'MyGroupChat';

function App() {
  const [userType, setUserType] = useState(Number);
  const {astrologers, addAstrologer}=useAstrotelContract();
  
  useEffect(() => {
    console.log('astrologers',astrologers);
  }, [astrologers]);
  const logInAsAstrologer = () => {
    console.log('logInAsAstrologer');
    addAstrologer('Vedic Astrology', 100, '1234567890').then((response) => {
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
    <div >
      <div className='flex justify-center'><TonConnectButton /></div>
      <div className='m-5' />
      <Button onClick={logInAsAstrologer}>Log in as Astrologer</Button>
      {/* <Button onClick={logInAsAstrologer}>Log in as Astrologer</Button>
      <div className='m-5' />
      <Button onClick={logInAsClient}>Log in as Client</Button>
      <div className='m-5' />
      {userType === USER_TYPE.ASTROLOGER && <div>
        <div className='flex justify-left'>
          <p>What's your expertise?</p>
          </div>
          <List>
              <ListItem
                label
                title="Vedic Astrology"
                media={
                  <>
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
              <ListItem
                label
                title="Numerology"
                media={
                  <>
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
              <ListItem
                label
                title="Tarot Reading"
                media={
                  <>
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
              <ListItem
                label
                title="Vastushastra"
                media={
                  <>
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
          </List>
        <div className='flex justify-left'>
          <p className='mr-5'>Fee</p>
          <input type="number" placeholder=" Fee in Astrotokens" min={0} className='border-2 rounded outline-black' />
        </div></div>}
        {userType === USER_TYPE.CLIENT && <div>
        <div className='flex justify-left'>
          <input type="text" placeholder="Full Name (optional)" className='border-b-2 outline-black ml-2' />
          <p>Date of birth</p>
          
        </div>
        </div>}
  */}
    </div>
  );
}

export default App