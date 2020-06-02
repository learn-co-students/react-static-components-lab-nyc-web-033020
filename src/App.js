import React, { Component } from 'react';
import CatComponent from './CatComponent';
import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent';
import MouseComponent from './MouseComponent'
//when youre importing default, no curly braces
// you can also change the name of the export default to be
// anything you want when importing

//if not importing default, use curly braces and 
// export name must match import name

//when you dont export default you are creating a hash
// the key is the exports name and the value is the
// value of the key AKA all of the exports code

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent/>
			</div>
		);
	}
}

export default App;
