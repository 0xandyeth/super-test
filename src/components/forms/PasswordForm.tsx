import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { UserInfoType } from '../../constants/types';
import { isConfirmVaild, isPasswordVaild } from '../../constants/utils';
import ErrorText from '../common/ErrorText';
interface PasswordFormProps {
  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
}
const PasswordForm: React.FC<PasswordFormProps> = (props) => {
  const { userInfo, setUserInfo } = props;
  const [errors, setErrors] = useState<UserInfoType>({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
    country: '',
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    let errorMessage = '';
    if (e.target.name === 'password') {
      if (!isPasswordVaild(e.target.value)) {
        errorMessage = 'Password must be 8-16 characters.';
      }
    } else {
      if (!isConfirmVaild(userInfo.password, e.target.value)) {
        errorMessage = 'Passwords do not match.';
      }
    }
    setErrors({ ...errors, [e.target.name]: errorMessage });
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
          {errors.password !== '' && (
            <img src='/images/error.png' alt='Error' />
          )}
        </WrapInput>
        <ErrorText errorMessage={errors.password} />
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
          {errors.confirmPass !== '' && (
            <img src='/images/error.png' alt='Error' />
          )}
        </WrapInput>
        <ErrorText errorMessage={errors.confirmPass} />
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
