import React from 'react';
import { Container, Row, Col } from "../../components/Grid"
import './About.css';

const About = () => (
	<Container>
		<div className="about">
			<Row>
				<Col size="three columns">
					<img src="/images/headshot.jpg" alt="Matthew Brennecke" id="headshot" className="u-max-full-width"/>
				</Col>
				<Col size="nine columns">
					<p>I am full stack developer, who enjoys the creativity of front end and the logic of backend design. My strengths in HTML, CSS, Javascript, jQuery, node.js, React and responsive frameworks are leveraged to make complex back ends for cleanly designed, responsive front end applications.</p>

					<p>I have a Bachelor’s Degree in Computer Information Systems, with a minor in Business Informatics. I have completed a coding boot camp from the University of Denver. As well, I have several technical support certifications.</p>

					<p>My years in technical support have given me a strong troubleshooting ability and determined tenacity that I am able to bring to bear on bug fixing and problem solving when developing an application.</p>
				</Col>
			</Row>
		</div>
	</Container>
)

export default About;