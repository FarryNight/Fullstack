import React,{useState} from "react";

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [selected, setSelected] = useState(0)
  const max = anecdotes.length

  const [score, setScore] = useState(new Array(max+1).join('0').split('').map(parseFloat))

  const updatePoints = (i) => {
    return () => {
      let copy = [...score]
      copy[i] += 1
      setScore(copy)
      console.log(copy)
    }
  }

  return (
    <div>
      <div>{anecdotes[selected]}</div>
      <Button 
      Feed = {() => setSelected(selected - selected + Math.floor(Math.random()*max) )} 
      text = 'next ancedotes'/>
      <button onClick={updatePoints(selected)}>vote</button>
      <MaxRate arr={score} anecdotes={anecdotes}/>
    </div>
  );
}

const Button = ({Feed,text}) => (  
  <button onClick = {Feed} >
    {text}
  </button>
)

const MaxRate = ({arr,anecdotes}) => {
  var indexMax = arr.indexOf(Math.max(...arr))
  console.log(indexMax)
  if( Math.max(...arr) === 0){
    return(
      <div>
        {arr[indexMax]}
        {anecdotes[indexMax]}
      </div>
    )
  }
  return(
    <div>
      <h3>vote : {arr[indexMax]}</h3>
      ancedotes: {anecdotes[indexMax]}
    </div>
  )
    
}

export default App;
