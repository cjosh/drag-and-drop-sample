
import React from 'react';
import PropTypes from 'prop-types';
import { StyledQuestion } from '../../styles/StyledQuestion';

const Question = ({ text, index, callback }) => {
  const handleOnDragStart = (e) => {
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('index', index);
  }

  const handleOnDrop = (e) => {
    callback({
      from: parseInt(e.dataTransfer.getData('index'), 10),
      to: index,
    });
  }

  const handleOnDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <StyledQuestion
      draggable
      onDragOver={(e) => handleOnDragOver(e)}
      onDragStart={(e) => handleOnDragStart(e)}
      onDrop={(e) => handleOnDrop(e)}>
      {text}
    </StyledQuestion>
  );
}

Question.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  callback: PropTypes.func,
};

export default Question;