import React from 'react';
import AlientLogo from '../SVG/AlienLogo';
import { Container } from '../atoms/index';
import styled from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';

const Nav = () => {
  return (
    <div>
      <Container>
        <Flex>
          <div>
            <AlientLogo />
          </div>
          <Title>All the resourceful links in one place.</Title>
        </Flex>
      </Container>
    </div>
  );
};

const Flex = styled.div`
  display: flex;

  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  ${up('md')} {
    flex-direction: row;
  }
`;
const Title = styled.h1`
  color: dark;
  font-size: 1.2em;

  margin-top: 1rem;

  ${up('md')} {
    font-size: 1.5em;
  }
  font-weight: 600;
  letter-spacing: -0.8px;
`;
export default Nav;
