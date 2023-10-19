import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { UserInfoType } from '../../constants/types';
interface PasswordFormProps {
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
}
const PasswordForm: React.FC<PasswordFormProps> = (props) => {
  const { userInfo, setUserInfo } = props;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <Container>
      <Wrap>
        <Title>Password</Title>
        <WrapInput>
          <InputBox
            name='password'
            placeholder='Input password'
            onChange={handleInputChange}
            type='password'
          />
          <img src='/images/error.png' alt='Error' />
        </WrapInput>
      </Wrap>
      <Wrap>
        <Title>Repeat password</Title>
        <WrapInput>
          <InputBox
            name='confirmPass'
            placeholder='Repeat password'
            type='password'
            onChange={handleInputChange}
          />
          <img src='/images/error.png' alt='Error' />
        </WrapInput>
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

export default PasswordForm;
