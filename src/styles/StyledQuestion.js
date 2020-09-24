import styled from 'styled-components';

const questionTextColor = '#9a86fd';

export const StyledQuestion = styled.div`
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  font-size: 1.5em;
  border-radius: 2px;
  color: ${questionTextColor};
  background: #fff;
  border: 1px solid ${questionTextColor};
  height: 30px;
  margin-left: 10px;
  text-align: left;
  cursor: grab;
  overflow: hidden;
  text-overflow: ellipsis;
`;