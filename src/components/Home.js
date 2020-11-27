import React from "react";
import {Route} from 'react-router-dom';


import Full from '../splitter/Full';
export default class Panelleft extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }

	}

  render(){



	  return(
			<div >

			<Route exact path={"/"} children={({ match }) => (
		<div>



			<Full
				topOffset={ Boolean(match) ? '0' : '-100vh' }
				rightOffset={ Boolean(match) ? '0': '-100vh'}

				mobileopac = {Boolean(match) ? '1': '0'}
			/>



		</div>
	)}/>

			</div>


	  );
  }
}
