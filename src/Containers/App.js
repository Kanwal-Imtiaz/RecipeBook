import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
//import {robots} from '../robots'; //destruct so write in angular brackets
import Scroll from '../Components/Scroll';
import Header from '../Components/Header';

/* STATE = object that describes our application */
/* props = properties (never change) */

/*function App(props){
	return (
		<div className="tc">
			<h1> RoboFriends</h1>

			<SearchBox />

			<CardList robots={robots}/>
		</div>

		);
}*/

/* 
any component that have state uses the class syntax, 
so they can use constructor to create state 
App component have two states: robots and searchfiled 
can be passed as props to child
not pure function bcoz it contains state
*/
	const appID = '8844fdb1';
	const appKey = '7e6489f2cc4ed13b7444f5cb7089ca0b';

class App extends React.Component{
	constructor(){
		super()
		this.state ={
			foodItems: [],
			searchfield: ''
		}
		this.performSearch("ice");
	}




	performSearch = (searchItem) =>{

		fetch(`https://api.edamam.com/search?q=${searchItem}&app_id=${appID}&app_key=${appKey}`)
		.then(response => {
			return response.json();
		})
		.then(data =>{
			this.setState({foodItems: data.hits });
			console.log(data.hits);
		});
		

	}
	onSearchChange =(event) =>{
		console.log(event.target.value);
		this.performSearch(event.target.value);
		this.setState({searchfield : event.target.value});
	}

	render(){

			return (
					<div className="tc">
					
						<Header/>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList recipes={this.state.foodItems}/>
						</Scroll>

					</div>

					);
		}
			
}


export default App;