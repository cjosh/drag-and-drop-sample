import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { getValidJSON } from '../../helpers';
import { StyledInstruction } from '../../styles/StyledInstruction';

const DraggableQuestions = ({ questions, callback }) => {
  const [listOfQuestions, setListOfQuestions] = useState([]);

  useEffect(() => {
    const validQuestionJSON = getValidJSON(questions);
    if (validQuestionJSON && validQuestionJSON.questions) {
      setListOfQuestions(validQuestionJSON.questions.map(q => q));
    }
  }, [questions]);

  return (
    <div className="question-list">
      { listOfQuestions.length ?
        listOfQuestions.map((questionText, i) => (
          <Question
            key={`q${i}`}
            text={questionText}
            index={i}
            callback={callback} />
        ))
        :
        <StyledInstruction>
          Welcome to the Drag and Drop Questions App,
          please enter an array of question strings on the left side to get started.
        </StyledInstruction>
      }
    </div>
  );
};

DraggableQuestions.propTypes = {
  questions: PropTypes.string,
  callback: PropTypes.func,
};

export default DraggableQuestions;