import React, { useState, useEffect } from "react";
import "../app.css";
// import axios from "axios";
import { Link } from "react-router-dom";

const Story = ({ lang }) => {
	const [word] = useState([
		"Sarah and Ira drove to the store",
		"Jenny and I opened all the gifts",
		"The cat and dog ate",
		"My parents and I went to a movie",
		"Juarez and Mr. Smith are dancing gracefully",
		"Samantha, Elizabeth, and Joan are on the committee",
		"The ham, green beans, mashed potatoes, and corn are gluten-free",
		"The paper and pencil sat idle on the desk",
	]);
	// const [letter, setLetter] = useState("");
	const [count, setCount] = useState(0);
	const [sentenceCount] = useState(Math.floor(Math.random() * word.length));
	const [time, setTime] = useState(0);
	const [userChar, setuserChar] = useState("");
	const [userWord, setUserWord] = useState("");
	const [wordCopyMinus, setWordCopyMinus] = useState(word[sentenceCount]);
	const [win, setWin] = useState(false);

	const handleSumbit = () => {
		let check = localStorage.getItem("storyScore");
		if (!check) {
			localStorage.setItem("storyScore", "0");
			check = localStorage.getItem("storyScore");
		}
		if (
			parseInt(check) < Math.floor(userWord.split("").length / 5 / (time / 60))
		) {
			localStorage.setItem(
				"storyScore",
				Math.floor(userWord.split("").length / 5 / (time / 60))
			);
		}
	};

	// const handleNext = async () => {
	// 	await setSentenceCount(sentenceCount + 1);
	// 	await setWordCopyMinus(word[sentenceCount]);
	// 	await setCount(0);
	// 	await setuserChar("");
	// 	await setTime(0);
	// 	await setUserWord("");
	// 	await setWin(false);
	// };

	const handleComp = async (char) => {
		await setCount(count + 1);
		await setUserWord(userWord + char);
		await setWordCopyMinus(wordCopyMinus.substring(1));
	};

	const timeTick = async () => {
		await setTimeout(() => {
			setTime(time + 1);
		}, 1000);
	};

	const keyUpHandle = (kp) => {
		if (kp.key.length === 1) {
			setuserChar(kp.key);
		}
		if (kp.key === word[sentenceCount][count]) {
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
		window.addEventListener("keyup", caller);
		if (!wordCopyMinus.length) {
			setWin(true);
			window.removeEventListener("keyup", caller);
		}
	});

	return (
		<div className="welcome logo-wall ">
			<div className="conty">
				<div>
					<span style={{ color: "black" }}>{userWord}</span>
					<span className="line">|</span>
					<span style={{ color: "grey" }}>{wordCopyMinus}</span>
				</div>
			</div>

			{userChar}
			<h1>{win ? "כל הכבוד" : null}</h1>
			<span>
				{lang ? "שניות" : "secondes"} :{time}
			</span>
			<span>
				{lang ? "מילים לדקה :" : "words per minute"}{" "}
				{Math.floor(userWord.split("").length / 5 / (time / 60))}
			</span>
			<span>
				{lang ? "הושלם :" : "complete"}{" "}
				{Math.floor((userWord.length / word[sentenceCount].length) * 100)}%
			</span>
			{win && (
				<div>
					<Link to="/">
						<button onClick={() => handleSumbit()}>
							{lang ? "שלח תוצאה" : "Submit result"}
						</button>
					</Link>
					{/* <button onClick={() => handleNext()}>{lang ? "הבא" : "next"}</button> */}
				</div>
			)}
		</div>
	);
};

export default Story;
