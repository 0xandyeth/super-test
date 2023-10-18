import React from 'react';
import styled from 'styled-components';
interface PasswordFormProps{

};
const PasswordForm:React.FC<PasswordFormProps>=()=>{
  return(
    <Container>
          <Wrap>
           <Title>Password</Title>
           <InputBox placeholder='Input password'/>
        </Wrap>
        <Wrap>
           <Title>Repeat password</Title>
           <InputBox placeholder='Repeat password'/>
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
   margin-top: 30px;
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
  padding: 10px;
  gap: 8px;
  outline: none;
  border: none;
`

export default PasswordForm;