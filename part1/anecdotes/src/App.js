import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [allVotes, addVote] = useState([0, 0, 0, 0, 0, 0, 0])
  const [best, showBest] = useState(-1)

  const vote = () => {
    const copy = {...allVotes}
    copy[selected] += 1
    addVote(copy)
    getBest(copy)
    let max = copy[best]
    let idx = selected
    console.log("here")
    console.log("max: ", max)
    console.log("best idx: ", idx)
    for(const i in copy) {
      if(max < copy[i]) {
        max = copy[i]
        idx = i
      }
    }
    showBest(idx)
  }

  const randomInt = () => {
    let max = anecdotes.length
    let rand = Math.floor(Math.random() * (max - 0) + 0)

    if(selected === rand) {
      rand++
      if(rand > max)
        rand = 0
    }
    setSelected(rand)
  }

  function getBest(arr) {
    console.log("Votes array: ", arr)
    let max = 0
    let idx = 0
  
    for(const i in arr) {
      if(max < arr[i]) {
        max = arr[i]
        idx = i
      }
    }
  
    console.log("Max votes: ", max)
    console.log("Max idx: ", idx)
    showBest(idx)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      Has {allVotes[selected]} votes
      <br />
      <Button text="Next" onClick={randomInt}/>
      <Button text="Vote" onClick={vote}/>
      <h1>Best Anecdote</h1>
      {anecdotes[best]}
      <br />
      has {allVotes[best]} votes.
    </div>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default App;