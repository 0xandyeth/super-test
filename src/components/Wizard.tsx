import React from 'react';
import styled from 'styled-components';
import Step from './common/Step';
import { StepType } from '../constants/types';
interface WizardProps{
 steps:StepType[]
};
const Wizard:React.FC<WizardProps>=({steps})=>{
  return(
    <Container>
      {
        steps.map((step,index)=>{
          return(
            <Step key={index} step={step}/>

          )
        })
      }
    </Container>  
  )
}

const Container = styled.div`
 position: absolute;
 left:0;
 margin-left: 100px;
`

export default Wizard;