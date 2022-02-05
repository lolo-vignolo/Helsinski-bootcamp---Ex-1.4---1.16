import React, { useState } from 'react';
import anecdotas from '../asset/anecdotas';
import Buttons from './Buttons';

const quizObject = [0 , 0 , 0 , 0 , 0 , 0 ]

//const initVotes = anecdotes.map(elem => 0);


const Anecdotas = () => {

    const [selected, setSelected] = useState(0)
    const [numVote , setNumVote] = useState (quizObject)
    const [maxVote , setMaxVote] = useState(0)

    const [max, setMax] = useState(0)

    console.log(maxVote);
   
    const handleSelected = () => {
        const random = Math.floor((Math.random() * anecdotas.length));
      
        setSelected(random)
    }

    const handleQuiz = () =>{
   
       const newList = [...numVote];
       newList[selected]+=1

       const m = Math.max(...newList);
       
       

       if (newList[selected] >= m){
           setMaxVote(selected)
       }
       setMax(m)
       setNumVote(newList);

    }    
   

    return (
        <>

        
        <div style={{margin:"5px"}}>   
            {anecdotas[selected]}
        </div> 
        <div>
            <p>{`This quote has ${numVote[selected]} votes `}</p>
        </div>
        <div>
        <h1>Anecdotae with more votes</h1>
            <h3> {anecdotas[maxVote]}</h3>
            <h4>{`it has ${max} votes `}</h4>

        </div>
        <div>   
            <Buttons 
                onClick = {handleSelected}  
                buttonName={"Anecdote"} 
            />
            <Buttons 
                onClick = {handleQuiz}
                buttonName={"Vote"}
            />              
        </div>
        </>
    );
};

export default Anecdotas;