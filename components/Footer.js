import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Made with and Next.js & Airtable</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  p {
    font-weight: 500;
  }
`;
export default Footer;
