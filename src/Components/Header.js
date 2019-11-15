import React from 'react';

/* we can add styles in jsx using double square brackets */
function Header(props){

	return(
			<header  class="tc pt2 pt5-ns">
		 	<img src="https://icons-for-free.com/iconfiles/png/512/bakery+svglinecolor+recipe+book-1319964872908984700.png" className="br3 ba b--black-10 h3 w3" alt="RecipeImage" />
			<h1 className="f1 mv3 b purple"> Recipe Book</h1>
			</header>

		); 

}

export default Header;