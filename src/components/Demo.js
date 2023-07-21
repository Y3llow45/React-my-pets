import { Component } from "react";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
    }
    onSubmitHandler(e) {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    }
    /*const onSubmitClickHandler = (e) => {
        console.log(e.target.parentNode.username.value);
    }*/
    onUsernameChangeHandler(e) {
        console.log(e.target.value);
        this.setState({ username: e.target.value });
    }
    render() {
        return (
            <div>
                <h1>Demo Form</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.onUsernameChangeHandler.bind(this)} />
                    <label htmlFor="">Age</label>
                    <input type="number" id="age" defaultValue={20} name="age" />
                    <input type="submit" value="Send" />
                    <button type="button" onClick={onSubmitClickHandler}></button>
                </form>
            </div >
        );
    }
}

export default Demo;