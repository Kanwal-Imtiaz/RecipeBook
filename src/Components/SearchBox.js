import React from 'react';

/* pure function */

function SearchBox({searchfield, searchChange}){
	return(
		<div className="pa2">

			<input className=" purple pa3 tc ba br4 w-50 bg-white " type="search" placeholder="Search your favourite recipe.." onChange={searchChange} />
		</div>

		);
}

export default SearchBox;