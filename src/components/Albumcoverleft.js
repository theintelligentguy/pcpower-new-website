import React from "react";
import albumimg from '../images/albums/1.jpg';

export default class Albumcoverright extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 opac:"0",
	 }

	}

componentDidMount(){
	    setTimeout(function() { this.setState({opac: "0px"}); }.bind(this), '450');
}



  render(){

const albumcover={
	position:"absolute",
	opacity:this.props.opac,
	left:"160px",
	top:"120px",
	width: "calc(50vw - 20vw)",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",

	marginTop:this.props.offset,
	zIndex:"6"

}


	  return(
			<img src={albumimg} style={albumcover} onMouseEnter={this.props.hoverleft} onMouseLeave={this.props.stopleft}/>


	  );
  }
}
