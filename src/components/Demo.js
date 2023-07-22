import { Component } from "react";

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
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }
    onSubmitHandler(e) {
        e.preventDefault();
        const { username, age } = this.state;
        console.log(username, age);
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