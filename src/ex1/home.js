// header + content + footer + sidebar ==> home ==> app
import React from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";
import "./home.css";

class Home extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="top">
					<Header />
				</div>

				<div className="middle">
					<Content />
					<Sidebar />
				</div>

				<div className="bot">
					<Footer />
				</div>
			</div>
		);
	}
}

export default Home;
