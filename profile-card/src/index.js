import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <Skillset />
      </div>
    </div>
  )
} 

function Avatar() {
  return 
}

function Intro() {
  const name = "Jason Lay"
  const description = "Full-stack web developer and student at Charles Darwin University. When I am not coding I like to spend time with my family and listen to music"

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

function Skillset() {
  return (
    <div className='skill-list'>
      <Skill skill="React" emoji="💪" color="#58c4dc"/>
      <Skill skill="HTML" emoji="💪"/>
      <Skill skill="CSS" emoji="💪"/>
      <Skill skill="JavaScript" emoji="💪"/>
    </div>
  )
}

function Skill(props) {
  return (
    <div className='skill'>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
