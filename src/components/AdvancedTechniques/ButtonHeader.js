import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ButtonHeader = ({

}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <header style={{color: theme == 'dark' ? 'black' : 'lightgreen'}}>
            <h1>Title</h1>
            <p>Lorem ipsum. AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        </header>
    );
}

export default ButtonHeader;