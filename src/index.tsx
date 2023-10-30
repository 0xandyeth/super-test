import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

root.render(
  <React.StrictMode>
      <Web3ReactProvider getLibrary={getLibrary}>
          <Home />
      </Web3ReactProvider>
  </React.StrictMode>
);


