//import { useEffect, useState } from 'react';
import { Component } from 'react';
import PetCard from '../PetCard/PetCard';
import * as petService from '../../services/petsService'
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            currentCategory: 'all'
        }
    }
    componentDidMount() {
        petService.getAll()
            .then(res => this.setState({ pets: res }));
        if(Math.random() > 0.7) {
            throw new Error("Something went wrong!");
        }
    }
    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category
        if (prevProps.match.params.category === category) {
            return;
        }
        petService.getAll(category)
            .then(res => this.setState({ pets: res, currentCategory: category }))
    }
    onPetButtonClickHander(petId, likes) {
        petsService.pet(petId, likes + 1)
            .then((result) => {
                console.log(result);
                this.setState(state => ({pets: state.pets.map(x => x.id == petId ? {...x, likes: result.likes} : x)}))
            })

    }
    render() {
        console.log(this.state.pets);
        /*const [pets, setPets] = useState([]);
        useEffect(() => {
            fetch('localhost:5000/pets')
            .then(res => res.json())
            .then(res => setPets(res))
        })
        console.log(pets);*/
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>
                <CategoryNavigation />
                <ul className="other-pets-list">
                    {this.state.pets.map(x =>
                        <PetCard key={x.id} {...x} onPetButtonClickHander={this.onPetButtonClickHander.bind(this, x.id, x.likes)}/>
                    )}
                </ul>
            </section>
        );
    }
}

export default Categories