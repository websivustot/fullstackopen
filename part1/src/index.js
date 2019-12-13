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

const Total = (props) => {
    return (
        <>
        <h2>Statistics</h2>
        <p>{props.feedback[0].buttons[0]}: {props.feedback[1][0]}</p>
        <p>{props.feedback[0].buttons[1]}: {props.feedback[1][1]}</p>
        <p>{props.feedback[0].buttons[2]}: {props.feedback[1][2]}</p>
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
    //const [allClicks, setValue] = useState([0,0,0]);

    const feedback = {
        title: 'Give feedback',
        buttons: ['Good', 'Neutral', 'Bad']
    }
    
    const setToValue = newValue => {
        if (newValue === 'Good') {
            setGood(good + 1);
        }
        if (newValue === 'Bad') {
            setBad(bad + 1);
        }
        if (newValue === 'Neutral') {
            setNeutral(neutral + 1);
        }
        console.log(good,bad,neutral);
    }

    return (
    <div>
        <Header feedback={feedback} />
        <Content buttons={feedback.buttons} setToValue={setToValue} />
        <Total feedback={[feedback,[good,neutral,bad]]} />      
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));