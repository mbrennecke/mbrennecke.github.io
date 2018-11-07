import React from 'react';
import { Container } from "../../components/Grid";
import Links from "../../utils/links.js";
import { PortfolioBoxes, PortfolioBoxTitle, Tiles } from "../../components/Portfolio";
import "./Portfolio.css";

const Portfolio = () => {

	console.log(Links);
	const projects = Links[0];
	const database = Links[1];
	const frontend = Links[2];
	const backend = Links[3];
	
	return (
		<Container>
			<PortfolioBoxes className="links" id="projects">
				<PortfolioBoxTitle>
					Projects developed with a team
				</PortfolioBoxTitle>
				<Tiles item={projects}/>
			</PortfolioBoxes>
			<PortfolioBoxes className="links" id="database">
				<PortfolioBoxTitle>
					Sites that utilize a front end and back end
				</PortfolioBoxTitle>
				<Tiles item={database}/>
			</PortfolioBoxes>
			<PortfolioBoxes className="links" id="frontend">
				<PortfolioBoxTitle>
					Sites that utilize are front end only
				</PortfolioBoxTitle>
				<Tiles item={frontend}/>
			</PortfolioBoxes>
			<PortfolioBoxes className="links" id="backend">
				<PortfolioBoxTitle>
					Apps that are back end demonstrations
				</PortfolioBoxTitle>
				<Tiles item={backend}/>
			</PortfolioBoxes>
		</Container>
	)
}

export default Portfolio;