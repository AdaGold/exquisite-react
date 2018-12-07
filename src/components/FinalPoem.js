import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  const revealPoemButton =
    <form onSubmit={ props.revealPoem } className="FinalPoem__reveal-form">
      <input type="submit" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
    </form>;

  const poemContent = props.submissions.map((line, i) => {
    return <p key={ i }>{ line }</p>;
  });

  const revealedPoem =
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      { poemContent }
    </section>;

  const content = props.isSubmitted ? revealedPoem : revealPoemButton;

  return (
    <div className="FinalPoem">
      { content }
    </div>
  );
}

export default FinalPoem;
