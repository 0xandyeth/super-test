
import Web3 from 'web3'
import { provider as ProviderType } from 'web3-core'

export const getEtherBalance = async (provider: ProviderType, account: any) => {
  const web3 = new Web3(provider)
  // web3.eth.sign
  const balance = await web3.eth.getBalance(account)
  return balance
}
