import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ButtonHeader = ({

}) => {
    const [theme] = useContext(ThemeContext);

    return (
        <header style={{ color: theme.color == 'dark' ? 'darkgray' : 'lightpink' }}>
            <h1>Title</h1>
            <p>Lorem ipsum dolor. GGRRRRRRRRRRRRRR</p>
        </header>
    );
}

export default ButtonHeader; 