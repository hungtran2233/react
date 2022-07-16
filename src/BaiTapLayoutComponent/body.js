import React, { Component } from "react";
import Banner from "./banner";
import Footer from "./footer";
import Item from "./item";

export class Body extends Component {
	render() {
		return (
			<div className="body">
				<Banner />
				<Item />
				<Footer />
			</div>
		);
	}
}

export default Body;
