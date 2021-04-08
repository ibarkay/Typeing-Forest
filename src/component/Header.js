import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../app.css";

const Header = ({ lang, setLang }) => {
	const ref = useRef();
	const handleClick = () => {
		setLang(!lang);
		console.log(lang);
		ref.current.blur();
	};

	return (
		<ul
			className="nav justify-content-around"
			style={{ background: "#D2EDF6" }}
		>
			<li className="nav-item">
				<Link className="nav-link" to="/welcome">
					{lang ? "בית" : "home"}-<i className="fas fa-home"></i>
				</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/letter-game">
					{lang ? "אימון באותיות" : "Letter game"}-
					<i className="fas fa-stopwatch"></i>
				</Link>
			</li>
			<li>
				<Link className="nav-link" to="/story">
					{lang ? "משפטים" : "stroy game"}-<i className="fas fa-book"></i>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/username">
					{lang ? "פרופיל" : "profile"}-<i className="fas fa-id-badge"></i>
				</Link>
			</li>

			<li>
				<button className="btn" ref={ref} onClick={() => handleClick()}>
					{lang ? "english" : "עברית"}{" "}
				</button>
			</li>
		</ul>
	);
};

export default Header;
