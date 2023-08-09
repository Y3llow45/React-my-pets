import { useState, useEffect } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


const Demo = ({history}) => {

    const [count, setCount] = useState(1);
    const [step, setStep] = useState(1);
    //const [character, setCharacter] = useState({name: "Nobody"})
    const [character, isCharacterLoading] = useFetch(`https://swapi.dev/api/people/${step}`, {})

    useEffect(() => {
        return () => {
            console.log('ComponentWillUnmout')            
        }
    }, []);
    
    const onCounterButtonClickHandler = () => {
        setCount(oldState => oldState + step);
    };

    const onStepSelectChangeHandler = (e) => {
        const stepValue = Number(e.target.value); 
        setStep(stepValue);
    };

    return (
        <div>
        <h1>{isCharacterLoading ? 'Loading...' : `${character.name}'s Counter`}</h1>
        <div>{count}</div>
        <button onClick={onCounterButtonClickHandler}>Increment</button>
        <label htmlFor="step">Step</label>
        <select name="step" id="step" onChange={onStepSelectChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <Link to="/">Home</Link>
        </div>
    );
}

export default Demo;