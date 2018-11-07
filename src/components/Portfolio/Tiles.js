import React from 'react';
import { Row, Col } from "../Grid";

export const Tiles = props => {
	console.log(props.item)
	return (
		<Row>
			<Col size="twelve columns">
			{props.item.map(tileGen=>(
				<div className="tile u-pull-left" key={tileGen.image}>
					<a href= {`${tileGen.link}`} target="_blank" rel="noopener noreferrer"><img src={`/images/${tileGen.image}`} className="u-max-full-width image" alt={`${tileGen.title}`}/></a>
					<div className="siteLinks">
						<h3 className="site"><a href= {`${tileGen.link}`} target="_blank" rel="noopener noreferrer">{tileGen.title}</a></h3>
						<h4 className="repo"><a href= {`${tileGen.repo}`} target="_blank" rel="noopener noreferrer">-Github-</a></h4>
					</div>
				</div>
			))}
			</Col>
		</Row>
	)
}