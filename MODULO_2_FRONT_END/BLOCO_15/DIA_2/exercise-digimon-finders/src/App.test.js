import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Teste da aplicação toda", () => {
  afterEach(() => jest.clearAllMocks());

  it("renders App", async () => {
    const { getByText, getByTestId } = render(<App />);
    const linkElement = getByText(/Faça uma pesquisa/i);
    const searchButton = getByTestId("buttonSearch");
    const searchInput = getByTestId("input");

    expect(linkElement).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });

  it("changes input value", async () => {
    const { getByTestId } = render(<App />);
    const searchInput = getByTestId("input");

    expect(searchInput).toHaveValue("");

    userEvent.type(searchInput, "agumon");

    expect(searchInput).toHaveValue("agumon");
  });

  it("request valid digimon", async () => {
    const digimon = [
      {
        name: "Agumon",
        img: "https://digimon.shadowsmith.com/img/agumon.jpg",
        level: "Rookie",
      },
    ];

    jest.spyOn(global, "fetch");

    const { getByTestId, findByTestId } = render(<App />);
    const searchInput = getByTestId("input");
    const searchButton = getByTestId("buttonSearch");

    userEvent.type(searchInput, "Agumon");
    userEvent.click(searchButton);

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(digimon),
    });

    const name = await findByTestId("digimonName");
    const level = await findByTestId("digimonLevel");

    expect(name).toBeInTheDocument();
    expect(level).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      "https://digimon-api.vercel.app/api/digimon/name/Agumon"
    );
  });

  it("request invalid digimon", async () => {
    const notDigimon = {
      ErrorMsg: "Abcd is not a Digimon in our database.",
    };
    jest.spyOn(global, "fetch");
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(notDigimon),
    });

    const { getByTestId, findByText } = render(<App />);
    const searchInput = getByTestId("input");
    const searchButton = getByTestId("buttonSearch");

    userEvent.type(searchInput, "Abcd");
    userEvent.click(searchButton);

    const error = await findByText("Abcd is not a Digimon in our database.");

    expect(error).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      "https://digimon-api.vercel.app/api/digimon/name/Abcd"
    );
  });

  it("if not input, doesn't request", () => {
    const { getByTestId } = render(<App />);

    const searchInput = getByTestId("input");
    const searchButton = getByTestId("buttonSearch");

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "" } });
    fireEvent.click(searchButton);

    expect(global.fetch).toBeCalledTimes(0);
  });
});
