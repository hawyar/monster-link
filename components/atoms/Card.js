import styled from 'styled-components';
import ExternalLink from '../SVG/ExternalLink';

function truncString(str, max, add) {
  add = add || '...';
  return typeof str === 'string' && str.length > max
    ? str.substring(0, max) + add
    : str;
}

const Card = ({ data }) => {
  const { Name, URL, Description } = data.item?.fields || data.fields;
  console.log(data.item);
  return (
    <Wrapper>
      <h3>{Name}</h3>
      <a href={URL} target='_blank' rel='noopener noreferrer'>
        <IconWrapper>
          <ExternalLink width={20} color='#000' />
        </IconWrapper>
      </a>
      <p>{truncString(Description, 80, '...')}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  box-shadow: 10px 10px 118px 13px rgba(0, 0, 0, 0.06);
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
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

  height: 120px;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
`;
export default Card;
