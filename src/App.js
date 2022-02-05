
import { useState } from 'react';
import Anecdotas from './components/Anecdotas';
import Buttons from './components/Buttons';
import Statistic from './components/Statistic';

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sumClick, setSumClick] = useState(0)
  

  const handleGood  = ()=> {
    setGood(good + 1 )
    setTotal(total+1)
    setSumClick(sumClick +1)
   
    
  }

  const handleNeutral = ()=> {
    setNeutral(neutral + 1)
    setSumClick(sumClick +1)   
   
  }

  const handleBad  = ()=> {
    setBad (bad + 1)
    setTotal(total- 1)
    setSumClick(sumClick +1)
   
  }

  const average = ((good-bad)/sumClick).toFixed(2)
 


  return (
          <>
          <section>
              <div>
                <h1>Give us Feedback about your experience</h1>
              </div>
              <div>
                <Buttons onClick={handleGood} buttonName={"Good"} />
                <Buttons onClick={handleNeutral} buttonName={"Neutral"} />
                <Buttons onClick={handleBad} buttonName={"Bad"} />
              </div>
          </section>
          <section>
          <div>
          <h1>Statistics</h1>
          { sumClick?  (

                  <Statistic 
                      good = {good}
                      neutral = { neutral}
                      bad = {bad}
                      total = {total}
                      average = {average}
                    />
          ) : <h3>No feedback Given </h3>
            
            
          }
             
          </div>
          </section>
          <section>
            
              <Anecdotas />
            
          </section>

        
          </>
  );
}

export default App;
