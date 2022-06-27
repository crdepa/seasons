import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
//import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    // Javascript class, not React 
    // constructor(props) {
    //     super(props);
    //     // lets initialize state (THIS IS THE ONLY TIME we do direct assignment do this.state )
    //     this.state = { lat: null, errorMessage: '' };
    // }

    // equivalent to constructor because Babel will create the constructor for us
    state = { lat: null, errorMessage: '' }; 

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // callback (some point time in the future)
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
        console.log('My component was rendered to the screen');
    }

    componentDidUpdate() {
        console.log('My component was just update... rerender');
    }

    // React says we have to define render!!
    render() {

        // Conditional rendering
        if (this.state.errorMessage && !this.state.lat){
            return  <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat){
            return  <SeasonDisplay lat={this.state.lat} />;
        }

        return <div>Loading!</div>;
    };
};

ReactDOM.render(<App />, document.querySelector('#root'));