import React, { Component } from "react";
import Board from "./components/Board";

import "./App.css";

class App extends Component {
	state = { answer: ["a", "a", "", "", "", "", "", "", ""] };
	render = () => {
		return (
			<div className="App">
				<h1>Tic Tac Toe Game</h1>
				<div className="exp">You are X. Your opponent is O.</div>
				<Board answer={this.state.answer} />
			</div>
		);
	};
}

export default App;
