import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateState = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };
  // handleClick = ev => {
  //   this.updateState(ev.target.dataset.id);
  // };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };
  positivePercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) + '%';
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.updateState}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.positivePercentage(this.state) || 0}
          />
        ) : (
          <Notification messoge={'There is no feedback'} />
        )}
      </Section>
    );
  }
}
export default App;
