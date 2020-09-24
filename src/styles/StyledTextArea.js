import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  font-family: monospace;
  color: #fff;
  background: #666;
  font-size: 2em;
  resize: none;
  width: 50vw;
  height: 600px;
  overflow-y: auto;
  &.error {
    outline: 2px solid red;
  }
`;
