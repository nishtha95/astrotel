import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
// this manifest is used temporarily for development purposes
const manifestUrl = "https://nishtha95.github.io/astrotel/tonconnect-manifest.json"
console.log('manifestUrl is ', manifestUrl);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider
    manifestUrl={manifestUrl}
    actionsConfiguration={{
      twaReturnUrl: 'https://t.me/@astrotel_bot/astrotel'
    }}
  >
    <App />
  </TonConnectUIProvider>,
)