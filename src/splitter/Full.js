import React from 'react';

import Left from './Left';
import Right from './Right';
import {Route} from 'react-router-dom';

import {Col, Row} from 'react-bootstrap';
import albumimg1 from '../images/albums/1.jpg';
import albumimg2 from '../images/albums/2.jpg';

import Albumcoverleft from '../components/Albumcoverleft';
import Albumcoverright from '../components/Albumcoverright';

import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';

export default class Full extends React.Component {
	constructor(props) {
 super(props);
 this.state = {
	 leftmargbot: "0px",
	 rightmargbot:"0px",
	 transtime: ".4s ease-in-out",
 }
 		this.hoverleft = this.hoverleft.bind(this)
		this.hoverright= this.hoverright.bind(this)
		this.stopleft = this.stopleft.bind(this)
		this.stopright=this.stopright.bind(this)

		this._handleWindowResize = this._handleWindowResize.bind(this);
}

hoverleft(){
	this.setState({
		rightmargbot:"-50px"

	});
}
stopleft(){
	this.setState({
		rightmargbot: "0px"

	});
}

hoverright(){
	this.setState({
		leftmargbot:"-50px"
	});
}
stopright(){
	this.setState({
		leftmargbot:"0px"
	});
}

/*no animation time while window is resizing, then .1 seconds after resize trigger, animation time returns to normal*/
 componentDidMount () {
	window.addEventListener('resize', this._handleWindowResize);
	setTimeout(function() { this.setState({topcontleft: "0px", topcontright: "0px"}); }.bind(this), 100);


}
_handleWindowResize () {
		 this.setState({
 			transtime: "0s",
 		});
 		setTimeout(function() { this.setState({transtime: ".4s ease-in-out"}); }.bind(this), 100);
}


	render(){
		const full={
			height:"calc(100% - 160px)",
			width: "calc(100% - 160px)",
			left:"80px",
			top:"75px",
			position:"absolute",
			zIndex:"5",
			pointerEvents:"none",
		}
		const tablet={
			height:"calc(100% - 70px)",
			width: "calc(100% - 70px)",
			left:"35px",
			top:"35px",
			position:"absolute",
		}
		const inner={
			display:this.state.displayeither,
		}

const mobilealbum={
	width:"100%",
}

const mobilecontainer={
	marginTop:"100px",
	marginBottom:"20px",
	opacity: this.props.mobileopac,
	WebkitTransition: this.state.transtime,
	MozTransition: this.state.transtime,
	OTransition: this.state.transtime,
	transition:this.state.transtime,
}

const mobilewrapper={
	marginTop:"50px",
	position:"absolute",
}

		return(
			<div>
			<DesktopBreakpoint>
			<div style={full}>
				<div style={inner}>
					<Left
						margbot={this.state.rightmargbot}
						transtime={this.state.transtime}

						topOffset={this.props.topOffset}
						fromleft="-80px"
					/>
					<Right
						margbot={this.state.leftmargbot}
						transtime={this.state.transtime}

						rightOffset={this.props.rightOffset}
						fromright="-80px"
					/>
				</div>
			</div>

			<Route exact path={"/"} children={({ match }) => (
				<div>

					<a href="https://fanlink.to/kmart">
					<Albumcoverleft
					opac={Boolean(match)? '1' : '0'}
					offset={ Boolean(match) ? '0' : '100vh' }
					hoverleft={this.hoverleft}
					stopleft={this.stopleft}
					/>
					</a>

					<a href="https://fanlink.to/endless">
					<Albumcoverright
					opac={Boolean(match)? '1' : '0'}
					offset={ Boolean(match) ? '0' : '-100vh' }
					hoverright={this.hoverright}
					stopright={this.stopright}
					/>
					</a>

				</div>
				)}/>

			</DesktopBreakpoint>

			<TabletBreakpoint>
			<div style={tablet}>
				<div style={inner}>
					<Left
						margbot={this.state.rightmargbot}
						transtime={this.state.transtime}
						fromleft="-35px"

						topOffset={this.props.topOffset}
					/>
					<Right
						margbot={this.state.leftmargbot}
						transtime={this.state.transtime}
						fromright="-35px"

						rightOffset={this.props.rightOffset}
					/>
				</div>
			</div>

			<Route exact path={"/"} children={({ match }) => (
				<div>

					<a href="https://fanlink.to/kmart">
					<Albumcoverleft
					opac={Boolean(match)? '1' : '0'}
					offset={ Boolean(match) ? '0' : '100vh' }
					hoverleft={this.hoverleft}
					stopleft={this.stopleft}
					/>
					</a>

					<a href="https://fanlink.to/endless">
					<Albumcoverright
					opac={Boolean(match)? '1' : '0'}
					offset={ Boolean(match) ? '0' : '-100vh' }
					hoverright={this.hoverright}
					stopright={this.stopright}
					/>
					</a>

				</div>
				)}/>

			</TabletBreakpoint>

			<PhoneBreakpoint>
			<div style={mobilewrapper}>
			<Row>
			<Col xs={8} xsOffset={2} style={mobilecontainer}>
			<a href="https://fanlink.to/kmart">
			<img src={albumimg1} style={mobilealbum}/>
			</a>
			</Col>
			</Row>

			<Row>
			<Col xs={8} xsOffset={2} style={mobilecontainer}>
			<a href="https://fanlink.to/kmart">
			<img src={albumimg2} style={mobilealbum}/>
			</a>
			</Col>
			</Row>
			</div>

			</PhoneBreakpoint>




			</div>

		);





	}
}
