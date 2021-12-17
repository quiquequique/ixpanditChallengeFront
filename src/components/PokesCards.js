import React, { Component } from 'react';
import axios from 'axios';

export default class PokesCards extends Component {

    constructor(props) {

        super(props);

        this.state = {

            pokeBuscado: '',
            searchResult: [],
            pokemons: [],
            notFound: 'hidden'
        }
    }

    threRandomPokes = '/api/randomPoke?num=3'

    async componentDidMount() {
        const firstThrePokes = await this.searchRandomPokes(3);
        this.setState({pokemons: firstThrePokes})
    };

    searchThre = async (e) => {
        e.preventDefault();
        const threPokes =await this.searchRandomPokes(3);
        this.setState({pokemons: threPokes})

    }

    searchRandomPokes = async (cantidad) => {
        const res = await axios.get(`/api/randomPoke?num=${cantidad}`);
        return res.data.data;
    }


    pokeBuscado = (e) => {
        let text = e.target.value
        this.setState({
          pokeBuscado: text
        })
    }

    onSubmit = async (e) => {
        try{
            e.preventDefault();
            let pBuscado = this.state.pokeBuscado;
            const serverResponce = await axios.get(`/api/search?name=${pBuscado}`);
            if (serverResponce.data.meta.found === 0){
                this.setState({
                    notFound:'visible'
                });
                this.setState({
                    pokeBuscado: ''
                })
            }else{
                this.setState({
                    notFound:'hidden'
                })
            }
            if(serverResponce.data.data.length >= 3) {
              const newState = [serverResponce.data.data[0], serverResponce.data.data[1], serverResponce.data.data[2]];
              this.setState({
                pokemons: []
              });
              this.setState({
                pokemons: newState
              });
            }
            this.setState({
            pokeBuscado: ''
            });
            if(serverResponce.data.data.length === 2) {
                const relleno = await this.searchRandomPokes(1);
                const newState = [serverResponce.data.data[0], serverResponce.data.data[1], ...relleno];
                this.setState({
                  pokemons: []
                });
                this.setState({
                  pokemons: newState
                });
            }
              this.setState({
              pokeBuscado: ''
              });
            if(serverResponce.data.data.length === 1) {
                const relleno = await this.searchRandomPokes(2);
                const newState = [serverResponce.data.data[0], ...relleno];
                this.setState({
                  pokemons: []
                });
                this.setState({
                  pokemons: newState
                });
            }
              this.setState({
              pokeBuscado: ''
              });
        }catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="row m-2">
                <form className="d-flex" onSubmit={this.onSubmit}>
                        <input className="form-control me-2" value={this.state.pokeBuscado} type="text" placeholder="Ingresa un nombre" aria-label="Search" onChange={this.pokeBuscado}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <h5 style={{visibility:this.state.notFound}}>No se a encontrado ningun pokemon con esas letras, que lastima!</h5>
                <div className="col-md-7">
                    {
                    this.state.pokemons.map(pokemon => <div className="card col-md-7 border-dark m-2" key={pokemon.order * Math.random()}>
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-8">
                                    <img className="img" src={pokemon.image} alt={pokemon.name} style={{width: 180}}/>
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
                <div className="col-md-5" >
                    <button className='btn btn-outline-secondary' style={{marginLeft:210}} onClick={this.searchThre}>Busca 3 pokemones al azar</button>
                </div>
            </div>
        )
    };
};
