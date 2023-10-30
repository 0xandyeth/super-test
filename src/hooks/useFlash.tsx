
import { useState, useCallback, useMemo } from 'react'
import { AbiItem, toWei, soliditySha3 } from 'web3-utils'
import contractsAddress from '../config/contracts'
import Web3 from 'web3'
import Flashloan from '../config/flashloan.json'

import { useWeb3React } from '@web3-react/core'
interface WindowChain {
    ethereum?: any
  }
const useFlash = () => {
   const { account, chainId } = useWeb3React()

    const [mintStatus, setMintStatus] = useState<boolean>(false)
  const provider = useMemo(() => {
    return ( (window as WindowChain)?.ethereum) ?? null
  }, [])
  const web3 = new Web3(provider)

  const tokenContract = useMemo(() => {
    return new web3.eth.Contract(
        Flashloan as AbiItem[],
      contractsAddress.flash
    )
  }, [chainId, provider])
    
  const onFlash = useCallback(async(
    tokens:any,
    amounts:any,
    data:any
  )=>{
    const transaction = await tokenContract.methods.flashLoan(
        tokens,
        amounts,
        data
    ).send({ from: account })
    .on('transactionHash', (hash) => {
      console.log(hash)
    })
  setMintStatus(false)
  return transaction

  },[
    account,
    tokenContract
  ])
  return{
    mintStatus,
      onFlash
    }


}


export default useFlash