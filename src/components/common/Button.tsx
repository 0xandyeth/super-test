import React from 'react';
import styled from 'styled-components';
interface ButtonProps {}
const Button: React.FC<ButtonProps> = () => {
  return <CustomBtn disabled={true}>Continue</CustomBtn>;
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
  &:disabled{
      background-color: #A39FC1;
      border: none;
  }
  
`;
export default Button;
