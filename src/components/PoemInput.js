import React from 'react';
import './PoemInput.css';

const PoemInput = (props) => {

  const isValid = () => {
    return props.value.length;
  }

  return (
    <input
      placeholder={ props.placeholder }
      value={ props.value }
      onChange={ (e) => { props.onPoemInputChange(e.target.value, props.inputId) } }
      type="text"
      className={isValid() ? "PoemInput__input" : "PoemInput__input invalid"}
    />
  );
}

export default PoemInput;
