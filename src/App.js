import React, { Component } from "react";
import Board from "./components/Board";

import "./App.css";

class App extends Component {
	state = {
		answer: ["", "", "", "", "", "", "", "", ""],
		gameDone: false,
		messageWin: "Good Job! You Won The Game!",
		messageFail: "You Failed. Try Again?",
		win: false,
	};

	checkGameIfComputerWins = () => {
		// computer win case
		if (
			(this.state.answer[0] === "0" &&
				this.state.answer[3] === "0" &&
				this.state.answer[6] === "0") ||
			(this.state.answer[1] === "0" &&
				this.state.answer[4] === "0" &&
				this.state.answer[7] === "0") ||
			(this.state.answer[2] === "0" &&
				this.state.answer[5] === "0" &&
				this.state.answer[8] === "0") ||
			(this.state.answer[0] === "0" &&
				this.state.answer[1] === "0" &&
				this.state.answer[2] === "0") ||
			(this.state.answer[3] === "0" &&
				this.state.answer[4] === "0" &&
				this.state.answer[5] === "0") ||
			(this.state.answer[6] === "0" &&
				this.state.answer[7] === "0" &&
				this.state.answer[8] === "0") ||
			(this.state.answer[0] === "0" &&
				this.state.answer[4] === "0" &&
				this.state.answer[8] === "0") ||
			(this.state.answer[2] === "0" &&
				this.state.answer[4] === "0" &&
				this.state.answer[6] === "0")
		) {
			this.setState({ gameDone: true, win: false }, () => {
				return true;
			});
		} else {
			return false;
		}
	};

	checkGameIfUserWins = () => {
		// user win case
		if (
			(this.state.answer[0] === "X" &&
				this.state.answer[3] === "X" &&
				this.state.answer[6] === "X") ||
			(this.state.answer[1] === "X" &&
				this.state.answer[4] === "X" &&
				this.state.answer[7] === "X") ||
			(this.state.answer[2] === "X" &&
				this.state.answer[5] === "X" &&
				this.state.answer[8] === "X") ||
			(this.state.answer[0] === "X" &&
				this.state.answer[1] === "X" &&
				this.state.answer[2] === "X") ||
			(this.state.answer[3] === "X" &&
				this.state.answer[4] === "X" &&
				this.state.answer[5] === "X") ||
			(this.state.answer[6] === "X" &&
				this.state.answer[7] === "X" &&
				this.state.answer[8] === "X") ||
			(this.state.answer[0] === "X" &&
				this.state.answer[4] === "X" &&
				this.state.answer[8] === "X") ||
			(this.state.answer[2] === "X" &&
				this.state.answer[4] === "X" &&
				this.state.answer[6] === "X")
		) {
			this.setState({ gameDone: true, win: true }, () => {
				return true;
			});
		} else {
			return false; // to continue the game
		}
		return false;
	};

	reset = () => {
		this.setState({
			answer: ["", "", "", "", "", "", "", "", ""],
			gameDone: false,
			win: false,
		});
	};
	userTurn = (index) => {
		if (this.state.answer[index].length === 0) {
			this.setState(
				(prevState) => {
					const list = prevState.answer.map((as, ind) => {
						return ind === index ? "X" : as;
					});

					return { answer: list };
				},
				() => {
					if (!this.checkGameIfUserWins()) {
						this.computerTurn();
					}
				}
			);
		}
	};
	computerTurn = () => {
		// stop the game if it is full
		const isFull = (currentValue) => currentValue.length > 0;
		const allFull = this.state.answer.every(isFull);
		if (allFull) {
			this.setState({ gameDone: true });
			return;
		}

		// if computer didn't win
		let randomIndex = Math.floor(Math.random() * this.state.answer.length);
		if (this.state.answer[randomIndex] === "") {
			this.setState(
				(state) => {
					const list = state.answer.map((as, ind) => {
						return ind === randomIndex ? "0" : as;
					});
					return { answer: list };
				},
				() => this.checkGameIfComputerWins()
			);
		} else {
			setTimeout(() => {
				this.computerTurn();
			}, 100);
		}
	};
	render = () => {
		return (
			<div className="App">
				<h1>Tic Tac Toe Game</h1>
				<div className="exp">You are X. Your opponent is O.</div>
				<button onClick={this.reset}>Play again</button>
				<br />
				<br />
				<span style={{ color: "#AAC0AA", fontWeight: "bold" }}>
					{this.state.win && this.state.messageWin}
				</span>
				<span style={{ color: "#A18276", fontWeight: "bold" }}>
					{this.state.gameDone && !this.state.win && this.state.messageFail}
				</span>
				<br />
				<br />
				<Board
					gameDone={this.state.gameDone}
					answer={this.state.answer}
					clicked={this.userTurn}
				/>
			</div>
		);
	};
}

export default App;
