import React, { Component } from "react";
import './Demo.css'

const options = [
    { label: 'IT', value: 'it' },
    { label: 'Engineer', value: 'engineer' },
    { label: 'Enemployed', value: 'unemployed' },
]

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Anonymous',
            age: 20,
            bio: 'lorem Ipsum',
            occupation: 'unemployed',
            errors: {
                username: '',
                email: '',
            }
        }
        this.emailInput = React.createRef();

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }
    onSubmitHandler(e) {
        e.preventDefault();
        if (this.state.username.length < 5) {
            this.setState(state => ({ errors: { ...state.errors, username: 'Min length 5 characters' } }))
        }
        if (!this.emailInput.current.value.includes('@')) {
            this.setState(state => ({ errors: { ...state.errors, email: 'Missing @' } }));
            this.emailInput.current.focus();
        } else {
            this.setState(state => ({ errors: { ...state.errors, email: '' } }));
        }
    }
    /*const onSubmitClickHandler = (e) => {
        console.log(e.target.parentNode.username.value);
    }*/
    /*onUsernameChangeHandler(e) {
        //console.log(e.target.value);
        this.setState({ username: e.target.value });
    }*/
    /*onAgeChangeHandler(e) {
        this.setState({ username: e.target.value });
    }*/
    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <h1>Demo Form</h1>
                <form>
                    <label htmlFor="">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeHandler}
                    />
                    {this.state.errors.username &&
                        <div className='input-validation'>{this.state.errors.username}</div>
                    }
                    <label htmlFor="email">Email</label>
                    <input
                        ref={this.emailInput}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@pesho.com"
                    />
                    {this.state.errors.email &&
                        <div className='input-validation'>{this.state.errors.email}</div>
                    }
                    <label htmlFor="">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeHandler}
                    />
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" onChange={this.onChangeHandler} value={this.state.bio} />
                    <label htmlFor="occupation"></label>
                    <select
                        name="occupation"
                        id="ocupation"
                        onChange={this.onChangeHandler}
                        value={this.state.occupation}>
                        {options.map(x =>
                            <option key={x.value} value={x.value}>{x.label}</option>
                        )}
                    </select>
                    <input type="submit" value="Send" onClick={this.onSubmitHandler} />
                </form>
            </div >
        );
    }
}

export default Demo;