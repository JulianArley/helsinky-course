import { useState } from 'react';

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}
const MostVotedAnecdote = ({votes, anecdotes}) => {
  let mostVoted = anecdotes[0], votesNumber = votes[0]
  console.log(mostVoted);
  console.log(votesNumber);
  console.log('-----');
  for (let i = 0; i < anecdotes.length; i++) {
    if(votes[i] > votesNumber) {
      mostVoted = anecdotes[i]
      votesNumber = votes[i]
    }
    
  }

  if(votesNumber === 0) return (
    <h1>There aren't still votes</h1>
  )

  return(
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{mostVoted}</p>
      <p>has: {votesNumber}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(8).fill(0))

  const getRandomAnecdote = () => setSelected( Math.floor(Math.random() * (7 - 0 + 1)) + 0 )
  const voteAnecdote = (selectedAnecdote) => {
    const copy = [...votes]
    copy[selectedAnecdote] ++;

    setVote(copy);
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>

      <Button handler={getRandomAnecdote} text='Next anecdote' />
      <Button handler={() => voteAnecdote(selected)} text='Vote anecdote' />

      <MostVotedAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App