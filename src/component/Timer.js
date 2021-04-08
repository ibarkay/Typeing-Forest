const Timer = ({ time, start, setStart, lang }) => {
	const handelClick = () => {
		setStart(!start);
	};
	return (
		<div>
			<h3>
				{lang ? "זמן :" : "time :"} {time}
			</h3>
			<button onClick={() => handelClick()}>
				{lang ? (start ? "הפסק" : "התחל") : start ? "stop" : "start"}
			</button>
		</div>
	);
};
export default Timer;
