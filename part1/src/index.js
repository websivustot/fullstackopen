import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
    
    return (        
        <button onClick={props.changeText}>{props.text}</button>       
    )    
}

const App = (props) => {
  
    const [selected, setSelected] = useState(0);

    const [points, setPoints] = useState(new Array(6).fill(0));

    const [max, setMax] = useState();

    const changeText = () => {
        setSelected(getRandomNumber());
    }

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 6);
    }
    
    const vote = () => {

        const copy = [...points];
        copy[selected] += 1;
        setPoints(copy);
        let m = copy.indexOf(Math.max(...copy));
        console.log(points, m);
        setMax(m);        
    }

    let votes = '';

    if (typeof max !== 'undefined') votes = <div><h1>Anecdote with most vote</h1><p>{props.anecdotes[max]}</p><p>Has {points[max]} votes.</p></div>;
  return (
    <div>
        {props.anecdotes[selected]}
        <p>Has {points[selected]} votes.</p>
        <div>
        <Button text="Vote" changeText={vote} />
        <Button text="Next anecdote" changeText={changeText} />
        </div>
        { votes }
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)