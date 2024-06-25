import { useState } from "react";

const App = () => {

  
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Please Give Feedback, Thank you!</h1>


      <button onClick={() => setGood(good+1)}>Good</button>

      <button onClick={() => setNeutral(neutral+1)}>Neutral</button>

      <button onClick={() => setBad(bad+1)}>Bad</button>
      <h1>Statistics</h1>
      <h3>Good: {good}</h3>
      <h3>Neutral: {neutral}</h3>
      <h3>Bad: {bad}</h3>
    </div>
  );
};

export default App;
