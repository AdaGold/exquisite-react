import { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const buildInitialState = (fields) => {
  // fields is an array that either has a string, or an object
  // providing input details. We need to initialize our state
  // object to have a slot for each input, otherwise we'll get
  // warnings in our form inputs going from unbound to bound

  const inputState = {};

  for (const field of fields) {
    if (field.key) {  // or more explicitly if ('key' in field)
      // this must be an input
      inputState[field.key] = '';
    }
  }

  return inputState;
};

const PlayerSubmissionForm = ({ index, sendSubmission, fields }) => {
  const [formData, setFormData] = useState(() => buildInitialState(fields));

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(formData => (
      { ...formData, [name]: value }
    ));
  };

  const handleSubmit = (e) => {
    // prevent default submission behavior
    e.preventDefault();

    // send data to host
    sendSubmission(formData);

    // reset form
    setFormData(buildInitialState(fields));
  };

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={handleSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            fields.map(field => {
              if (field.key) {
                // an actual input
                const { key, placeholder } = field;
                const value = formData[field.key];
                return <input
                  key={key}
                  name={key}
                  placeholder={placeholder}
                  type="text"
                  value={value}
                  className={value || 'PlayerSubmissionForm__input--invalid'}
                  onChange={handleChange}
                />;
              } else {
                // template text
                return field;
              }
            })
          }

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
};

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
};

export default PlayerSubmissionForm;


// adj1
// noun1
// adv
// verb
// adj2
// noun2
