import React from 'react';
import styled from 'styled-components';
import { UserInfoType } from '../../constants/types';
interface ReviewFormProps {
    userInfo:UserInfoType
}
const ReviewForm: React.FC<ReviewFormProps> = ({userInfo}) => {
  return (
    <Container>
      <Wrap>
        <Title>Username</Title>
        <ViewTitle>{userInfo.name}</ViewTitle>
      </Wrap>
      <Wrap>
        <Title>Email</Title>
        <ViewTitle>{userInfo.email}</ViewTitle>
      </Wrap>
      <Wrap>
        <Title>Country</Title>
        <ViewTitle>{userInfo.country}</ViewTitle>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  display: block;
`;
const Wrap = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
const Title = styled.p`
  padding-bottom: 10px;
  color: #cecaeb;
  font-weight: 400;
  line-height: 16px;
  font-size: 14px;
`;
const ViewTitle = styled.p`
  padding-bottom: 10px;
  color: #fff;
  font-weight: 400;
  line-height: 16px;
  font-size: 14px;
`;

export default ReviewForm;
