import React from "react";
import "./Board.css";

const Board = (props) => {
	console.log(props.answer);
	return (
		<div className="Board">
			<div className="ItemWrap">
				{props.answer.map((list, index) => {
					return (
						<div key={index} className="Item">
							{list}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Board;
