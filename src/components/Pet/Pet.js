const Pet = ({
    name
}) => {
    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: Cat</p>
            <p className="img"><img
                src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" alt="Cat" /></p>
            <p className="description">This is not my cat Gosho</p>
            <div className="pet-info">
                <a href="/pet"><button className="button"><i className="fas
                                fa-heart"></i> Pet</button></a>
                <a href="/details"><button className="button">Details</button></a>
                <i className="fas fa-heart"></i> <span> 2</span>
            </div>
        </li>
    );
}
export default Pet;