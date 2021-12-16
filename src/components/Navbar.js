import React, { Component } from 'react'
import axios from 'axios';


export default class Navbar extends Component {

    constructor(props) {

        super(props);

        this.state = {

            pokeBuscado: '',
            searchResult: []
        }
        // this.pokeBuscado = this.pokeBuscado.bind(this);
    }


    pokeBuscado = (e) => {
        let text = e.target.value
        this.setState({
          pokeBuscado: text
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let pBuscado = this.state.pokeBuscado;
        const serverResponce = await axios.get(`/api/search?name=${pBuscado}`);
        this.setState({
            searchResult: serverResponce.data.data
        });
        this.setState({
            pokeBuscado: ''
        })
    }

    componentDidMount = () => {

    }



    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <form className="d-flex" onSubmit={this.onSubmit}>
                        <input className="form-control me-2" value={this.state.pokeBuscado} type="text" placeholder="Ingresa un nombre" aria-label="Search" onChange={this.pokeBuscado}/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a className='navbar-brand' href='https://pokeapi.co/'>Pokemon finder</a>
                    <h6 className='text-muted'> El que quiere pokemones que los busque </h6>
                </div>
            </nav>
        )
    }
}
