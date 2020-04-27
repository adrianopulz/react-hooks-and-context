import React from 'react';
import load_gif from '../images/loading.gif';

export default Loading => (
    <span className="loading" style={ { margin: "0 10px" } }>
      <img src={ load_gif } alt="Loading..."/>
    </span>
);