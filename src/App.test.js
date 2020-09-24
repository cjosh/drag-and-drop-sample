import React from 'react';
import { render } from '@testing-library/react';
import DraggableQuestions from './components/draggableQuestions/DraggableQuestions';

test('renders learn react link', () => {
  const sampleJSON = '{ "questions": ["how are you?","what\'s up?"]}';
  const { getByText } = render(<DraggableQuestions questions={sampleJSON} callback={() => {}} />);
  const dndElement = getByText(/what's up/i);
  expect(dndElement).toBeInTheDocument();
});
