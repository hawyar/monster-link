import styled from 'styled-components';

export const Heading = styled.p`
  font-size: ${(props) => {
    switch (props.size) {
      case 'xs':
        return `1rem`;
      case 'sm':
        return `2rem`;
      case 'md':
        return `2.2rem`;
      case 'lg':
        return `3rem`;
      default:
        return props.size;
    }
  }};
  text-decoration: none;
  margin: 0;
  padding: 0;
  line-height: auto;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.navy};
`;
