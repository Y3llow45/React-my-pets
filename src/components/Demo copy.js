const Demo = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    }
    /*const onSubmitClickHandler = (e) => {
        console.log(e.target.parentNode.username.value);
    }*/
    const onUsernameChangeHandler = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Demo Form</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="">Username</label>
                <input type="text" id="username" name="username" onChange={onUsernameChangeHandler} />
                <label htmlFor="">Age</label>
                <input type="number" id="age" name="age" />
                <input type="submit" value="Send" />
                <button type="button" onClick={onSubmitClickHandler}></button>
            </form>
        </div>
    );
}

export default Demo;