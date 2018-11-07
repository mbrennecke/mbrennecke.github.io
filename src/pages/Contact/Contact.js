import React, { Component } from 'react';
import { Container, Row, Col } from '../../components/Grid';
import { Label, Input } from '../../components/Form';
import "./Contact.css";
import firebase from 'firebase/app';
import 'firebase/database';

class Contact extends Component {
	
	state = {
		name: '',
		email: '',
		message: '',
		messageSent: false
	}

  handleInputChange = event => {
	  const { name, value } = event.target;
	  this.setState({
		  [name]: value
	  });
  };
  
  handleFormSubmit = e => {
	  e.preventDefault();
	  var database = firebase.database();
	  database.ref().push({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        dateAdded: firebase.database.ServerValue.TIMESTAMP,
	  });
	  this.setState({
		name: '',
		email: '',
		message: '',
		messageSent: true
	  })
  }

	render() {
			 
		return (
			<Container>
				<div className="contact">
					<Row>
						<Col size="twelve columns">
							<h3>Contact</h3>
						</Col>
					</Row>
					{this.state.messageSent ? (
					<Row>
						<Col size="ten columns offset-by-one">
							<div className="thanks">
								Thanks, I will reply as soon as I am able.
							</div>
						</Col>
					</Row>
					) : ""}
					<form>
						<Row>
							<Col size="six columns">
								<Label htmlFor="name">Name:</Label>
								<Input 
									className="u-full-width" 
									type="text" 
									placeholder="ex. John Smythe" 
									id="name" 
									value={this.state.name}
									onChange={this.handleInputChange}
									name="name"
								/>
							</Col>
							<Col size="six columns">
								<Label htmlFor="email">Email:</Label>
								<Input 
									className="u-full-width" 
									type="email" 
									placeholder="ex. john.smyth@email.com" 
									id="email" 
									value={this.state.email}
									onChange={this.handleInputChange}
									name="email"
								/>
							</Col>
						</Row>
						<Label htmlFor="message">Message</Label>
							<textarea 
								className="u-full-width" 
								placeholder="Your message..." 
								id="message" 
								value={this.state.message}
								onChange={this.handleInputChange}
								name="message"
							></textarea>
						<Input 
							className="button-primary" 
							type="submit" value="Submit" 
							disabled={(!this.state.name||!this.state.email)}
							onClick={this.handleFormSubmit}
						/>
					</form>
				</div>
			</Container>
		)
	}

}

export default Contact;