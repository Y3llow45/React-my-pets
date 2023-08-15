import ThemeContext from './ThemeContext';

function Button({
    buttonClickHandler,
}) {
    return (
        <ThemeContext.Consumer>
            {([theme]) => 
                <button
                    onClick={buttonClickHandler}
                    style={{ backgroundColor: theme == 'dark' ? 'darkgray' : 'lightgreen' }}
                >

                    {theme}
                </button>
            }
        </ThemeContext.Consumer>
    );
}

export default Button;