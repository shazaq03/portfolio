import React from "react";
import { useNavigate } from "react-router-dom";

function Greeting() {
	let navigate = useNavigate();
	const routeChange = (route) => {
		let path = `/` + route;
		navigate(path);
	};

	return (
		<div className="greet-section">
			<div className="first-text">
				Hey,I'm <span>Sharan Sampath Kumar</span>
			</div>
			<div className="sub-text-container">
				<p className="sub-text second">
					I'm a Frontend ReactJs Developer currently based in Chennai,
					India.
				</p>
				<p className="sub-text">
					Hit me up, let's create somthing special!
				</p>
			</div>
			<div className="call-to-action-container">
				<button
					className="cta-btn"
					onClick={() => routeChange("projects")}
				>
					Projects
				</button>
				<a
					href="https://drive.google.com/file/d/1NErb5aC9u1-T_i_QyqZy-4nwALe-IjXG/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
					className="cta-btn"
				>
					Resume
				</a>
			</div>
		</div>
	);
}

export default Greeting;
