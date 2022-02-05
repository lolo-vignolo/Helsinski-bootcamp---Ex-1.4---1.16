import React from 'react';

const Buttons = ({onClick, buttonName }) => {
    return (
              <button style={{margin:"4px", borderRadius:"70px"}} onClick={onClick}>{buttonName}</button>  
    );
};

export default Buttons;