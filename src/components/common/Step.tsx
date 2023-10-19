import React from 'react';
import styled from 'styled-components';
import { StepType } from '../../constants/types';
interface StepProps {
    step:StepType
}
const Step: React.FC<StepProps> = ({step}) => {
  return (
    <Container>
     {
        step.check?(
            <img 
            src='/images/current.png'
            alt='Current'
           />
        ):(
            <img 
            src='/images/past.png'
            alt='Past'
           />
        )
     }
  
      <Lavel>{step.label}</Lavel>
    </Container>
  );
};

const Container = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
`;

const Lavel =styled.p`
  margin-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #817CA5;
`
export default Step;
