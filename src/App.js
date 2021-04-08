import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LettersGame from "./component/LetterGame";
import Wellcom from "./component/Wellcom";
import Header from "./component/Header";
import UserName from "./component/UserName";
import Story from "./component/Story";

const App = () => {
	// !STATE
	const [userName, setUserName] = useState("");
	const [totalScore, setTotalScore] = useState(0);
	const [lang, setLang] = useState(true);
	const [toggeled, setToggeled] = useState(false);
	const [start, setStart] = useState(false);
	const [alphabet, setAlphabet] = useState("abcdefghijklmnopqrstuvwxyz");

	// !---------END STATE-----------------------------------------

	return (
		<div>
			<BrowserRouter>
				<Header lang={lang} setLang={setLang} />
				<Route
					path="/welcome"
					component={() => (
						<Wellcom
							lang={lang}
							totalScore={totalScore}
							userName={userName}
							setUserName={setUserName}
						/>
					)}
				/>
				<Route path="/story" exact component={() => <Story lang={lang} />} />
				<Route
					path="/"
					exact
					component={() => (
						<UserName
							userName={userName}
							setUserName={setUserName}
							lang={lang}
						/>
					)}
				/>
				<Route
					path="/letter-game"
					component={() => (
						<LettersGame
							lang={lang}
							totalScore={totalScore}
							setTotalScore={setTotalScore}
							toggeled={toggeled}
							setToggeled={setToggeled}
							start={start}
							setStart={setStart}
							alphabet={alphabet}
							setAlphabet={setAlphabet}
						/>
					)}
				/>

				<Route
					path="/username"
					component={() => (
						<UserName
							userName={userName}
							setUserName={setUserName}
							lang={lang}
						/>
					)}
				/>
			</BrowserRouter>
		</div>
	);
};

export default App;
