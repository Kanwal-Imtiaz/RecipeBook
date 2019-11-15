import React from 'react';

class Card extends React.Component{


render(){
	const {title, calories, img, ingredients} = this.props;
	return(
		
		<div className="tc bg-purple mw6 dib br3 pa3 ma3 grow bw2 shadow-5">
		
			<h2 className="tc f3 yellow">{title}</h2>
			<img src={img} alt="RecipeImage" className="tc ba bw2 b--yellow br3" />
			<p className="tc dark-red">
				<span className="f4">Calories:</span> {calories}
			</p>
			<h3 className="tl ma4 f4 yellow">Ingredients:</h3>
			<ul className="tl yellow">{ingredients.map((ingredient, i) => 
				<li key={i}>{ingredient.text}</li>)}
			</ul>
			
		</div>


		);
}
}

export default Card;