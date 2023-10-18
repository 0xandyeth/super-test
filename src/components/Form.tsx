import React from 'react';
import styled from 'styled-components';
import Button from './common/Button';
import InitialForm from './forms/InitialForm';
interface FormProps {}
const Form: React.FC<FormProps> = () => {
  return (
    <Container>
      <Wrap>
       <InitialForm/>
       <Button/>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrap = styled.div`
  margin-top: 40px;
  border-radius: 20px;
  width: 400px;
  height: 452px;
  padding: 20px 20px 40px 20px;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  background-color: #817ca5;
`;

export default Form;
