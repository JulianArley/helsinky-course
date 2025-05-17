import { useState } from 'react';

const StatisticLine = ({text, value}) => {
  let textComplement = ''
  if(text === 'Positive') textComplement = '%'

  return (
    <>
      <tr>
        <td>
            {text}
        </td>
        <td>
            {value} {textComplement}
        </td>
      </tr>
    </>
  )
}

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
  
}

const Statistics = ({values}) => {
  const [good, bad, neutral] = values

  const total = good + bad + neutral;
  const average = (good - bad) / total
  const positive = ((good / total) * 100)

  if (total === 0) return (
    <div>
      <p>
        No feedback given
      </p>
    </div>
  )

  if (total !== 0) return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='Total' value={total} />
          <StatisticLine text='Average' value={average} />
          <StatisticLine text='Positive' value={positive} />
        </tbody>
      </table>
    </div>
  )

}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => {
    setGood(good + 1)
  }

  const neutralHandler = () => {
    setNeutral(neutral + 1)
  }

  const badHandler = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Feedback</h1>
      <Button handler={goodHandler} text="Good" />
      <Button handler={neutralHandler} text="Neutral" />
      <Button handler={badHandler} text="Bad" />

      <h2>Statistics</h2>
      <Statistics values={[good, bad, neutral]} />
    </div>
  )
}

export default App