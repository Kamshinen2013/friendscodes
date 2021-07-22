import React, {Component} from 'react'
import CardList from './CardList'
// import { robots } from './robots'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {
    constructor(){
        super()
        this.state={
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({robots: users})
        })

    }

    onSearchChange = (event) => {           //onSearchChange(event) could throw up an error here so lways use arrow function
        this.setState({ searchField: event.target.value}) //This updates the searchfield 
        //setState is used to update the search field

    }
         
    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()) 
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        }

        else {
            return(
                <div className = 'tc'>
                    <h1 className= 'f1'>RoboFriends</h1>

                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                        <CardList robots= {filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                );
        }
    }
}

export default App