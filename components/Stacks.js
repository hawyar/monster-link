import { Container } from './atoms/index';
import styled from 'styled-components';
const Stacks = () => {
  return (
    <Container>
      <Wrapper>hello</Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;
`;

export default Stacks;
