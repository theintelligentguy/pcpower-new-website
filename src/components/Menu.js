import React from "react";
import {Link} from 'react-router-dom';

import {Row, Col} from 'react-bootstrap';

import logoimage from '../images/logo.jpg';

export default class Panelleft extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }

	}


myFunction(){

}



  render(){

const panelstyle={
	position:"fixed",
	width:"100vw",
	height:"50px",
	top:"0px",
	backgroundColor:"#fff",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
	zIndex:"4",

}
const logooption={
	textAlign:"center",
}
const option={
	textAlign:"center",
	textDecoration:"none",
	fontFamily:"helvetica",
	Color:"#000",
	fontSize:"12px",
	letterSpacing:"3px",

	marginTop:"15px",
	fontWeight:"bold",

}

const logostyle={
	maxWidth:"100%",
	maxHeight:"50px",
	verticalAlign:"top",
}
const linkstyle={
	color:"#000",
}

	  return(
			<div style={panelstyle}>
			<Row>
				<Col md={4} sm={4} xs={4} style={option}>
				<Link to='/singles' style={linkstyle}>SINGLES</Link>
				</Col>
				<Col md={4} sm={4} xs={4} style={logooption}>
				<Link to='/'><img src={logoimage} alt="PowerPCME" style={logostyle}/></Link>
				</Col>
				<Col md={4} sm={4} xs={4} style={option}>
				<Link to='/soundcloud' style={linkstyle}>SOUNDCLOUD</Link>
				</Col>
			</Row>
			</div>


	  );
  }
}
