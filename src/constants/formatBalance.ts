
import BigNumber from 'bignumber.js'



export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(
    new BigNumber(10).pow(decimals)
  )
  return displayBalance.toNumber()
}
