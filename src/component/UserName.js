import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UserName = ({ userName, setUserName, lang }) => {
	const handleClear = () => {
		localStorage.clear();
	};
	const handleSubmit = async () => {
		localStorage.setItem("name", userName);
		await setUserName(userName);
		// routeChange();
	};
	const keyUpHandle = (kp) => {
		console.log(kp.key);
		if (kp.key === "Backspace" && userName) {
			setUserName(userName.slice(0, -1));
		}
		if (kp.key.length === 1) {
			setUserName(userName + kp.key);
		}
	};
	// ? cool caller func for to be able to removeEventListener
	const caller = (e) => {
		keyUpHandle(e);
	};
	useEffect(() => {
		window.addEventListener("keyup", caller);

		return () => {
			window.removeEventListener("keyup", caller);
		};
	});

	if (localStorage.getItem("name")) {
		return (
			<div className="d-flex justify-content-center logo-wall">
				<div className="results">
					{lang ? "שלום " : " hey "}
					{localStorage.getItem("name")}
					<br />
					{lang
						? "התוצאה הכי טובה שלך במשחק האותיות :"
						: "best letter-game score :"}
					{localStorage.getItem("scoreLetters")}
					<br />
					{lang
						? "מספר המילים הגבוהה ביותר בדקה :"
						: "most word per minute"}{" "}
					{localStorage.getItem("storyScore")}
					<Link to="/">
						<button onClick={() => handleClear()}>
							{lang ? "נקה רישום" : "clear local storage"}
						</button>
					</Link>
				</div>
			</div>
		);
	} else
		return (
			<div className="d-flex justify-content-center logo-wall">
				<div
					className="card"
					style={{ width: "30rem", textAlign: "center", fontSize: "2rem" }}
				>
					<div className="card-body">
						<h1>
							{lang
								? "הקלד שם משתמש ובסיום לחץ שלח"
								: "type your name , at the end Submit"}
						</h1>
						<h1>{userName ? userName : null}</h1>
						<Link to="/welcome">
							<button onClick={() => handleSubmit()}>
								{lang ? "שלח" : "Sumbit"}
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
};

export default UserName;
