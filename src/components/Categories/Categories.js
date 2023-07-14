//import { useEffect, useState } from 'react';
import { Component } from 'react';
import Pet from '../Pet/Pet';
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }
    componentDidMount() {
        fetch('localhost:3000/pets')
            .then(res => res.json())
            .then(res => this.setState({ pets: res }))
            .catch(error => console.log(error));
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
                        <Pet key={x.id} name={x.name} />)
                    }
                </ul>
            </section>
        );
    }
}

export default Categories