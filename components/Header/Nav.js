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
          <div className='hover'>
            <Link href='/'>
              <AlientLogo />
            </Link>
          </div>
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
  margin: 0 auto;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: saturate(180%) blur(10px);
  ::after {
    background-color: rgba(214, 214, 214, 0.4);
  }

  .hover {
    cursor: pointer;
  }
`;

export default Nav;
