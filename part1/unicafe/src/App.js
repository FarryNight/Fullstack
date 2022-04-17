import React, { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <div> <h3>Give Feedback</h3> </div>
      <Button Feed = {() => setGood(good+1)}  text = 'good'/>
      <Button Feed = {() => setNeutral(neutral+1)} text = 'neutral' />
      <Button Feed = {() => setBad(bad+1)} text = 'bad' />
      <div><h1>statistice</h1></div>
      <Statistice good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({Feed,text}) => (  
  <button onClick = {Feed} >
    {text}
  </button>
)

const Statistice = ({good,neutral,bad}) => {
  if(good === 0 && neutral === 0 && bad === 0){
    return(
      <div><h2>no feedback yet</h2></div>
    )
  }
  return(
    <div>
      <h2>
        <StatisticLine value = {good} text ='good'/>
        <StatisticLine value = {neutral} text = 'neutral'/>
        <StatisticLine value = {bad} text = 'bad'/>
        <StatisticLine value = {( good + bad + neutral )} text = 'all'/>
        <StatisticLine value = {( good + bad*(-1) ) / (good + bad + neutral )} text = 'avg'/>
        <StatisticLine value = { good / ( good + bad + neutral )} text = 'positive'/>
      </h2>
    </div>
  )
}

const StatisticLine = ({text,value}) => {
  return(
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default App;