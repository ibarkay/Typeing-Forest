import React, { useState, useEffect, useRef } from "react";

const Train = () => {
	const [word, setWord] = useState("leet");
	const [userKey, setuserKey] = useState("");
	const [keyPressed, setKeyPressed] = useState("");

	useEffect(() => {
		if (userKey === word) {
			alert("Y0u 473 1337!");
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
			<h1>as you type you will find a secret word </h1>
			<div
				style={{
					display: "flex",
					border: "1px solid black",
					width: "300px",
					height: "30px",
					fontSize: "2rem",
				}}
			>
				{userKey}
			</div>
			<p>hint:1337</p>
		</div>
	);
};

export default Train;
