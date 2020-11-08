import styled from 'styled-components';
import ExternalLink from '../SVG/ExternalLink';
import Badge from './Badge';
import { motion } from 'framer-motion';

function truncString(str, max, add) {
  add = add || '...';
  return typeof str === 'string' && str.length > max
    ? str.substring(0, max) + add
    : str;
}

const Card = ({ data }) => {
  const { Name, URL, Description, Category } = data.item
    ? data.item.fields
    : data.fields;

  return (
    <Wrapper>
      <h3>{Name}</h3>
      <a href={URL} target='_blank' rel='noopener noreferrer'>
        <IconWrapper
          whileHover={{ scale: 1.08 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
        >
          <ExternalLink width={20} color='#fff' />
        </IconWrapper>
      </a>
      <p>{truncString(Description, 50, '...')}</p>
      <BadeWrapper>
        {Category.map((el) => {
          return <Badge data={el} />;
        })}
      </BadeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  box-shadow: 10px 10px 118px 13px rgba(0, 0, 0, 0.06);
  margin-top: 3rem;
  background-color: #eeeeee;
  padding: 1.5rem;
  border-radius: 10px;

  h3 {
    width: 90%;

    font-weight: 600;
    padding-bottom: 20px;
  }

  p {
    width: 90%;
    line-height: 1.2;
  }

  min-height: 120px;
  width: 240px;
`;

const IconWrapper = styled(motion.span)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(16, 137, 255, 0.4);
`;

const BadeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
export default Card;
