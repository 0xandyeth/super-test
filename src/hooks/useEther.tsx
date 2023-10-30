import { useState, useCallback } from 'react'
import Web3 from 'web3'
import { provider as ProviderType } from 'web3-core'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from '../constants/formatBalance'

const useEther = () => {
  const [etherAmount, setEtherAmount] = useState<string | null>('0')
  const getEtherBalance = useCallback(
    async (provider: ProviderType, account: any) => {
      const web3:any = new Web3(provider)
      const balance = await web3.eth.getBalance(account)
      console.log('balance=>', balance)
      setEtherAmount(getBalanceNumber(new BigNumber(balance)).toFixed(3))
    },
    []
  )

  return {
    etherAmount,
    getEtherBalance
  }
}

export default useEther
