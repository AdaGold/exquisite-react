import React from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>

      </section>

      <form className="FinalPoem__reveal-form">
        <input type="submit" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </form>
    </div>
  );
}

export default FinalPoem;
