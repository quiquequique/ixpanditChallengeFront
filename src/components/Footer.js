import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="navbar navbar-dark bg-dark navbar-inverse fixed-bottom" style={{height:40}}>
                <div className="container">
                   <a href="https://github.com/quiquequique" className='navbar-text'>My gitHub</a>
                </div>
           </div>
        )
    }
}
