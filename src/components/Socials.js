import React from "react";
import {Row} from 'react-bootstrap';
import Socialicon from './Socialicon';

import fbicon from '../images/facebook.png';
import inicon from '../images/instagram.png';
import scicon from '../images/soundcloud.png';
import twicon from '../images/twitter.png';


import DesktopBreakpoint from '../responsive/desktop_breakpoint.js';
import TabletBreakpoint from '../responsive/tablet_breakpoint.js';
import PhoneBreakpoint from '../responsive/phone_breakpoint.js';


export default class Panelleft extends React.Component{
	constructor(props) {
	 super(props);
	 this.state = {
	 }

	}


myFunction(){

}



  render(){

const socials={
	position:"absolute",
	bottom:"25px",
	left:"0",
	right:"0",
	marginLeft:"auto",
	marginRight:"auto",
	width:"180px",

}

const socialsmobile={
	position:"absolute",
	top:"100px",
	left:"0",
	right:"0",
	marginLeft:"auto",
	marginRight:"auto",
	width:"180px",
	WebkitTransition: ".4s ease-out",
	MozTransition: ".4s ease-out",
	OTransition: ".4s ease-out",
	transition:".4s ease-out",
}



	  return(

			<div>

			<DesktopBreakpoint>
			<div style={socials}>
			<Row>
				<a href="https://www.facebook.com/powerpcme">
				<Socialicon iconprop={fbicon}/>
				</a>
				<a href="https://www.instagram.com/powerpcme/">
				<Socialicon iconprop={inicon}/>
				</a>
				<a href="https://twitter.com/PowerPCME">
				<Socialicon iconprop={scicon}/>
				</a>
				<a href="https://soundcloud.com/PowerPCME">
				<Socialicon iconprop={twicon}/>
				</a>
				</Row>
			</div>
			</DesktopBreakpoint>

			<TabletBreakpoint>
			<div style={socials}>
			<Row>
				<a href="https://www.facebook.com/powerpcme">
				<Socialicon iconprop={fbicon}/>
				</a>
				<a href="https://www.instagram.com/powerpcme/">
				<Socialicon iconprop={inicon}/>
				</a>
				<a href="https://twitter.com/PowerPCME">
				<Socialicon iconprop={scicon}/>
				</a>
				<a href="https://soundcloud.com/PowerPCME">
				<Socialicon iconprop={twicon}/>
				</a>
				</Row>
			</div>
			</TabletBreakpoint>

			<PhoneBreakpoint>
			<div style={socialsmobile}>
			<Row>
				<a href="https://www.facebook.com/powerpcme">
				<Socialicon iconprop={fbicon}/>
				</a>
				<a href="https://www.instagram.com/powerpcme/">
				<Socialicon iconprop={inicon}/>
				</a>
				<a href="https://twitter.com/PowerPCME">
				<Socialicon iconprop={scicon}/>
				</a>
				<a href="https://soundcloud.com/PowerPCME">
				<Socialicon iconprop={twicon}/>
				</a>
				</Row>
			</div>
			</PhoneBreakpoint>

			</div>



	  );
  }
}
