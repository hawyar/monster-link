import { up, down, between, only } from 'styled-breakpoints';
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem auto;
  justify-content: space-between;
  padding: 0 1rem;

  ${up('sm')} {
    max-width: 460px;
  }
  ${up('md')} {
    max-width: 620px;
  }
  ${up('lg')} {
    max-width: 920px;
  }
`;

// sm: '576px',
// md: '768px',
// lg: '992px',
// xl: '1200px',
