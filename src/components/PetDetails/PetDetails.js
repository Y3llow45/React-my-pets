import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import * as petsService from '../../services/petsService'

const PetDetails = ({
    match
}) => {
    let [pet, setPet] = useState({});
    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res));
    }, [match]);
    return (
        <section class="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes} <a href="/likes"><button class="button"><i
                class="fas fa-heart"></i>
                Pet</button></a>
            </p>
            <p class="img"><img
                src={pet.imageURL} alt="idk" /></p>
            <p class="description">{pet.description}</p>
            <div class="pet-info">
                <Link to={`/pets/details/${pet.id}/edit`}><button class="button">Edit</button></Link>
                <Link to="#"><button class="button">Delete</button></Link>
            </div>
        </section>
    );
}

export default PetDetails