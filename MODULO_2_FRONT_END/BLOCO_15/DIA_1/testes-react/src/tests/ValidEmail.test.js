import React from "react";
import { render } from "@testing-library/react";
import ValidEmail from "../components/ValidEmail.js";

describe("Funcionamento do componente validEmail:", () => {
  test("Testando um componente, caso o email seja valido.", () => {
    const emailTest = "email@email.com";
    const { getByText } = render(<ValidEmail email={emailTest} />);
    const isValid = getByText("Email Valido");
    expect(isValid).toBeInTheDocument();
  });

  test("Testando um componente, caso o email seja inválido.", () => {
    const EMAIL_USER = "email#email.com";
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);

    const isInvalid = getByText("Email Inválido");
    expect(isInvalid).toBeInTheDocument();
  });
});
