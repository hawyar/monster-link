import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  margin: 0;
  font-family: 'Manrope';
`;
export default Layout;
