import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../app.css";

const LettersGame = ({
	lang,
	setToggeled,
	toggeled,
	alphabet,
	setAlphabet,
}) => {
	const [score, setScore] = useState(0);
	const [time, setTime] = useState(30);

	const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
	const [letter, setLetter] = useState(randomCharacter);
	const [userLetter, setUserLetter] = useState("");

	const ref = useRef();
	const ref2 = useRef();

	const handleSumbit = () => {
		let check = localStorage.getItem("scoreLetters");
		if (!check) {
			localStorage.setItem("scoreLetters", "0");
			check = localStorage.getItem("scoreLetters");
		}
		if (parseInt(check) < score) {
			localStorage.setItem("scoreLetters", score);
		}
	};

	function talk() {
		let u = new SpeechSynthesisUtterance();
		u.text = letter;
		speechSynthesis.speak(u);
	}

	const timeTick = async () => {
		await setTimeout(() => {
			setTime(time - 1);
		}, 1000);
	};

	const handeleLanguge = async () => {
		if (lang) {
			console.log("handling");
			await setAlphabet("אבגדהוזחטיכלמנסעפצקרשת");
			await setToggeled(true);
			setUserLetter("");
			setLetter(randomCharacter);
		} else {
			console.log("handling !lang");
			await setAlphabet("abcdefghijklmnopqrstuvwxyz");
			await setToggeled(false);
			setUserLetter("");
			setLetter(randomCharacter);
		}
	};

	const handleComp = async () => {
		ref.current.classList.add("Comp");
		await setTimeout(() => {
			talk();
			setUserLetter("");
			setLetter(randomCharacter);
			setScore(score + 1);
		}, 500);
	};

	useEffect(() => {
		ref2.current.focus();
		if (time !== 0) {
			timeTick();
		} else {
			setLetter("");
		}

		if (lang && !toggeled) {
			handeleLanguge();
		}
		if (!lang && toggeled) {
			handeleLanguge();
		}
		window.addEventListener("keyup", (key) => {
			if (key.key.length === 1) {
				setUserLetter(key.key);
			}
		});
		if (letter === userLetter) {
			handleComp();
		} else {
			ref.current.classList.remove("Comp");
		}
	}, [time]);

	return (
		<div className="d-flex justify-content-center logo-wall" id="wall">
			<div
				className="card conty "
				style={{
					width: "18rem",
					height: "50%",
					textAlign: "center",
					fontSize: "2rem",
				}}
			>
				<input ref={ref2} type="text" style={{ visibility: "hidden" }} />
				<div className="card-body ">
					<h3>
						{" "}
						{lang ? "תוצאה" : "score"} {score}
					</h3>
					<h2 className="letter">{letter}</h2>
					<h1 ref={ref}>{userLetter}</h1>
					<div className="time-box"></div>
				</div>
				<div style={{ display: "inline-block" }}>
					{!time && (
						<div>
							{score > parseInt(localStorage.getItem("scoreLetters")) ||
							!localStorage.getItem("scoreLetters") ? (
								<iframe
									src="https://giphy.com/embed/111ebonMs90YLu"
									width="50%"
									height="50%"
									frameBorder="10"
									style={{ position: "absolute", top: "25%", left: "25%" }}
								></iframe>
							) : (
								<iframe
									frameBorder="10"
									height="50%"
									src="https://giphy.com/embed/piJAO0y5RdbADY1B7u"
									style={{ position: "absolute", top: "25%", left: "25%" }}
									width="50%"
								></iframe>
							)}

							<Link to="/">
								<button onClick={() => handleSumbit()}>
									{lang ? "שלח תוצאה" : "Submit result"}
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LettersGame;
