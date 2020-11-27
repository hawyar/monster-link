import styled from 'styled-components';

export const Input = styled.input`
  -webkit-writing-mode: horizontal-tb !important;
  writing-mode: horizontal-tb;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3),
    inset 0 1px 2px rgba(67, 90, 111, 0.14);

  background-color: white;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 0 10px;
  height: 32px;
  width: 100%;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Manrope';
  font-size: 0.9rem;

  ::placeholder {
    font-family: 'Manrope';
  }
`;

export const TextArea = styled.textarea`
  writing-mode: horizontal-tb;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  border: none;
  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3),
    inset 0 1px 2px rgba(67, 90, 111, 0.14);

  background-color: white;
  border: 3;
  padding: 10px 10px;
  width: 100%;
  cursor: text;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: 'Manrope';
  font-size: 0.9rem;

  ::placeholder {
    font-family: 'Manrope';
  }
`;
