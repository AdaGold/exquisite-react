import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from './Game';

// The expected fields in each line of the poem
const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];
describe('Game', () => {
  test('it renders in the document', () => {
    // Act
    render(<Game />);

    const rulesText = screen.getByText(/Each player should take turns filling out and submitting the form below/i);
    expect(rulesText).toBeInTheDocument();

    const playerText = screen.getByText(/Player Submission Form for Player \#1/i);
    expect(playerText).toBeInTheDocument();
  });

  describe('User Interaction', () => {
    // Arrange
    beforeEach(() => {
      render(<Game />);
    });


    test('You can type into the input fields and add lines to the poem', () => {
      const text = 'abcdefghijklmnopqrstuvwxyz';
      let index = 0;
      let lineEndsIndex = [];

      // Act
      // Type in each textbox a different letter
      let inputFields = screen.getAllByRole('textbox');

      expect(inputFields.length).toBeGreaterThan(0);

      inputFields.forEach((inputField) => {
        userEvent.type(inputField, text.charAt(index));
        index += 1;
      });

      // submit the line
      const submitBtn = screen.getByText(/Submit Line/i);
      userEvent.click(submitBtn);
      lineEndsIndex.push(index);

      // fill in the 2nd line of the poem.
      inputFields = screen.getAllByRole('textbox');

      expect(inputFields.length).toBeGreaterThan(0);

      inputFields.forEach((inputField) => {
        userEvent.type(inputField, text.charAt(index));
        index += 1;
      });
      // submit the line
      userEvent.click(submitBtn);
      lineEndsIndex.push(index);


      // Submit the poem

      const finishPoemButton = screen.getByDisplayValue(/We are finished: Reveal the Poem/i);
      userEvent.click(finishPoemButton);

      // Assert the poem is displayed

      // Check that it says, "Final Poem"
      expect(screen.getByText(/Final Poem/i)).toBeInTheDocument();
      // Check that each line is displayed
      let currentIndex = 0;
      while (currentIndex < index) {
        let addToLine = [];
        for (const field of FIELDS) {          
          if (typeof field === 'string') {
            addToLine.push(field);            
          } else {
            addToLine.push(text.charAt(currentIndex));
            currentIndex += 1;
          }        
        }
        let line = addToLine.join(' ');
        expect(screen.getByText(line)).toBeInTheDocument();
      }
    });
  });
});