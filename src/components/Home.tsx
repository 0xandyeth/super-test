import React,{useState} from 'react';
import styled from 'styled-components';
import Header from './Header';
import Form from './Form';
interface HomeProps{

}
const Home:React.FC<HomeProps>=()=>{
  const [headTxt,setHeadTxt] = useState('Inital info');
  return(
    <Container>
      <Header headTxt={headTxt} />
      <Form setHeadTxt={setHeadTxt}/>
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