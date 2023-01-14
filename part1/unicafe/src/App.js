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
      <table>
        <tbody>
          <StatisticLine text="Good" value={good}/>
          <StatisticLine text="Neutral" value={neutr}/>
          <StatisticLine text="Bad" value={bad}/>
          <StatisticLine text="All" value={all}/>
          <StatisticLine text="Average" value={avg}/>
          <StatisticLine text="Positive" value={pos}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  // to display % for positive
  if(text == "Positive") {
    return (
      <tr>
        <td>{text}:</td><td>{value}%</td>
    </tr>
    )
  }

  return (
    <tr>
      <td>{text}:</td><td>{value}</td>
    </tr>
  )
}

export default App;