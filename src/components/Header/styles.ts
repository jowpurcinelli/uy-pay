import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 0 20px;

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: opacity 0.2s linear;
    margin-left: 20px;

    img {
      width: 50px;
      border-radius: 10px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;
