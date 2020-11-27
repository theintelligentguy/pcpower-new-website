import React from 'react';

import bg from '../images/bg.jpeg';

export default class Left extends React.Component {
	render(){
		const right={
			height: "100%",
			width: "50%",
			position:"absolute",
			left: "0px",
			overflow: "hidden",
			top:this.props.topOffset,

			WebkitTransition: this.props.transtime,
			MozTransition: this.props.transtime,
			OTransition: this.props.transtime,
			transition:this.props.transtime,
		}
		const inner={
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			position:"absolute",
			width: "calc( 100vw)",
			left: this.props.fromleft,

			marginTop:this.props.margbot,

			WebkitTransition: this.props.transtime,
			MozTransition: this.props.transtime,
			OTransition: this.props.transtime,
			transition:this.props.transtime,
		}
		return(
			<div style={right} onMouseEnter={this.props.hoverleft} onMouseLeave={this.props.stopleft}>
			<img style={inner} src={bg}/>

			</div>

		);
	}
}
