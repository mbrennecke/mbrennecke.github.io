import React from 'react';

export const Col = props => {
	return (
<div className={props.size}>
			{props.children}
		</div>
	)
}