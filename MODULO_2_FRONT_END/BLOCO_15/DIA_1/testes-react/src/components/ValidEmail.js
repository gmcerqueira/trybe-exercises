import React from "react";

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email
        && (verifyEmail(email) ? (
        <h3 style={{ color: "green" }} data-testid="id-email-check">
          Email Valido
        </h3>
      ) : (
        <h3 style={{ color: "red" }} data-testid="id-email-check">
          Email Inválido
        </h3>
      ))}
    </div>
  );
};

export default ValidEmail;
