import React from 'react';
import AlientLogo from '../SVG/AlienLogo';
import { Container } from '../atoms/index';
import styled from 'styled-components';
import Link from 'next/link';

import { up, down, between, only } from 'styled-breakpoints';

const Nav = () => {
  return (
    <div>
      <StyledNav>
        <Wrapper>
          <div>
            <AlientLogo />
          </div>
          <LinkWrapper>
            <Link href='/thestack'>» thestacks</Link>
          </LinkWrapper>
        </Wrapper>
      </StyledNav>
    </div>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 12;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 12rem;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  ::after {
    background-color: rgba(214, 214, 214, 0.4);
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;

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

export default Nav;
