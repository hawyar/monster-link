import styled from 'styled-components';
import Badge from './Badge';
import { motion } from 'framer-motion';
import { up, down, between, only } from 'styled-breakpoints';
import useCopyClipboard from '../../lib/useCopyClipboard';

function truncString(str, max, add) {
  add = add || '...';
  return typeof str === 'string' && str.length > max
    ? str.substring(0, max) + add
    : str;
}

const Card = ({ data }) => {
  const [isCopied, handleCopy] = useCopyClipboard();
  const { Name, URL, Description, Category } = data.item
    ? data.item.fields
    : data.fields;

  return (
    <Wrapper>
      <a href={URL} target='_blank' rel='noopener noreferrer'>
        <Title>{Name}</Title>

        <IconWrapper
          whileHover={{ scale: 1.08 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          onClick={() => {
            handleCopy(URL);
          }}
        >
          <svg
            width={22}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
            />
          </svg>
        </IconWrapper>

        <Desc>{truncString(Description, 50, '...')}</Desc>
        <BadeWrapper>
          {Category.filter((el) => el != undefined).map((el) => {
            return <Badge data={el} />;
          })}
        </BadeWrapper>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 120px;
  width: 240px;
  position: relative;
  margin-top: 3rem;
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid #efefef;
  background-color: transparent;
  transition: border 0.3s ease-in-out;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }
  ${down('sm')} {
    width: 80%;
  }

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h3`
  color: #000;
  padding-bottom: 1rem;
  font-weight: 600;
`;

const Desc = styled.p`
  width: 90%;
  font-size: 0.9em;
  line-height: 1.2;
`;
const IconWrapper = styled(motion.span)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px;
  border-radius: 5px;

  z-index: 35;

  transition: background-color ease-in-out 0.2s;
  :hover {
  }
`;

const BadeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
export default Card;
