import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const App = () => {
	const [data, setData] = useState([
		{
			title: "Tite 1",
		},
	]);

	const sendData = () => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((d) =>
				setData([
					...data,
					{
						title: d.title,
					},
				])
			)
			.catch((error) => console.log(error));
	};

	return (
		<div className="container">
			<div className="card-wrapper">
				{data.map((row) => {
					return (
						<div className="card">
							<img
								alt="avatar_img"
								className="avatar"
								src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=1}`}
							/>
							<p className="output">{row.title}</p>
						</div>
					);
				})}
			</div>
			<div className="input-wrapper">
				<input className="input" type="text" />
				<FontAwesomeIcon
					onClick={sendData}
					icon={faPaperPlane}
					className="clear-icon"
				/>
			</div>
		</div>
	);
};

export default App;
