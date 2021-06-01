import React from "react";
import GameBoard from "./GameBoard";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      champion: undefined,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { activePlayer } = prevState;

    this.checkGame(activePlayer);
  }

  markCell = ({ target: { id } }) => {
    const { gameBoard, activePlayer } = this.state;
    if (gameBoard[id] === 0) {
      gameBoard[id] = activePlayer;
      this.setState((prev) =>
        prev.activePlayer === 1
          ? { activePlayer: 2, gameBoard }
          : { activePlayer: 1, gameBoard }
      );
    }
  };

  checkGame = (id) => {
    const { gameBoard } = this.state;
    const victoryParams = [
      [0, 1, 2],
      [0, 4, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
    const test = victoryParams.find((param) =>
      param.every((index) => gameBoard[index] === id)
    );

    if (victoryParams.includes(test)) this.setState({ champion: id });
  };

  // Padrões de vitoria:
  // [0, 1, 2]
  // [0, 4, 8]
  // [0, 3, 6]
  // [1, 4, 7]
  // [2, 5, 8]
  // [2, 4, 6]
  // [3, 4, 5]
  // [6, 7, 8]

  resetGame = () => {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      champion: undefined,
    });
  };

  renderResetButton = () => <button onClick={this.resetGame}>Reiniciar</button>;

  render() {
    const { champion, gameBoard } = this.state;

    if (champion)
      return (
        <div>
          <h1>
            FIM DE JOGO
            <br />
            JOGADOR {champion} VENCEU!
          </h1>
          {this.renderResetButton()}
        </div>
      );
    return gameBoard.includes(0) ? (
      <div>
        <GameBoard gameState={this.state.gameBoard} markCell={this.markCell} />
        {this.renderResetButton()}
      </div>
    ) : (
      <div>
        <h1>
          FIM DE JOGO
          <br />
          EMPATE
        </h1>
        {this.renderResetButton()}
      </div>
    );
  }
}

export default TicTacToe;
