import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import React from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const updateState = key => {
    setFeedback(prev => {
      return { ...prev, [key]: prev[key] + 1 };
    });
  };
  const { good, bad, neutral } = feedback;
  const totalCounter = () => {
    return Object.values(feedback).reduce((acc, el) => acc + el, 0);
  };
  const positivePercentageCounter = () => {
    return Math.round((good / totalCounter()) * 100) + '%';
  };
  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={updateState}
      />
      {totalCounter() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalCounter()}
          positivePercentage={positivePercentageCounter() || 0}
        />
      ) : (
        <Notification messoge={'There is no feedback'} />
      )}
    </Section>
  );
};

export default App;
