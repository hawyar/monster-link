import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Container } from '../atoms/Container';
const Hero = () => {
  return (
    <div>
      <Container>
        <Flex>
          <LeftBlock>
            <Title>
              Your one stop shop <br /> for all the resources you need.
            </Title>
            <a
              href='https://dribbble.com/shots/13995055-Free-Hanging-ID-Card-Mockup'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>Item of the day</Button>
            </a>
          </LeftBlock>

          <RightBlock>
            <img src='https://cdn.dribbble.com/users/1622978/screenshots/13995055/media/189480ca96d18fae67cb9c8daff0166c.jpg' />
          </RightBlock>
        </Flex>
      </Container>
    </div>
  );
};

const Flex = styled.div`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  ${up('md')} {
    flex-direction: row;
  }
`;

const LeftBlock = styled.div`
  align-self: flex-start;

  a {
    text-decoration: none;
  }
`;

const RightBlock = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 2rem;
  box-shadow: 5px 5px 25px 11px rgba(0, 0, 0, 0.03);
  background-color: transparent;
  ${up('md')} {
    margin-top: 0rem;
    width: 510px;
    height: 300px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: -0.8px;
  line-height: 1.2;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  padding: 18px 32px;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 3rem;
  text-transform: uppercase;
  display: flex;
`;

export default Hero;
