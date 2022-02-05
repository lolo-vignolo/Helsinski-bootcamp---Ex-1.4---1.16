import React from 'react';

const Statistic = ( {good, neutral, bad, total, average} ) => {
    return (
        <>
         
             <ul>
               <li>Good {good} </li>
               <li>Neutral {neutral} </li>
               <li>Bad {bad}</li>
               <li><strong>Total:{total} </strong></li>
               <li><strong>Average: {average} % </strong></li>
             </ul>
            
        </>
    );
};

export default Statistic;