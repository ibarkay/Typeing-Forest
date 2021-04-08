import React, { useState, useEffect, useRef } from "react";
import "../app.css";

const Wellcome = ({ lang, totalScore, userName, setUserName }) => {
	const ref = useRef();
	const [word, setWord] = useState("ברוכים הבאים למשחק ההקלדה של יער");
	const [userLetter, setUserLetter] = useState("");
	const [userWord, setUserWord] = useState("");
	const [wordCopyMinus, setWordCopyMinus] = useState(word);
	const [count, setCount] = useState(0);
	const [win, setWin] = useState(false);
	const [time, setTime] = useState(0);
	const [toggled, setToggeled] = useState(false);

	const handeleLanguge = async () => {
		await setWord("welcome to forest typing");
		await setWordCopyMinus(word);
		setToggeled(true);
	};

	const handleComp = async (char) => {
		await setWordCopyMinus(wordCopyMinus.substring(1));
		await setCount(count + 1);
		await setUserWord(userWord + char);
	};

	const timeTick = async () => {
		await setTimeout(() => {
			setTime(time + 1);
		}, 1000);
	};

	const keyUpHandle = (kp) => {
		if (kp.key.length === 1) {
			setUserLetter(kp.key);
		}
		if (kp.key === word[count]) {
			handleComp(kp.key);
		}
	};

	// ? cool caller func for to be able to removeEventListener
	const caller = (e) => {
		keyUpHandle(e);
	};

	useEffect(() => {
		if (!win) {
			timeTick();
		}
		if (!lang && !toggled) {
			handeleLanguge();
		}
		window.addEventListener("keyup", caller);
		if (!wordCopyMinus.length) {
			setWin(true);
			window.removeEventListener("keyup", caller);
		}
		return () => {
			window.removeEventListener("keyup", caller);
		};
	});

	return (
		<div ref={ref} className="welcome logo-wall" id="wall">
			<div className="welcome conty">
				{/* {userName && (
				<h2>
					{lang ? "ברוכים הבאים " : "Welcome "}
					{userName}
				</h2>
			)} */}
				<h4
					style={{ textAlign: "center", fontSize: "5rem" }}
					className="grey typing-demo"
				>
					<span style={{ color: "black" }}>{userWord}</span>
					{wordCopyMinus}
				</h4>
				{userLetter}
				<h1>{lang ? (win ? "כל הכבוד" : null) : win ? "Congratz!" : null}</h1>
				<h4>
					{lang ? "שניות" : "secondes"} {time}
				</h4>
				<h5>
					{lang ? "מילים לדקה" : "words per minute"}:
					{Math.floor(userWord.split("").length / 5 / (time / 60))}
				</h5>
				<h5>
					{lang ? "הושלם" : "complete"} :{" "}
					{(userWord.length / word.length) * 100}%
				</h5>
			</div>
		</div>
	);
};

export default Wellcome;
