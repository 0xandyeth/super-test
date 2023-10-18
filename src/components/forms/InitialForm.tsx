import React from 'react';
import styled from 'styled-components';
import DropDown from '../common/DropDown';
interface InitialFormProps{

};
const InitialForm:React.FC<InitialFormProps>=()=>{
  return(
    <Container>
        <Wrap>
           <Title>Username</Title>
           <InputBox placeholder='Username'/>
        </Wrap>
        <Wrap>
           <Title>Email</Title>
           <InputBox placeholder='Email'/>
        </Wrap>
        <Wrap>
            <Title>Country</Title>
            <DropDown/>
        </Wrap>
    </Container>  
  )
}

const Container = styled.div`
  display: block;
`
const Wrap = styled.div`
   display: block;
   justify-content: center;
   text-align: left;
   margin-top: 20px;
`
const Title =styled.p`
 padding-bottom: 10px;
 color: white;
 font-weight:400;
 line-height: 16px;
 font-size:14px;
`
const InputBox = styled.input`
  width: 360px;
  height: 40px;
  gap: 8px;
  outline: none;
  border: none;
`
export default InitialForm;