import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<ul id="social-sidebar">
			<li>
				<Link to={"/contact"}>
					<HiOutlineMail color="#333" fontSize="100%" />
					<span>Email</span>
				</Link>
			</li>
			<li>
				<a
					href="https://drive.google.com/file/d/1fbdToPPOgxjzAqPToVL5fh6rOZK_hIyd/view?usp=sharing"
					target="_blank"
					rel="noreferrer"
				>
					<FiUser color="#333" fontSize="100%" />
					<span>Resume</span>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/shazaq03"
					target="_blank"
					rel="noreferrer"
				>
					<FiGithub color="#333" fontSize="100%" />
					<span>Github</span>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/sharan-sampath-kumar-10b1a5208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2F0%2FkZ6esTpyLw6CV3kWanA%3D%3D"
					target="_blank"
					rel="noreferrer"
				>
					<FiLinkedin color="#333" fontSize="100%" />
					<span>LinkedIn</span>
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/Shazaq03"
					target="_blank"
					rel="noreferrer"
				>
					<FiTwitter color="#333" fontSize="100%" />
					<span>Twitter</span>
				</a>
			</li>
		</ul>
	);
}

export default Sidebar;
