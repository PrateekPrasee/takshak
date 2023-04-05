import styled from 'styled-components';

export const Heading = styled.h1`
  text-align: center;
  color: green;

  @media (max-width: 769px) {
    text-align: center;
    color: green;
  }
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
  @media (max-width: 769px) {
    overflowy: scroll;
    height: 2500px;
  }
`;

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 96%;
  bottom: 30px;
  height: 50px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: darkorange;

  @media (max-width: 769px) {
    position: fixed;
    width: 100%;
    left: 42%;
    bottom: 45px;
    height: 20px;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
