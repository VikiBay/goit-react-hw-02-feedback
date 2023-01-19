import { Component } from "react";
import {Statistics} from './Statistics/Statistics'
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {Section} from './Section/Section'
import { Notification } from "./Notification/Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = option =>{
    this.setState({[option]: this.state[option]+1})
  }
  
  countTotalFeedback() {
  return Object.values(this.state).reduce((acc,obj) =>(acc+obj),0)
  }

  countPositiveFeedbackPercentage(){
    return `${Math.round(this.state.good/this.countTotalFeedback()*100)}%`
  }

  render(){
    const {good, neutral,bad} = this.state;

// const positive = good/total*100;

  return (
    <div
      style={{
        height: '100vh',
        padding: '0 50px',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'left',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
         <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback}
      />
      </Section>

      {this.countTotalFeedback()>0 ? <Section title='Statistics'>
      <Statistics  good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()}
       positivePercentage={this.countPositiveFeedbackPercentage()}
      />
      </Section> : <Notification message={'There is no feedback'}/>}
      
    </div>
  )

    }
  }