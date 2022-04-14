import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course}/>
      <Content content = {course.parts}/>
      <Total num ={course.parts}/>
    </div>
  )
}
const Header = (coursename) => {
  //console.log(coursename.course.parts[0])
  return(
    <div>
      <h1>{coursename.course.name}</h1>
    </div>
  )
}

const Content = (props) => {
  //console.log(props.content.parts)
  return(
    <div>
      <Part parts={props.content[0]}/>
      <Part parts={props.content[1]}/>
      <Part parts={props.content[2]}/>
    </div>
  )
}
const Part = (part) => <p>{part.parts.name} {part.parts.exercises}</p>

const Total = (props) => <p>{props.num[0].exercises+
  props.num[1].exercises+
  props.num[2].exercises}
  </p>

export default App