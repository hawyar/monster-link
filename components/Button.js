import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => (props.primary ? props.theme.colors.secondary : 'red')};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : props.theme.colors.pi};
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9em;

  width: auto;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.black};
  }
`;
