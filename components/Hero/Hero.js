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
              Your one stop shop <br /> for all the links you will need.
            </Title>
            <a
              href='https://dribbble.com/shots/4902089-Minimal-Brand-Guideline'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button>Grab item of the day</Button>
            </a>
          </LeftBlock>

          <RightBlock>
            <img src='https://cdn.dribbble.com/users/345970/screenshots/14522320/media/1eadfe89684404bfe35350b36970a07d.png' />
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
  background-color: red;
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
