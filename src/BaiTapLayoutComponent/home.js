import React, { Component } from "react";
import "./home.css";

import Header from "./header";
import Body from "./body";

export class Home extends Component {
	render() {
		return (
			<div className="home">
				<Header />
				<Body />
			</div>
		);
	}
}

export default Home;
