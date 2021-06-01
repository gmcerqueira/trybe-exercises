import React from "react";
import { render, cleanup } from "@testing-library/react";
import TicTacToe from "./components/TicTacToe";
afterEach(cleanup);

describe("Configuração inicial do jogo", () => {
  test("Verificar se foi renderizada nove casas", () => {
    const { getAllByTestId } = render(<TicTacToe />);
    const cells = getAllByTestId(/cell_/);

    expect(cells.length).toBe(9);

    expect.assertions(1);
  });

  test("Começar com todos os espaços em branco.", () => {
    const { getAllByTestId } = render(<TicTacToe />);
    const cells = getAllByTestId(/cell_/);

    cells.map((cell) => {
      expect(cell.childElementCount).toBe(0);
    });

    expect.assertions(9);
  });

  test("Começar sem a frase 'Fim de jogo'", () => {
    const { queryByText } = render(<TicTacToe />);
    expect(queryByText("FIM DE JOGO")).toBeNull();
  });
});
