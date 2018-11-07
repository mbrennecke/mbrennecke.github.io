import React from 'react';
import { Row, Col } from "../Grid";

export const PortfolioBoxTitle = props => {
	return (
		<Row>
			<Col size="twelve columns">
				<h2 className="title">
					{props.children}
				</h2>
			</Col>
		</Row>
	)
}