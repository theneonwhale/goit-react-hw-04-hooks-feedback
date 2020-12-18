import { useState } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(option => option + 1);
        break;
      case 'neutral':
        setNeutral(option => option + 1);
        break;
      case 'bad':
        setBad(option => option + 1);
        break;
      default:
        throw new Error(`Something is wrong with ${option}`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback()) || 0;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback was given." />
        )}
      </Section>
    </Container>
  );
}
