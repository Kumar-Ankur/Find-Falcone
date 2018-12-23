import React, { Component, Fragment } from 'react';
import Header from './Header';
import Intro from './Intro';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Intro />
			</Fragment>
		);
	}
}

export default App;
