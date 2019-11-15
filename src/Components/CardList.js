import React from 'react'
import Card from './Card'


// const {robots} =props;
function CardList({recipes}){
	/*const cardComponent = robots.map((user,i) => {
		return (
		<Card 
		key={i} 
		id={user.id} 
		name={user.name} 
		email={user.email}
		/>
		);
	})

	and use {cardComponent} inside return <div> below*/

	return(
		<div>
			
			{
				recipes.map((rcp,i) => {
					return (
						<Card 
						key={i} 
						title={rcp.recipe.label}
						calories={rcp.recipe.calories} 
						img={rcp.recipe.image}
						ingredients={rcp.recipe.ingredients}
						/>
					);
				})
			}
	    </div>


		);
}

export default CardList;