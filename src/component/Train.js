import React, { useState, useEffect, useRef } from "react";

const Train = () => {
	const [word, setWord] = useState("leet");
	const [userKey, setuserKey] = useState("");
	const [keyPressed, setKeyPressed] = useState("");

	useEffect(() => {
		if (userKey === word) {
			alert("win");
		}
		window.addEventListener("keypress", (key) => {
			if (key.key.length === 1 && word.startsWith(userKey)) {
				setuserKey(userKey + key.key);
			} else {
				setKeyPressed(key.key);
			}
		});
	});

	return (
		<div>
			<h1>as you type you will find a secret word</h1>
			<h1>{userKey}</h1>
		</div>
	);
};

export default Train;
