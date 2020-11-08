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
  padding: 5px 8px;
  border-radius: 20px;
  background-color: #cfdfff;
  display: inline-block;
  color: #102046;
  font-size: 12px;
  bottom: 1rem;
  margin-right: 5px;
  margin-bottom: 5px;
`;
export default Badge;
