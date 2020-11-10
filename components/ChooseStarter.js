import { Container } from '../components/atoms/Container';
import styled from 'styled-components';
const ChooseStarter = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <p>starter</p>
        </Wrapper>
      </Container>
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;
`;

export default ChooseStarter;
