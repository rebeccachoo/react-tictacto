import React from "react";
import "./Board.css";

const Board = (props) => {
	const itemClicked = (index) => {
		props.clicked(index);
	};

	return (
		<div className="Board">
			<div
				className="ItemWrap"
				style={{ backgroundColor: props.gameDone ? "red" : "white" }}
			>
				{props.answer.map((list, index) => {
					return (
						<div
							key={index}
							className="Item"
							onClick={() => itemClicked(index)}
							style={{ pointerEvents: props.gameDone ? "none" : "" }}
						>
							{list}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Board;
