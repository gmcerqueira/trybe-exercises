import React from "react";
import { render, cleanup, fireEvent, getByText } from "@testing-library/react";
import TicTacToe from "./components/TicTacToe";

afterEach(cleanup);

describe("Comportamento no fim de jogo", () => {
  test("Se empate, mostre 'EMPATE' na tela", () => {
    const tieParam = [0, 1, 2, 3, 4, 6, 5, 8, 7];
    const { getByTestId, getByText } = render(<TicTacToe />);

    tieParam.forEach((cellID) =>
      fireEvent.click(getByTestId(`cell_${cellID}`))
    );

    const tieMsg = getByText(/empate/i);

    expect(tieMsg).toBeDefined();
  });

  test("Se jogador 1 vence, mostre 'JOGADOR 1' na tela", () => {
    const winParamOne = [0, 1, 3, 4, 6];
    const { getByTestId, getByText } = render(<TicTacToe />);

    winParamOne.forEach((cellID) =>
      fireEvent.click(getByTestId(`cell_${cellID}`))
    );

    const winMsg = getByText(/jogador 1/i);
    const endMsg = getByText(/fim de jogo/i);

    expect(winMsg).toBeDefined();
    expect(endMsg).toBeDefined();
  });

  test("Se jogador 2 vence, mostre 'JOGADOR 2' na tela", () => {
    const winParamOne = [0, 1, 3, 4, 2, 7];
    const { getByTestId, getByText } = render(<TicTacToe />);

    winParamOne.forEach((cellID) =>
      fireEvent.click(getByTestId(`cell_${cellID}`))
    );

    const winMsg = getByText(/jogador 2/i);
    const endMsg = getByText(/fim de jogo/i);

    expect(winMsg).toBeDefined();
    expect(endMsg).toBeDefined();
  });
});

describe("Comportamento de reinicio do jogo", () => {
  const { getByText, getByTestId, getAllByAltText, queryByAltText } = render(
    <TicTacToe />
  );
  const resetBtn = getByText(/reiniciar/i);
    const cell0=getByTestId("cell_0")
  fireEvent.click(cell0);
  expect(getAllByAltText("o")).toHaveLength(1);
  expect(queryByAltText("x")).toBeNull();
  // fireEvent.click(resetBtn);
  // expect(queryByAltText("o")).toBeNull();
});
