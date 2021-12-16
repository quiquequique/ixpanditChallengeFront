import React, { Component } from 'react';
import axios from 'axios';

export default class PokesCards extends Component {

    threRandomPokes = '/api/randomPoke?num=3'

    state = {
        pokemons: []
    };

    async componentDidMount() {
        const res = await axios.get(this.threRandomPokes);
        this.setState({pokemons: res.data.data});
        console.log(this.state.pokemons);
    };



    render() {
        return (
            <div className="col-md-12 col-lg-12">
                <div className="col-md-4 col-lg-4">
                    <div className="container">
                        <h3>images</h3>
                        {
                            this.state.pokemons.map(pokemon => <div className="card card-body" key={pokemon.order}>
                                <span className="border">
                                <img src={pokemon.image} alt={pokemon.name} width="150" height="150"/>
                                </span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    };
};
