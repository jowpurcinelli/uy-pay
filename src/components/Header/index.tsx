import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';

import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <button type="button">
          <FaBell size={20} color="#525f6f" />
        </button>

        <button type="button">
          <FaSignOutAlt size={20} color="#525f6f" />
        </button>

        <Link to="/profile">
          <img
            src=""
            alt="avatar"
          />
        </Link>
      </Content>
    </Container>
  );
};

export { Header };
