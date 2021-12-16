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
            <div className="row m-2">
                <div className="col-md-7">
                    {
                    this.state.pokemons.map(pokemon => <div className="card col-md-7 border-dark m-2" key={pokemon.order * Math.random()}>
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-8">
                                    <img className="img" src={pokemon.image} alt={pokemon.name} style={{width: 200}}/>
                                </div>
                                <div className='col-md-4'>
                                        <p className='' style={{textAlign: "right"}}> {pokemon.name}</p>
                                        <p className='' style={{textAlign: "right"}}>order: {pokemon.order}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
        )
    };
};
