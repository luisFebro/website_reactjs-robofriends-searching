import React, { Component } from 'react'
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>Hello World</h1>
                <p>{this.props.greetingNinja}</p>
            </div>
        )
    }
}

// SIMPLIFIED VERSION: can also be written as a function expression like this:
// const Hello = (props) => {
//     return (
//         <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>{props.greetingNinja}</p>
//         </div>
//     )
// }

export default Hello;