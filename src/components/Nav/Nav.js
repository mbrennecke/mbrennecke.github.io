import React, { Component } from 'react';
import { Container, Row, Col } from '../Grid';
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {

	state = {
		toggle: true
	}
	
	showMenu = () => {
		this.setState({toggle: !this.state.toggle});
		if (!this.state.toggle) {
			document.getElementById("toggler").style.display="none";
			document.getElementById("navbar").style.height="7rem";
		} else {
			document.getElementById("toggler").style.display="block";
			document.getElementById("navbar").style.height="11rem";
		}
	}
	
	render() {
		return(
			<div id="navbar">
				<Container>
					<Row>
						<Col size="seven columns">
							<h1><Link to="/" className="navMainLink">Matthew Brennecke</Link></h1>
						</Col>
						<Col size="five columns">
							<div className="contain" onClick={this.showMenu}>
								<div className="line-top line"></div>
								<div className="line"></div>
								<div className="line-bottom line"></div>
							</div>
						</Col>
					</Row>
					<Row>
						<div id="toggler">
							<Col size="two columns link first">
								<NavLink to="/about" activeClassName="active">About</NavLink>
							</Col>
							<Col size="two columns link">
								<NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
							</Col>
							<Col size="two columns link">
								<NavLink to="/contact" activeClassName="active">Contact</NavLink>
							</Col>
						</div>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Nav;