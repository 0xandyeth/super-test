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
const LoanForm: React.FC<LoanFormInitialFormProps> = (props) => {
  const [loanData, setLoanData] = useState();
  const [tokens,setTokens] = useState(["0xc2132D05D31c914a87C6611C10748AEb04B58e8F"]);
  const [amounts,setAmounts] = useState([]);
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
  const {onFlash} = useFlash();
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
        const transaction =   await onFlash(tokens,amounts,"0x");
        setTransaction(transaction);
       }
    
    }
 
  }
  return (
    <Container>
      <Wrap>
        <Title>토큰주소</Title>
        <WrapInput>
          <InputBox
            name='address'
            defaultValue='0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
            placeholder='주소입력'
            // onChange={handleInputChange}
            type='text'
          />
          {}
        </WrapInput>
        {}
      </Wrap>
      <Wrap>
        <Title>토큰 량</Title>
        <WrapInput>
          <InputBox
            name='amount'
            placeholder='량입력'

            onChange={handleInputChange}
            type='number'
          />
          {}
        </WrapInput>
        {}
      </Wrap>
      <Wrap>
        <Title>현재 Matic 량</Title>
        <Title>{etherAmount}</Title>
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
          <CustomBtn onClick={() => flashRun()}>실행</CustomBtn>
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
export default LoanForm;
