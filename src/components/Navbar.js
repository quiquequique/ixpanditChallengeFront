import React, { Component } from 'react'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a className='navbar-brand' href='https://pokeapi.co/'>Pokemon finder</a>
                    <h6 className='text-muted'> El que quiere pokemones que los busque </h6>
                </div>
            </nav>
        )
    }
}
