import React, { Component } from "react";
import "./banner.css";

export class Banner extends Component {
	render() {
		return (
			<div className="banner">
				<div className="container">
					<div className="content">
						<h1>A warm welcome!</h1>
						<p>
							Bootstrap utility classes are used to create this
							jumbotron since the old component has been removed
							from the framework. Why create custom CSS when you
							can use utilities?
						</p>
						<button className="btn btn-primary">
							Call to action
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
