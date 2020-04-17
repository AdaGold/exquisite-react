import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = () => {

  const isValidInput = (val) => {
    return val.length;
  }

  const inputContent = this.props.fields.map( (field, i) => {
    if (field.key) {
      return <input
        key={ i }
        placeholder={ field.placeholder }
        value={ this.state[field.key] }
        onChange={ (e) => { this.onPoemInputChange(e.target.value, field.key) } }
        type="text"
        className={isValidInput(this.state[field.key]) ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
      />;
    } else {
      return field;
    }
  })

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ this.props.index }</h3>

      <form
        onSubmit={ this.sendSubmission }
        className="PlayerSubmissionForm__form">

        <div className="PlayerSubmissionForm__poem-inputs">

          {inputContent}

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  )
}


export default PlayerSubmissionForm;
