import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import InitialForm from './forms/InitialForm';
import PasswordForm from './forms/PasswordForm';
import { StepType, UserInfoType } from '../constants/types';
import ReviewForm from './forms/ReviewForm';
import {isValidUser,isValidPass} from '../constants/utils';
interface FormProps {
    setHeadTxt:(txt:string)=>void
}

const initStep: StepType = {
  value: 1,
  label: 'initInfo',
};
type WrapProps = {
  w?: Number;
};
const initUserInfo:UserInfoType ={
    name: "mynameisjohndoe",
    email:"johdoe@gmail.com",
    password:'',
    confirmPass:'',
    country:'Spain'
}
const Form: React.FC<FormProps> = (props) => {
  const {setHeadTxt} = props
  const [step, setStep] = useState<StepType>(initStep);
  const [btnTxt,setBtnTxt]=useState('Continue');
  const [userInfo,setUserInfo]= useState<UserInfoType>(initUserInfo);

  const renderSwitch =(param:Number)=>{
    switch(param){
        case 1:
            return <InitialForm userInfo={userInfo} setUserInfo={setUserInfo}/>
        case 2:
            return <PasswordForm userInfo={userInfo} setUserInfo={setUserInfo}/>
        case 3:
            return <ReviewForm userInfo={userInfo}/>
    }
  }

  const hanldeMoveStep =()=>{
    if(step.value ===1){
        if(isValidUser(userInfo)){
            setStep({
             value:2,
             label:'Passwod Info'
            })
            setHeadTxt('Password screen')
          }
    } else if(step.value ===2){
        if(isValidPass(userInfo)){
            setStep({
                value:3,
                label:'Passwod Info'
               })
               setBtnTxt('Complete');
               setHeadTxt('Review screen')
        }
    }else{
        
    }
   
  }
  return (
    <Container >
      <Wrap w={step.value}>
         {renderSwitch(step.value)}
        <Button 
        btnTxt={btnTxt} 
        hanldeMoveStep ={hanldeMoveStep}
        step={step}
        />
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
  width: 400px;
  height: ${(props) => {
      if(props.w ===1){
        return '452px'
      }else if(props.w ===2){
        return '348px'
      }else{
        return '276px'
      }
  }};
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  background-color: #817ca5;
`;

export default Form;
