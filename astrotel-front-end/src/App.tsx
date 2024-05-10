// import WebApp from '@twa-dev/sdk';
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Button, List, ListItem, Checkbox } from 'konsta/react';
import { useState } from 'react';
import { USER_TYPE } from '../utils/constants';
function App() {
  const [userType, setUserType] = useState(Number);
  const logInAsAstrologer = () => {
    setUserType(USER_TYPE.ASTROLOGER);
  }
  const logInAsClient = () => {
    setUserType(USER_TYPE.CLIENT);
  }
  return (
    <div >
      <div className='flex justify-center'><TonConnectButton /></div>
      <div className='m-5' />
      <Button onClick={logInAsAstrologer}>Log in as Astrologer</Button>
      <div className='m-5' />
      <Button onClick={logInAsClient}>Log in as Client</Button>
      <div className='m-5' />
      {userType === USER_TYPE.ASTROLOGER && <div>
        <div className='flex justify-left'>
          <p>What's your expertise?</p>
          <List>
            <div className='flex justify-between'>
              <ListItem
                label
                title="Vedic Astrology"
                media={
                  <>
                    {/* Pass Checkbox to list item media */}
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
              <ListItem
                label
                title="Numerology"
                media={
                  <>
                    {/* Pass Checkbox to list item media */}
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
            </div>
            <div className='flex justify-between'>
              <ListItem
                label
                title="Tarot Reading"
                media={
                  <>
                    {/* Pass Checkbox to list item media */}
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
              <ListItem
                label
                title="Vastushastra"
                media={
                  <>
                    {/* Pass Checkbox to list item media */}
                    <Checkbox component="div" name="my-checkbox" />
                  </>
                }
              />
            </div>
          </List>
        </div>
        <div className='flex justify-left'>
          <p className='mr-5'>Fee</p>
          <input type="number" placeholder=" Fee in Astrotokens" min={0} className='border-2 rounded outline-black' />
        </div></div>}
        {userType === USER_TYPE.CLIENT && <div>
        <div className='flex justify-left'>
          <p>Full Name</p>
          <input type="text" placeholder="Full Name" className='border-b-2 outline-black ml-2' />
          <p>Date of birth</p>
          <input type="number" placeholder="DD" className='border-b-2 outline-black ml-2' min={1} max={31}/>
          <input type="number" placeholder="MM" className='border-b-2 outline-black ml-2' min={1} max={12}/>
          <input type="number" placeholder="YYYY" className='border-b-2 outline-black ml-2' min={1900} max={2021}/>
        </div>
        </div>}
 
    </div>
  );
}

export default App