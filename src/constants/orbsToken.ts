
import Web3 from 'web3'
import { provider as ProviderType } from 'web3-core'
import { AbiItem } from 'web3-utils'
import contractsAddress from '../config/contracts'
import OrbsToken from '../config/orbstoken.json'
import UsdtToken from '../config/erc20.json'

export const getTokenBalance = async (
  provider: ProviderType,
  account: any,
  chianId: number
) => {
  const web3 = new Web3(provider)
  const tokenContract = new web3.eth.Contract(
    OrbsToken as AbiItem[],
    contractsAddress.OrbsToken
  )
  const balance = await tokenContract.methods.balanceOf(account).call()
  return balance
}

export const getUsdtBalance = async (
  provider: ProviderType,
  account: any,
  chianId: number
) => {
  const web3 = new Web3(provider)
  const tokenContract = new web3.eth.Contract(
    UsdtToken as AbiItem[],
    contractsAddress.UsdtToken
  )
  const balance = await tokenContract.methods.balanceOf(account).call()
  return balance
}
