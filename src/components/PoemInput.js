import React from 'react';

const PoemInput = (props) => {

  return (
    <input
      placeholder={ props.placeholder }
      value={ props.value }
      onChange={ (e) => { props.onPoemInputChange(e.target.value, props.inputId) } }
      type="text"
      className="PoemInput"
    />
  );
}

export default PoemInput;
