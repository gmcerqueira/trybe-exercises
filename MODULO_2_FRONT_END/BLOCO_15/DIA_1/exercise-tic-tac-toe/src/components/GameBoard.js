import React from "react";
import GameCell from "./GameCell";
import PropTypes from "prop-types";
import "./GameBoard.css";

class GameBoard extends React.Component {
  render() {
    const { markCell, gameState } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell key={i} id={i} markCell={markCell} player={playerId} />
        ))}
      </div>
    );
  }
}

export default GameBoard;
