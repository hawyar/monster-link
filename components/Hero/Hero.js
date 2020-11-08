import styled from 'styled-components';
import { up, down, between, only } from 'styled-breakpoints';
import { Container } from '../atoms/Container';

const Hero = () => {
  return (
    <div>
      <Container>
        <Title>All the resourceful links in one place.</Title>
      </Container>
    </div>
  );
};

const Title = styled.h1`
  color: dark;
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: -0.8px;
  padding: 2rem 0;
`;

export default Hero;
