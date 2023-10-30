import React, { ChangeEvent, useState,useEffect } from 'react';
import styled from 'styled-components';
import DropDown from '../common/DropDown';
import { OptionType, UserInfoType } from '../../constants/types';
import ErrorText from '../common/ErrorText';
import { isEmailValid, isNameValid } from '../../constants/utils';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../../constants/connectors';
import Button from '../common/Button';
import useEther from 'src/hooks/useEther';
import useFlash from 'src/hooks/useFlash';
import { AbiItem, toWei } from 'web3-utils'
import useBorrow from 'src/hooks/useBorrow';
import ReactLoading from 'react-loading';
interface WindowChain {
  ethereum?: any
}

export enum ConnectorNames {
  Injected = 'Injected',
}

const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
};
interface LoanFormInitialFormProps {}
const Borrow: React.FC<LoanFormInitialFormProps> = (props) => {
  const [loanData, setLoanData] = useState();
  const [tokens,setTokens] = useState(["0xc2132D05D31c914a87C6611C10748AEb04B58e8F"]);
  const [amounts,setAmounts] = useState([100000000]);
  const [transaction,setTransaction] = useState(null);

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

  const { getEtherBalance ,etherAmount} = useEther();
  const {onFlash} = useBorrow();
  useEffect(() => {
    if (!!account) {
      const getWalletInfo = async () => {
        const provider =
          ((window as WindowChain)?.ethereum) ?? null;
        if (provider) {
          provider.on('connect', (eee) => {
            console.log(eee);
          });

          localStorage.setItem('wallet_address', account);
          await getEtherBalance(provider, account);
        }
      };
      getWalletInfo();
    }
  }, [activate, library, chainId, account, active, getEtherBalance]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const amount = e.target.value;
      console.log("amount",amount);
      let arr =[];
      arr.push(parseFloat(amount) * 10 ** 6);
      setAmounts(arr);
      arr =[];
  };
  const connectWallet = async () => {
    try {
      await activate(injected);
    } catch (err) {
      console.log('********************************', err);
    }
  };

  const flashRun = async()=>{
    if(Array.isArray(tokens) && Array.isArray(amounts)){
       if(tokens.length !==0 && amounts.length !==0){
        const transaction =   await onFlash(["0xc2132D05D31c914a87C6611C10748AEb04B58e8F"],[100000000],"0x");
        setTransaction(transaction);
       }
    
    }
 
  }
  return (
    <Container>
      <Wrap>
        <Title>목적대상없이 대부하기</Title>
      </Wrap>
      <Wrap>
        <Title>실행상태보기</Title>
        {
          transaction !==null &&
          <a href={`https://polygonscan.com/tx/${transaction}`}>
          <Title>{transaction}</Title>
  
          </a>
        }
      
      </Wrap>

      <Wrap>
        {!active ? (
          <CustomBtn onClick={() => connectWallet()}>련결</CustomBtn>
        ) : (
          <div>
              {
                transaction !==null?(
                  <ReactLoading  height={667} width={375} />
                ):(
                  <CustomBtn onClick={() => flashRun()}>실행</CustomBtn>
                )
              }
          </div>
          
        )}
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
  color: #413c5f;
  &:disabled {
    background-color: #a39fc1;
    border: none;
  }
`;
export default Borrow;
