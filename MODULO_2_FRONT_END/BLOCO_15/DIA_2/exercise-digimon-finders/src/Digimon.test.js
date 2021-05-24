import React from "react";
import { render } from "@testing-library/react";
import Digimon from "./Digimon";

describe("Teste da tela do Digimon", () => {
  it("renders Digimon", async () => {
    const digimon = {
      name: "Agumon",
      img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      level: "Rookie",
    };

    const { getByTestId } = render(<Digimon digimon={digimon} />);

    const name = getByTestId("digimonName");
    const level = getByTestId("digimonLevel");

    expect(name.textContent).toBe("Agumon");
    expect(level.textContent).toBe("level: Rookie");
  });
});
