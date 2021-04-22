import React, { Component } from "react";
import Board from "./components/Board";

import "./App.css";

class App extends Component {
	state = {
		answer: ["", "", "", "", "", "", "", "", ""],
		gameDone: false,
		messageWin: "Good Job! You Won The Game!",
		messageFail: "You Failed. Try Again?",
		winOrFail: false,
	};

	clicked = (index) => {
		if (this.state.answer[index].length === 0) {
			this.setState(
				(prevState) => {
					const list = prevState.answer.map((as, ind) => {
						return ind === index ? "X" : as;
					});

					return { answer: list };
				},
				() => this.computerTurn()
			);
		}
	};
	reset = () => {
		this.setState({
			answer: ["", "", "", "", "", "", "", "", ""],
			gameDone: false,
			winOrFail: false,
		});
	};
	computerTurn = () => {
		const isFull = (currentValue) => currentValue.length > 0;
		const allFull = this.state.answer.every(isFull);
		if (allFull) {
			this.setState({ gameDone: true });
			return;
		}

		let randomIndex = Math.floor(Math.random() * this.state.answer.length);
		this.state.answer[randomIndex] === ""
			? this.setState((state) => {
					const list = state.answer.map((as, ind) => {
						return ind === randomIndex ? "0" : as;
					});
					return { answer: list };
			  })
			: setTimeout(() => {
					this.computerTurn();
			  }, 100);
	};
	render = () => {
		return (
			<div className="App">
				<h1>Tic Tac Toe Game</h1>
				<div className="exp">You are X. Your opponent is O.</div>
				<button onClick={this.reset}>Play again</button>
				<br />
				<br />
				<Board
					gameDone={this.state.gameDone}
					answer={this.state.answer}
					clicked={this.clicked}
				/>
			</div>
		);
	};
}

export default App;
