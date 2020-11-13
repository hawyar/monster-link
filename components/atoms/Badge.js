import styled from 'styled-components';

const Badge = ({ data }) => {
  return (
    <div>
      <StyledBadge>
        <span>{data}</span>
      </StyledBadge>
    </div>
  );
};

const StyledBadge = styled.div`
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 8px 12px;
  border-radius: 20px;
  color: black;
  background-color: #dedef0;
  display: inline-block;
  font-size: 12px;
  bottom: 1rem;

  span {
    font-weight: 500;
  }
`;
export default Badge;
