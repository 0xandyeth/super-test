import React,{useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Form from './Form';
import Wizard from './Wizard';
import {Steps} from '../constants/utils';
import { StepType } from '../constants/types';
interface HomeProps{

}
const Home:React.FC<HomeProps>=()=>{
  const [headTxt,setHeadTxt] = useState('');
  const [steps,setSteps] = useState<StepType[]>(Steps);
  console.log("home steps",steps)

  const handleStepChange = (stepId: Number) => {
    const updatedSetps = steps.map((step:StepType) => {
      if (step.value === stepId) {
        return {
          ...step,
          check: true,
        };
      }else{
        return {
            ...step,
            check:false
        }
      }
    });
    setSteps(updatedSetps);
    console.log("count", updatedSetps)
  };
  return(
    <Container>
      <Header headTxt={headTxt} />
      {/* <Wizard steps={steps} /> */}
      <Form setHeadTxt={setHeadTxt} handleStepChange={handleStepChange} steps={steps}/>
    </Container>  
  )
}

const Container = styled.main`
 position:relative;
 min-height:100vh;
 overflow-x:hidden;
 display:block;
 padding:0 calc(3.5vw + 5px);
 &:after{
    background:url("/images/home-background.png") center center / cover 
    no-repeat fixed;
    content:" ";
    position:absolute;
    inset:0px;
    opacity:1;
    z-index:-1;
 }
`
export default Home;