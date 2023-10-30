import { InjectedConnector } from '@web3-react/injected-connector'

const POLLING_INTERVAL = 8000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string,
  80001: process.env.RPC_URL_80001 as string,
  137: process.env.RRC_URL_137 as string,
  56: process.env.RPC_URL_56 as string,
  97: process.env.RPC_URL_97 as string
}


export const injected = new InjectedConnector({
    supportedChainIds: [1, 4, 137, 80001, 97, 56]
    // supportedChainIds: [1, 137, 56, 97]
  })
  

  export const networks = {
    ethereum: {
      chainId: `0x${Number(1).toString(16)}`,
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls: ['https://mainnet.infura.io/v3/84842078b09946638c03157f83405213'],
      blockExplorerUrls: ['https://etherscan.io']
    },
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: 'Polygon Mainnet',
      nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
      },
      rpcUrls: ['https://polygon-rpc.com/'],
      blockExplorerUrls: ['https://polygonscan.com/']
    },
    bsc: {
      chainId: `0x${Number(97).toString(16)}`,
      chainName: 'Smart Chain',
      nativeCurrency: {
        name: 'Binance Chain Native Token',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: [
        // 'https://bsc-dataseed1.binance.org',
        // 'https://bsc-dataseed2.binance.org',
        // 'https://bsc-dataseed3.binance.org',
        // 'https://bsc-dataseed4.binance.org',
        // 'https://bsc-dataseed1.defibit.io',
        // 'https://bsc-dataseed2.defibit.io',
        // 'https://bsc-dataseed3.defibit.io',
        // 'https://bsc-dataseed4.defibit.io',
        // 'https://bsc-dataseed1.ninicoin.io',
        // 'https://bsc-dataseed2.ninicoin.io',
        // 'https://bsc-dataseed3.ninicoin.io',
        // 'https://bsc-dataseed4.ninicoin.io',
        // 'wss://bsc-ws-node.nariox.org',
        'https://data-seed-prebsc-1-s1.binance.org:8545/'
        // 'https://bsc-dataseed.binance.org/'
      ],
      blockExplorerUrls: ['https://bscscan.com']
    }
  }