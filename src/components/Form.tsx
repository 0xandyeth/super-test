import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import InitialForm from './forms/InitialForm';
import PasswordForm from './forms/PasswordForm';
import { StepType } from '../constants/types';
import ReviewForm from './forms/ReviewForm';
import { render } from 'react-dom';
interface FormProps {}

const initStep: StepType = {
  value: 2,
  label: 'initInfo',
};
type WrapProps = {
  w?: Number;
};
const Form: React.FC<FormProps> = () => {
  const [step, setStep] = useState<StepType>(initStep);
  const renderSwitch =(param:Number)=>{
    switch(param){
        case 1:
            return <InitialForm/>
        case 2:
            return <PasswordForm/>
        case 3:
            return <ReviewForm/>
    }
  }
  return (
    <Container >
      <Wrap w={step.value}>
         {renderSwitch(step.value)}
        <Button />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
 
`;
const Wrap = styled.div<WrapProps>`
  margin-top: 40px;
  border-radius: 20px;
  padding: 0px 20px 40px 20px;
  height: ${(props) => {
      if(props.w ===1){
        return '452px'
      }else if(props.w ===2){
        return '348px'
      }
  }};
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  background-color: #817ca5;
`;

export default Form;
