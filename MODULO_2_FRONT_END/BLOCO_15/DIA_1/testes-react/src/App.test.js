import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Tela de inserção de email:", () => {
  it("Verificando se existe o campo Email.", () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText("Email");
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe("email");
  });

  // it("Verificando se existe um botão", () => {
  //   const { getByRole } = render(<App />);
  //   const btn = getByRole("button");
  //   expect(btn).toBeInTheDocument();
  // });

  it("Verificando se existe dois botões", () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole("button");
    expect(buttons.length).toBe(2);
  });

  it("Verificando se existe um botão de enviar", () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId("id-send");
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe("button");
    expect(btn).toHaveValue("Enviar");
  });

  it('Verifica que ao inserir um email valido e clicar em "Enviar", o email e mensagem de email valido aparecem na tela', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const emailTest = "test@test.com";
    const emailInput = getByLabelText("Email");
    const sendButton = getByTestId("id-send");
    const userEmail = getByTestId("id-email-user");

    fireEvent.change(emailInput, { target: { value: emailTest } });
    fireEvent.click(sendButton);

    const checkEmail = getByTestId("id-email-check");

    expect(emailInput.value).toBe("");
    expect(userEmail.textContent).toBe(`Valor: ${emailTest}`);
    expect(checkEmail.textContent).toBe("Email Valido");
  });

  it('Verifica que ao inserir um email inválido e clicar em "Enviar", o email e mensagem de email inválido aparecem na tela', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const invalidEmailTest = "test#test.com";
    const emailInput = getByLabelText("Email");
    const sendButton = getByTestId("id-send");
    const userEmail = getByTestId("id-email-user");

    fireEvent.change(emailInput, { target: { value: invalidEmailTest } });
    fireEvent.click(sendButton);

    const checkEmail = getByTestId("id-email-check");

    expect(emailInput.value).toBe("");
    expect(userEmail.textContent).toBe(`Valor: ${invalidEmailTest}`);
    expect(checkEmail.textContent).toBe("Email Inválido");
  });
});
