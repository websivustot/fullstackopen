import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    //console.log(props);
    return (
        <h1>{props.feedback.title}</h1>
    )
}

const Content = (props) => {

    return (
        <>
            <Button text={props.buttons[0]} setToValue={props.setToValue}/>
            <Button text={props.buttons[1]} setToValue={props.setToValue}/>
            <Button text={props.buttons[2]} setToValue={props.setToValue}/> 
        </>
    )
}

const Statistic = (props) => {
    return (
        <p>{props.text}: {props.value}</p>
    )
}

const Statistics = (props) => {
    if (props.feedback[1][3])  
        return (
            <>        
            <h2>Statistics</h2>
            <Statistic text={props.feedback[0].buttons[0]} value ={props.feedback[1][0]} />
            <Statistic text={props.feedback[0].buttons[1]} value ={props.feedback[1][1]} />
            <Statistic text={props.feedback[0].buttons[2]} value ={props.feedback[1][2]} />
            <Statistic text="All" value ={props.feedback[1][3]} />
            <Statistic text="Average" value ={props.feedback[1][4]} />
            <Statistic text="Positive" value ={props.feedback[1][5] + "%"} />            
            </>
        )
     else return (
        <>        
        <h2>Statistics</h2>
        <p>No feedback given.</p>
        </>
    )
    
}

const Button = (props) => {
    return (
        <button onClick={() => props.setToValue(props.text)}>
            {props.text}
        </button>
    )
}

const App = () => {

    // save clicks of each button to own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [average, setAverage] = useState(0);
    const [positive, setPositive] = useState(0);

    const feedback = {
        title: 'Give feedback',
        buttons: ['Good', 'Neutral', 'Bad']
    }
    
    const setToValue = newValue => {
        if (newValue === 'Good') {
            setGood(good + 1);
            setAll(all + 1);
            setAverage(average + 1);
            setPositive((good + 1) / (all + 1) * 100);
        }
        if (newValue === 'Bad') {
            setBad(bad + 1);
            setAll(all + 1);
            setAverage(average - 1);
            setPositive((good) / (all + 1) * 100);
        }
        if (newValue === 'Neutral') {
            setNeutral(neutral + 1);
            setAll(all + 1);
            setPositive((good) / (all + 1) * 100);
        }        
        
        console.log(good,bad,neutral,all,average);
    }

    return (
    <div>
        <Header feedback={feedback} />
        <Content buttons={feedback.buttons} setToValue={setToValue} />
        <Statistics feedback={[feedback,[good,neutral,bad,all,average,positive]]} />      
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));