import React, {Component} from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state ={
            name : ''
        };
    }

    render() {
        return (
            <div>
                <h1>Hello!!!</h1>
                <p> welcome to react page!!!!! </p>
                <p>{this.state.name}</p>
                <button onClick={()=> {this.setState({name : 'animomin'});}}>Click Me</button>
            </div>
        );
    }
}

export default App;