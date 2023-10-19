import React from 'react';
import styled from 'styled-components';
import { StepType } from '../../constants/types';
interface ButtonProps {
    btnTxt:string
    hanldeMoveStep:()=>void
    step:StepType
}
const Button: React.FC<ButtonProps> = (props) => {
    const {btnTxt,hanldeMoveStep,step} = props
  return <CustomBtn disabled={false} onClick={()=>hanldeMoveStep()}>{btnTxt}</CustomBtn>;
};
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
  /* &:disabled{
      background-color: #A39FC1;
      border: none;
  } */
  
`;
export default Button;
