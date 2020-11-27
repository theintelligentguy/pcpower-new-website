import React from 'react';

import bg from '../images/bg.jpeg';

export default class Right extends React.Component {
	render(){
		const right={
			height: "100%",
			width: "50%",
			position:"absolute",
			right: "0px",
			overflow: "hidden",
			bottom:this.props.rightOffset,

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
			right: this.props.fromright,

			marginTop:this.props.margbot,

			WebkitTransition: this.props.transtime,
			MozTransition: this.props.transtime,
			OTransition: this.props.transtime,
			transition:this.props.transtime,
		}
		return(
			<div style={right} onMouseEnter={this.props.hoverright} onMouseLeave={this.props.stopright}>
			<img style={inner} src={bg}/>

			</div>

		);
	}
}
