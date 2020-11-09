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
  padding: 5px 8px;
  border-radius: 20px;
  background-color: #e25822;
  display: inline-block;
  color: black;
  font-size: 12px;
  bottom: 1rem;

  span {
    font-weight: 500;
  }
`;
export default Badge;
