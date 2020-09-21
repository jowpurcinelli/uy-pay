import React from 'react';

import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';

import { Container, Content } from './styles';

const Transactions: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <Content>
        <Header />
      </Content>
    </Container>
  );
};

export { Transactions };
