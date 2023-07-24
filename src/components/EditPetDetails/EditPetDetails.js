import { useEffect, useState } from 'react';
import * as petsService from '../../services/petsService'
import InputError from '../Shared/InputError/InputError';

const EditPetDetails = ({
    match,
    history
}) => {
    const [errorMessage, setErrorMessage] = useState('');
    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        let updatedPet = { ...pet, description: e.target.description.value }
        petsService.update(match.params.petId, updatedPet)
            .then(() => {
                history.push(`/pets/details/${match.params.petId}`)
                return null;
            })
    }
    const onDescriptionChangeHandler = (e) => {
        console.log(e.target);
        if (e.target.value.length < 10) {
            setErrorMessage("Description too short!");
        } else {
            setErrorMessage("");
        }
    }
    const [pet, setPet] = useState({});
    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, [])
    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i>{pet.likes}</p>
            <p className="img"><img
                src={pet.imageURL} alt="somet" /></p>
            <form onSubmit={onDescriptionSaveSubmit}>
                <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
                <InputError>{errorMessage}</InputError>
                <button className="button"> Save</button>
            </form>
        </section>
    );
}

export default EditPetDetails;