import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedbacks = good + neutral + bad;
  const averageFeedbacks = (good * 1 + neutral * 0 + bad * -1) / totalFeedbacks;
  const positiveFeedbacks = (good / totalFeedbacks) * 100;

  if (totalFeedbacks === 0) {
    return <div>No feedbacks given</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="average" value={averageFeedbacks} />
          <StatisticLine text="positive" value={`${positiveFeedbacks} %`} />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ handleClick, label }) => {
  return <button onClick={handleClick}>{label}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} label="good" />
        <Button handleClick={handleNeutralClick} label="neutral" />
        <Button handleClick={handleBadClick} label="bad" />
      </div>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
