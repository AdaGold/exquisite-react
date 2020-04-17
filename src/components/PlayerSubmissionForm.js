import React, { useState } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const initialFieldValues = {};
  props.fields.forEach((field) => {
    if (field.key) {
      initialFieldValues[field.key] = '';
    }
  });

  const [formFields, setFormFields] = useState(initialFieldValues);

  const resetForm = () => {
    setFormFields(initialFieldValues);
  }

  const onPoemInputChange = (val, id) => {
    setFormFields({
      ...formFields,
      [id]: val,
    });
  }

  const sendSubmission = (e) => {
    e.preventDefault();
    const submission = props.fields.map((field) => {
      if (field.key) {
        return formFields[field.key];
      } else {
        return field;
      }
    });
    props.sendSubmission(submission.join(" "));
    resetForm();
  }

  const isValidInput = (val) => {
    return val.length;
  }

  const inputContent = props.fields.map( (field, i) => {
    if (field.key) {
      return <input
        key={ i }
        placeholder={ field.placeholder }
        value={ formFields[field.key] }
        onChange={ (e) => { onPoemInputChange(e.target.value, field.key) } }
        type="text"
        className={isValidInput(formFields[field.key]) ? "PlayerSubmissionForm__input" : "PlayerSubmissionForm__input--invalid"}
      />;
    } else {
      return field;
    }
  })

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{ props.index }</h3>

      <form
        onSubmit={ sendSubmission }
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
