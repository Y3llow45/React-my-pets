import { useEffect, useState } from 'react';
import * as petsService from '../../services/petsService'

const EditPetDetails = ({
    match
}) => {
    const [pet, setPet] = useState({});
    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => useState(res))
    }, [])
    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i>{pet.likes}</p>
            <p className="img"><img
                src={pet.imageURL} alt="somet" /></p>
            <form>
                <textarea type="text" name="description" defaultValue={pet.description}></textarea>
                <button className="button"> Save</button>
            </form>
        </section>
    );
}

export default EditPetDetails;