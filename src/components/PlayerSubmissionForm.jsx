import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({ index, submissionAction, fields }) => {
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" action={submissionAction}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            fields.map(field => {
              if (field.key) {
                // an actual input
                const { key, placeholder } = field;
                return <input
                  key={key}
                  name={key}
                  placeholder={placeholder}
                  type="text"
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
  submissionAction: PropTypes.func.isRequired,
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
