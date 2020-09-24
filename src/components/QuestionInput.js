import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledTextArea } from '../styles/StyledTextArea';

const QuestionInput = ({ questions, callback, error }) => {
  const cssClassName = error ? 'error' : '';
  const textAreaRef = useRef();
  useEffect(() => { textAreaRef.current.focus()});

  return (
    <StyledTextArea
      className={cssClassName}
      ref={textAreaRef}
      value={questions}
      onChange={(e) => callback(e)}/>
  );
}

QuestionInput.propTypes = {
  questions: PropTypes.string,
  callback: PropTypes.func,
  error: PropTypes.bool,
};

export default QuestionInput;