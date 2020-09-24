import React, { useState } from 'react';
import QuestionInput from './QuestionInput';
import DraggableQuestions from './draggableQuestions/DraggableQuestions';
import { getValidJSON } from '../helpers';
import { GlobalStyle } from '../styles/GlobalStyle';

const QuestionManager = () => {
  const [rawQuestionJSON, setRawQuestionJSON] = useState('{"questions": []}');
  const [error, setError] = useState(false);

  const handleQuestionInput = (event) => {
    const newQuestionJSON = event.target.value;
    setRawQuestionJSON(newQuestionJSON);
    const sanitizedQuestionJSON = getValidJSON(newQuestionJSON);
    setError(!sanitizedQuestionJSON);
  }

  const handleQuestionRearrange = (e) => {
    const validJSON = getValidJSON(rawQuestionJSON);
    if (!validJSON) return;
    const questionsArr = [...validJSON.questions];
    const rearrangedElement = questionsArr[e.from];
    questionsArr.splice(e.from, 1);
    questionsArr.splice(e.to, 0, rearrangedElement);
    setRawQuestionJSON(`{ "questions": [\n${questionsArr.map(q => `"${q}"\n`).toString()}]}`);
  }

  return (
    <React.Fragment>
      <QuestionInput
        error={error}
        questions={rawQuestionJSON}
        callback={handleQuestionInput} />
      <DraggableQuestions
        questions={rawQuestionJSON}
        callback={handleQuestionRearrange} />
      <GlobalStyle/>
    </React.Fragment>
  );
}

export default QuestionManager;
