import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import '../containers/App.css';
import Scroll from '../components/Scroll';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robotsId: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robotsId: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robotsId, searchfield } = this.state;
        const filteredRobots = robotsId.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robotsId.length ?
        <h1>LOADING...</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robotsId={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;