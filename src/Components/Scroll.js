import React from 'react';

/* we can add styles in jsx using double square brackets */
function Scroll(props){

	return(
		<div style={{overflowY: 'scroll', height: '2000px', marginTop: '20px'}}>
			{props.children}

		</div>

		); 

}

export default Scroll;