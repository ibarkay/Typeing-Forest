import React, { useState, useEffect, useRef } from "react";
import "../app.css";
import axios from "axios";

const Story = ({ lang }) => {
	const myProxy = "https://api.codetabs.com/v1/proxy?quest=";

	const [word, setWord] = useState([
		"Sarah and Ira drove to the store",
		"Jenny and I opened all the gifts",
		"The cat and dog ate",
		"My parents and I went to a movie",
		"Juarez and Mr. Smith are dancing gracefully",
		"Samantha, Elizabeth, and Joan are on the committee",
		"The ham, green beans, mashed potatoes, and corn are gluten-free",
		"The paper and pencil sat idle on the desk",
	]);
	const [letter, setLetter] = useState("");
	const [count, setCount] = useState(0);
	const [sentenceCount, setSentenceCount] = useState(0);
	const [time, setTime] = useState(0);
	const [userChar, setuserChar] = useState("");
	const [userWord, setUserWord] = useState("");
	const [wordCopyMinus, setWordCopyMinus] = useState(word[sentenceCount]);
	const [win, setWin] = useState(false);

	const handleComp = async (char) => {
		await setUserWord(userWord + char);
		await setWordCopyMinus(wordCopyMinus.substring(1));
		await setCount(count + 1);
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
		<div className="welcome">
			<div className="">
				<div>
					<span style={{ color: "black" }}>{userWord}</span>
					<span className="line">|</span>
					<span style={{ color: "grey" }}>{wordCopyMinus}</span>
				</div>
			</div>

			{userChar}
			<h1>{win ? "???? ??????????" : null}</h1>
			<span>
				{lang ? "??????????" : "secondes"} :{time}
			</span>
			<span>
				{lang ? "?????????? ???????? :" : "words per minute"}{" "}
				{Math.floor(userWord.split("").length / 5 / (time / 60))}
			</span>
			<span>
				{lang ? "?????????? :" : "complete"}{" "}
				{Math.floor((userWord.length / word[sentenceCount].length) * 100)}%
			</span>
		</div>
	);
};

export default Story;
