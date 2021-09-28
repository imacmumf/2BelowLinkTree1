// import React, { useState } from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

import "./LinkButton.css";

// import React, { useState } from 'react';

function LinkButton(props) {
  let logo = <img src={props.pic} alt="logo" width="100" height="100"></img>;

  let linkTitle = props.title;
  const clickHandler = (e) =>{
    e.preventDefault();
    window.location.href = props.link;

  }

  return (
    <div>
      <div className="Card">
      <div className="logo-pic" onClick={clickHandler}>{logo}</div>
        <a href={props.link} target="blank" rel="noopener noreferrer" className = "link-title">
          {linkTitle}
        </a>
      </div>
    </div>
  );
}

export default LinkButton;
