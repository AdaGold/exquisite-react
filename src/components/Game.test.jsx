import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from './Game';

// The expected fields in each line of the poem
const FIELDS = [
  'The',
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
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

const INPUT_FIELDS = FIELDS.filter((element) => typeof element !== 'string');

describe('Game', () => {
  describe('Wave 1:  Rendering Game', () => {
    test('it renders in the document', () => {
      // Act
      render(<Game />);

      const rulesText = screen.getByText(/Each player should take turns filling out and submitting the form below/i);
      expect(rulesText).toBeInTheDocument();

      const playerText = screen.getByText(/Player Submission Form for Player #1/i);
      expect(playerText).toBeInTheDocument();
    });
  });

  describe('User Interaction', () => {
    // Helper function
    const enterLineToPoem = async (words) => {
      // Enter a word in each of the input fields
      let i = 0;

      for (let index = 0; index < INPUT_FIELDS.length; index += 1) {
        let field = INPUT_FIELDS[index];
        const regex = new RegExp('^' + field.placeholder + '$', 'i');


        const inputFields = screen.queryAllByPlaceholderText(regex);

        let inputField = undefined;
        if (inputFields.length === 1) {
          inputField = inputFields[0];
        } else {
          for (let j = 0; j < inputFields.length; j++) {
            if (inputFields[j].value === '') {
              inputField = inputFields[j];
              break;
            }
          }
        }

        if (inputField !== undefined) {
          // console.log(`Entering ${ words[i] }`);
          await userEvent.type(inputField, words[i]);
          expect(inputField.value).toEqual(words[i]);
        }

        i += 1;
      }

      // submit the line
      const submitBtn = screen.getByText(/Submit Line/i);
      await userEvent.click(submitBtn);
    };
    // Arrange
    beforeEach(() => {
      render(<Game />);
    });


    describe('Wave 2:  Showing lines of poetry', () => {
      test('you can enter a line of the poem', async () => {
        const line = ['big', 'cat', 'abruptly', 'eats', 'tasty', 'dogfood'];
        // Act-Assert
        await enterLineToPoem(line);
      });

      test('you can click on the "We are finished: Reveal the Poem" button', async () => {
        // Arrange
        // Submit the poem
        const finishPoemButton = screen.getByDisplayValue(/We are finished: Reveal the Poem/i);
        // Make sure finish the poem is in the document
        expect(finishPoemButton).toBeInTheDocument();

        // Act
        await userEvent.click(finishPoemButton);

        // Assert
        expect(screen.getByText(/Final Poem/i)).toBeInTheDocument();
      });

      test('Adding 2 lines to the poem and then revealing it', async () => {
        const line1 = ['big', 'cat', 'abruptly', 'eats', 'tasty', 'dogfood'];
        const line2 = ['small', 'pooch', 'slowly', 'whines', 'annoying', 'pest'];

        // Enter the 1st line into the poem
        await enterLineToPoem(line1);

        // Enter the 2nd line into the poem
        await enterLineToPoem(line2);

        // Submit the poem
        const finishPoemButton = screen.getByDisplayValue(/We are finished: Reveal the Poem/i);
        await userEvent.click(finishPoemButton);

        // Assert the poem is displayed
        line1.forEach((word) => {
          expect(screen.getByText(new RegExp(word, 'i'))).toBeInTheDocument();
        });

        line2.forEach((word) => {
          expect(screen.getByText(new RegExp(word, 'i'))).toBeInTheDocument();
        });

        // Check that it says, "Final Poem"
        expect(screen.getByText(/Final Poem/i)).toBeInTheDocument();
      });
    });

    describe('Wave 3, these test submitting a finished poem', () => {
      test('you can click on the "We are finished: Reveal the Poem" button', async () => {
        // Arrange
        // Submit the poem
        const finishPoemButton = screen.getByDisplayValue(/We are finished: Reveal the Poem/i);
        // Make sure finish the poem is in the document
        expect(finishPoemButton).toBeInTheDocument();

        // Act
        await userEvent.click(finishPoemButton);

        // Assert
        expect(screen.getByText(/Final Poem/i)).toBeInTheDocument();
      });

      test('Adding 2 lines to the poem and then revealing it', async () => {
        const line1 = ['big', 'cat', 'abruptly', 'eats', 'tasty', 'dogfood'];
        const line2 = ['small', 'pooch', 'slowly', 'whines', 'annoying', 'pest'];

        // Enter the 1st line into the poem
        await enterLineToPoem(line1);

        // Enter the 2nd line into the poem
        await enterLineToPoem(line2);

        // Now "abruptly" won't be shown  <-- Wave 3 Difference
        // Previous lines are hidden until revealed at the end
        const abruptlyElement = screen.queryByText(/abruptly/);
        expect(abruptlyElement).toBeNull();

        // Submit the poem
        const finishPoemButton = screen.getByDisplayValue(/We are finished: Reveal the Poem/i);
        await userEvent.click(finishPoemButton);

        // Assert the poem is displayed
        line1.forEach((word) => {
          expect(screen.getByText(new RegExp(word, 'i'))).toBeInTheDocument();
        });

        line2.forEach((word) => {
          expect(screen.getByText(new RegExp(word, 'i'))).toBeInTheDocument();
        });

        // Check that it says, "Final Poem"
        expect(screen.getByText(/Final Poem/i)).toBeInTheDocument();
      });
    });
  });
});
