import React from 'react';
import styled from 'styled-components';
interface HeaderProps{

};
const Header:React.FC<HeaderProps>=()=>{
  return(
    <Container>
      <Content>Super test form</Content>
      <SubContent>Inital info</SubContent>
    </Container>  
  )
}

const Container = styled.div`
  margin-top: 80px;
`
const Content = styled.p`
  font-weight: 500;
  font-size: 36px;
  line-height: 43.57px;
  color: #413C5F;
`
const SubContent = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24.2px;
  color: #817CA5;
  margin-top: 20px;
`

export default Header;