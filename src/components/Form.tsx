import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import InitialForm from './forms/InitialForm';
import PasswordForm from './forms/PasswordForm';
import LoanForm from './forms/LoanForm';
import LoanData from './forms/LoanData';
import { StepType, UserInfoType } from '../constants/types';
import ReviewForm from './forms/ReviewForm';
import { isValidUser, isValidPass } from '../constants/utils';
interface FormProps {
  setHeadTxt: (txt: string) => void;
  handleStepChange: (stepId: Number) => void;
  steps: StepType[];
}

const initUserInfo: UserInfoType = {
  name: '',
  email: '',
  password: '',
  confirmPass: '',
  country: '',
};
const Form: React.FC<FormProps> = (props) => {
  const { setHeadTxt, handleStepChange, steps } = props;
  const [step, setStep] = useState<StepType>(steps[0]);
  const [btnTxt, setBtnTxt] = useState('Continue');
  const [userInfo, setUserInfo] = useState<UserInfoType>(initUserInfo);
  const [check, setCheck] = useState(true);

  const renderSwitch = (param: Number) => {
    switch (param) {
      case 1:
        return <InitialForm userInfo={userInfo} setUserInfo={setUserInfo} />;
      case 2:
        return <PasswordForm userInfo={userInfo} setUserInfo={setUserInfo} />;
      case 3:
        return <ReviewForm userInfo={userInfo} />;
    }
  };

  useEffect(() => {
    if (isValidUser(userInfo) && step.value === 1) {
      setCheck(false);
    } else if (isValidPass(userInfo) && step.value === 2) {
      setCheck(false);
    } else if (step.value === 3) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [userInfo, step]);

  const hanldeMoveStep = () => {
    if (step.value === 1) {
      if (isValidUser(userInfo)) {
        setStep({
          value: 2,
          label: 'Passwod Info',
          check: true,
        });
        handleStepChange(2);
        setHeadTxt('Password screen');
      }
    } else if (step.value === 2) {
      if (isValidPass(userInfo)) {
        setStep({
          value: 3,
          label: 'Passwod Info',
          check: true,
        });
        handleStepChange(3);
        setBtnTxt('Complete');
        setHeadTxt('Review screen');
      }
    } else {
      return;
    }
  };
  return (
    <Container>
      <Wrap >
        <LoanForm/>
      </Wrap>
      <Wrap >
        <LoanData/>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap:50px;
  justify-content: center;
`;
const Wrap = styled.div`
  margin-top: 40px;
  border-radius: 20px;
  padding: 0px 20px 40px 20px;
  width: 400px;
  height:452px;
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  background-color: #817ca5;
`;

export default Form;
