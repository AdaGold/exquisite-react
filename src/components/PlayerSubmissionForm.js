import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PoemInput from './PoemInput';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{  }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your PoemInputs here... We've put in one below as an example
            }
            <PoemInput />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
