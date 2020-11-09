import React from 'react';
import AlientLogo from '../SVG/AlienLogo';
import { Container } from '../atoms/index';
import styled from 'styled-components';
import Link from 'next/link';

import { up, down, between, only } from 'styled-breakpoints';

const Nav = () => {
  return (
    <div>
      <Container>
        <Flex>
          <div>
            <AlientLogo />
          </div>
          <LinkWrapper>
            <div>
              <Link href='/thestack'>/thestacks</Link>
            </div>
            <div>
              <Link href='/thestack'>/motionstuff</Link>
            </div>
            <div>
              <Link href='/thestack'>/thestacks</Link>
            </div>
          </LinkWrapper>
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

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;

  backdrop-filter: blur(35px);
  a {
    color: ${({ theme }) => theme.colors.dark};
    text-decoration: none;
    font-weight: 500;
    margin-left: 1rem;

    :hover {
      color: #ea5455;
    }
  }
`;
const Title = styled.h1`
  color: dark;
  font-size: 1.2em;

  ${up('md')} {
    font-size: 1.5em;
  }
  font-weight: 600;
  letter-spacing: -0.8px;
`;
export default Nav;
