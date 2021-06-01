import React from "react";
import PropTypes from "prop-types";
import "./GameCell.css";
import xImage from "../images/x.png";
import oImage from "../images/o.svg";

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  renderPlayerImg = () => {
    const { player } = this.props;
    if (player === 1) return oImage;
    if (player === 2) return xImage;
  };

  render() {
    const { id, markCell, player } = this.props;

    return (
      <div
        data-testid={`cell_${id}`}
        id={id}
        className="game-cell"
        onClick={markCell}
      >
        {player !== 0 && (
          <img src={this.renderPlayerImg()} alt={player === 1 ? "o" : "x"} />
        )}
      </div>
    );
  }
}

export default GameCell;
