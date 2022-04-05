import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1 = {part1} exercises1 = {exercises1} 
      part2 = {part2} exercises2 = {exercises2}
      part3 = {part3} exercises3 = {exercises3}
      />
      <Total all ={exercises1+exercises2+exercises3}/>
    </div>
  )
}
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => <Part part={props} exercises={props}/>

const Part = ({part,exercises}) => {
  return(
    <div>
      <p>{part.part1} {exercises.exercises1}</p>
      <p>{part.part2} {exercises.exercises2}</p>
      <p>{part.part3} {exercises.exercises3}</p>
    </div>
  )
}

const Total = (props) => <p>{props.all}</p>

export default App