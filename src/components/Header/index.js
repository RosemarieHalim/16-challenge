import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
	<header>
	  <div>
	    <a
		  href="./components/About"
		  target="_blank"
		  rel="noopener noreferrer"
		>
  		<img
  		  src={require("../../assets/logos/logo.png")}
  		  alt="LinkedIn"
  		  className="logo"
  		></img>
		</a>
	  </div>
	  <div>
		<Nav
		  currentTab={currentTab}
		  setCurrentTab={setCurrentTab}
		></Nav>
	  </div>
	</header>
  );
}

export default Header;