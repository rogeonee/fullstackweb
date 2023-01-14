import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleBad = () => setBad(bad + 1)
  const handleNeutral = () => setNeutral(neutral + 1)

  return (
    <div>
      <Header text="Give Feedback"/>
      <Button text="good" onClick={handleGood}/>
      <Button text="neutral" onClick={handleNeutral}/>
      <Button text="bad" onClick={handleBad}/>

      <Statistics good={good} bad={bad} neutr={neutral}/>
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

const Statistics = ({ good, bad, neutr }) => {
  const all = good + neutr + bad

  if(all === 0) {
    return (
      <div>
        <Header text="Statistics"/>
        No feedback given
      </div>
    )
  }

  let avg = (good * 1 + neutr * 0 + bad * -1) / all
  let pos = good / all * 100

  return (
    <div>
      <Header text="Statistics"/>
      <div>good: {good}</div>
      <div>neutral: {neutr}</div>
      <div>bad: {bad}</div>
      <div>all : {all}</div>
      <div>average: {avg}</div>
      <div>positive: {pos}%</div>
    </div>
  )
}

export default App;
