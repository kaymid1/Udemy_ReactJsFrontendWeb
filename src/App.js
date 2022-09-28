import React , { Component} from 'react';
import axios from 'axios';
class App extends React.Component {
    
    constructor(props) {
        super(props);
        //state 
        this.state = {
            user: []
        }
    }

    //api call
    componentWillMount(){
        axios('https://randomuser.me/api/').
        then(response => console.log(response));
    }

    render(){
        return <div className="App">We will be back!</div>;
    }
}

export default App;