import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="container">
					<div className="logo">
						<a href="">Start Bootstrap</a>
					</div>
					<div className="navbar">
						<ul className="nav">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#"
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
