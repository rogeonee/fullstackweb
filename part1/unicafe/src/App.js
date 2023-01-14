import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleBad = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)

  const all = good + neutral + bad

  let avg = 0
  if(good !== 0 || neutral !== 0 || bad !== 0) {
    avg = (good * 1 + neutral * 0 + bad * -1) / all
  }
  

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral}/>
      <Button text="bad" onClick={handleBad}/>

      <Header text="Statistics"/>
      <div>good: {good}</div>
      <div>neutral: {neutral}</div>
      <div>bad: {bad}</div>
      <div>all : {all}</div>
      <div>average: {avg}</div>
      <div>positive: {good / all * 100}%</div>
    </div>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App;
