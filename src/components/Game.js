import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {

  const [submissions, setSubmissions] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const revealPoem = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  const addPlayerSubmission = (submission) => {
    setSubmissions([ ...submissions, submission]);
  }

  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(" ");

  const mostRecentSubmission = submissions.length > 0 && !isSubmitted ? <RecentSubmission submission={ submissions[submissions.length - 1] } /> : '';

  const playerSubmissionForm = isSubmitted ? '' : <PlayerSubmissionForm
    index={ submissions.length + 1 }
    sendSubmission={ addPlayerSubmission }
    fields={ FIELDS } />;

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      { mostRecentSubmission }

      { playerSubmissionForm }

      <FinalPoem
        isSubmitted={ isSubmitted }
        revealPoem={ revealPoem }
        submissions={ submissions } />

    </div>
  );
}


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

export default Game;
