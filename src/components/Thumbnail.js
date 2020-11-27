import React from "react";
import {Row} from 'react-bootstrap';

import Inner from './Thumbnailinner';

export default class Thumbnail extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
		 innerwidth:"100%",
		 innerheight:"100%",
		 innermarginleft:"0px",
		 innermargintop:"0px",
	 }
	 this.hoverthumb = this.hoverthumb.bind(this);
	 this.leavethumb = this.leavethumb.bind(this);
	}
	hoverthumb(){
		this.setState({
			innerwidth: "104%",
			innerheight:"104%",
			innermarginleft:"0%",
			innermargintop:"0%",
		})
	}
	leavethumb(){
		this.setState({
			innerwidth:"100%",
			innerheight:"100%",
			innermarginleft:"0px",
			innermargintop:"0px",
		})
	}
  render(){
		const thumbcontainer={
			position:"relative",
			overflow:"hidden",
			width:"100%",
			marginBottom:"15px",
			marginTop:"25px",

			WebkitBoxShadow: "0px 0px 32px 2px rgba(0,0,0,0.75)",
			MozBoxShadow: "0px 0px 32px 2px rgba(0,0,0,0.75)",
			BoxShadow: "0px 0px 32px 2px rgba(0,0,0,0.75)",
		}



		/*requires bootstrap columns to have 0 padding set in css file for the inner image to not expand past
		standard borders when zooming*/
	  return(
				<Row>
					<div style={thumbcontainer} onMouseEnter={this.hoverthumb} onMouseLeave={this.leavethumb}>

						<Inner
							bgimage = {this.props.bgimage}
							innerwidth = {this.state.innerwidth}
							innerheight = {this.state.innerheight}
							innermargintop = {this.state.innermargintop}
							innermarginleft = {this.state.innermarginleft}
						/>
					</div>
					</Row>
	  );
  }
}
