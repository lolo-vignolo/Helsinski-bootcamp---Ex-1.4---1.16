import React from 'react';

const Buttons = ({onClick, buttonName }) => {
    return (
              <button onClick={onClick}>{buttonName}</button>  
    );
};

export default Buttons;