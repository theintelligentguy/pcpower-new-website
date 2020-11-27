import React from "react";
import ReactDOM from 'react-dom';

export default class Inner extends React.Component{

	constructor(props) {
 super(props);
 this.state = {

	 contwidth: "",
 }

	this._handleWindowResize = this._handleWindowResize.bind(this);
}


componentDidMount () {
 window.addEventListener('resize', this._handleWindowResize);
 this.setState({
	 contwidth: ReactDOM.findDOMNode(this._containerTarget).offsetWidth
 });
}

_handleWindowResize () {
	if (this.refs.myRef) {
	 this.setState({
		 contwidth: ReactDOM.findDOMNode(this._containerTarget).offsetWidth
	 });
 }
}


  render(){
		const thumbinner={
			background: 'url('+this.props.bgimage+')',
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			width:this.props.innerwidth,
			height:this.props.innerheight,

			marginTop:this.props.innermargintop,
			marginLeft:this.props.innermarginleft,
			WebkitTransition: ".4s ease-out",
			MozTransition: ".4s ease-out",
			OTransition: ".4s ease-out",
			transition:".4s ease-out",

			height:this.state.contwidth,
		}

		/*requires bootstrap columns to have 0 padding set in css file for the inner image to not expand past
		standard borders when zooming*/
	  return(

			<div style={thumbinner} ref={node => {
		 // this callback executes before componentDidMount
				 if (node !== null) {
					 this._containerTarget = node;

				 }
			 }}>
			</div>

	  );
  }
}
