// import WebApp from '@twa-dev/sdk';
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';
import { Button } from 'konsta/react';

function App() {
  return (
    <div >
      <div className='flex justify-center'><TonConnectButton/></div>
      <div className='m-5'/>
      <Button>Log in as Astrologer</Button>
      <div className='m-5'/>
      <Button>Log in as Client</Button>
    </div>
  );
}

export default App