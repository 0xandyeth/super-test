import React, { ChangeEvent, useState,useEffect } from 'react';
import styled from 'styled-components';
import DropDown from '../common/DropDown';
import { OptionType, UserInfoType } from '../../constants/types';
import ErrorText from '../common/ErrorText';
import { isEmailValid, isNameValid } from '../../constants/utils';
import Button from '../common/Button';
import { useWeb3React } from '@web3-react/core';
import contractsAddress from '../../config/contracts';
import {getTokenBalance,getUsdtBalance} from '../../constants/orbsToken';
import BigNumber from 'bignumber.js';
import { getBalanceNumber } from 'src/constants/formatBalance';
interface WindowChain {
  ethereum?: any
}
interface LoanDataFormProps {

}
const LoanData: React.FC<LoanDataFormProps> = (props) => {
 const [token,setToken] = useState("");
 const [usdt,setUsdt] = useState("");
  const {
    connector,
    activate,
    library,
    deactivate,
    active,
    account,
    chainId,
    error,
  } = useWeb3React();
  useEffect(() => {
    if (!!account) {
      const getWalletInfo = async () => {
        const provider =
          ((window as WindowChain)?.ethereum) ?? null;
        if (provider) {
          provider.on('connect', (eee) => {
            console.log(eee);
          });
         const tokenVal:any =  await getTokenBalance(provider,contractsAddress.staking,chainId);
         setToken(getBalanceNumber(new BigNumber(tokenVal)).toFixed(3));
         const usdtVal:any = await getUsdtBalance(provider,contractsAddress.balancer,chainId);
         setUsdt(getBalanceNumber(new BigNumber(usdtVal),6).toFixed(3));
        }
      };
      getWalletInfo();
    }
  }, [activate, library, chainId, account, active]);
  return (
    <Container>
      <Wrap>
        <Title>대부 받는것:</Title>
        <Title>Balancer Vault</Title>
        <Title>USDT 총량</Title>
        <Title>{usdt}</Title>
        <a href='https://polygonscan.com/address/0xBA12222222228d8Ba445958a75a0704d566BF2C8#code' target='_blank'>
         <Title1>콘트랙 보기</Title1>
        </a>
       
      </Wrap>
      <Wrap>
        <Title>목적대상:</Title>
        <Title>ORBS staking</Title>
        <Title>ORBS 총량</Title>
        <Title>{token}</Title>
        <a href='https://polygonscan.com/address/0xeeae6791f684117b7028b48cb5dd21186df80b9c#code' target='_blank'>
         <Title1>콘트랙 보기</Title1>
        </a>
      </Wrap>
      <Wrap>
       <Title>전개된 실행대상:</Title>
       <a href='https://polygonscan.com/address/0x3ca2f7da2382df0b7b4482a034c550bdc65c9a75' target='_blank'>
         <Title1>콘트랙 보기</Title1>
        </a>
      </Wrap>

    </Container>
  );
};

const Container = styled.div`
  display: block;
`;
const Wrap = styled.div`
  display: block;
  justify-content: center;
  text-align: left;
  margin-top: 30px;
`;
const Title = styled.p`
  padding-bottom: 10px;
  color: white;
  font-weight: 400;
  line-height: 16px;
  font-size: 14px;
`;

const Title1 = styled.p`
  padding-bottom: 10px;
  color: red;
  font-weight: 400;
  line-height: 16px;
  font-size: 14px;
`;
const WrapInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    position: absolute;
    right: 0px;
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
`;
const InputBox = styled.input`
  width: 360px;
  height: 40px;
  padding: 10px;
  gap: 8px;
  outline: none;
  border: none;
`;

const CustomBtn = styled.button`
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  background-color: #ffffff;
  width: 360px;
  height: 60px;
  cursor: pointer;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  font-weight: 500;
  font-size: 24px;
  line-height: 29.05px;
  border-radius: 4px;
  transition: all 1s ease 0s;
  color: #413C5F;
  &:disabled{
      background-color: #A39FC1;
      border: none;
  }
  
`;
export default LoanData;
