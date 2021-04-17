import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  const Button = ({ text, handleClick }) => {
    return (
      <div>
        <button onClick={handleClick}> {text} </button>
      </div>
    )
  }

  const Statistic = ({ text, value }) => {
    return (
      <tr>
        <td> {text} </td>
        <td> {value} </td>
      </tr>
    )
  }
  const Statistics = ({ good, neutral, bad }) => {
    if (good + neutral + bad === 0) {
      return (
        <><p> No feedback given </p></>
      )
    }
    return (
      <table>
        <tbody>
          <Statistic text={"good"} value={good} />
          <Statistic text={"neutral"} value={neutral} />
          <Statistic text={"bad"} value={bad} />
          <Statistic text={"all"} value={good + neutral + bad} />
          <Statistic text={"average"} value={(good - bad) / (good + neutral + bad)} />
          <Statistic text={"positive"} value={good / (good + neutral + bad) + "%"} />
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} handleClick={goodClick} />
      <Button text={"neutral"} handleClick={neutralClick} />
      <Button text={"bad"} handleClick={badClick} />

      <h1>statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
