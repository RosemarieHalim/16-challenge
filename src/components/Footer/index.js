import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/RosemarieHalim"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/rosemarie-halim/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.instagram.com/halim_design/?hl=en"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/insta-logo.png")}
						alt="Instagram"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;