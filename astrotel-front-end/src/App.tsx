import WebApp from '@twa-dev/sdk';
import './App.css';
import { TonConnectButton } from '@tonconnect/ui-react';

function App() {
  return (
    <div>
      <b>{WebApp. platform}</b>
      <TonConnectButton />
    </div>
  );
}

export default App