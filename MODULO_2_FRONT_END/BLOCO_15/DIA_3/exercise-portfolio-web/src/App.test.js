import React from "react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import renderWithRouter from "./renderWithRouter";
describe("Click on link goes to the right path", () => {
  test("Home", () => {
    const { history, getByRole } = renderWithRouter(<App />);
    const home = getByRole("link", { name: /home/i });
    userEvent.click(home);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/");
  });

  test("About", () => {
    const { history, getByRole, getByText } = renderWithRouter(<App />);
    const about = getByRole("link", { name: /about/i });
    const homeText = getByText("Gustavo Cerqueira");

    expect(homeText).toBeInTheDocument();
    userEvent.click(about);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/about");
    expect(homeText).not.toBeInTheDocument();
  });

  test("Contact", () => {
    const { history, getByRole, getByText } = renderWithRouter(<App />);
    const contact = getByRole("link", { name: /contact/i });
    const homeText = getByText("Gustavo Cerqueira");

    expect(homeText).toBeInTheDocument();
    userEvent.click(contact);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/contact");
    expect(homeText).not.toBeInTheDocument();
  });

  test("Projects", () => {
    const { history, getByRole, getByText } = renderWithRouter(<App />);
    const projects = getByRole("link", { name: /projects/i });
    const homeText = getByText("Gustavo Cerqueira");

    expect(homeText).toBeInTheDocument();
    userEvent.click(projects);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe("/projects");
    expect(homeText).not.toBeInTheDocument();
  });
});

describe("Renders the correct component:", () => {
  it("Home", () => {
    const { history, getByRole, getByAltText } = renderWithRouter(<App />);
    const profileName = getByRole("heading", {
      level: 2,
      name: "Gustavo Cerqueira",
    });
    const profileImg = getByAltText("profile image");

    expect(profileName).toBeInTheDocument();
    expect(profileName.textContent).toBe("Gustavo Cerqueira");
    expect(profileImg).toBeInTheDocument();
    expect(profileImg.src).toBe("http://localhost/profile.jpg");
  });

  it("Contact", () => {
    const { history, getByRole, getByAltText } = renderWithRouter(<App />);
    const contact = getByRole("link", { name: /contact/i });

    userEvent.click(contact);
    const gitHub = getByRole("link", { name: /github/i });
    userEvent.click(gitHub);

    console.log(history);

    // expect(pathname).toBe("https://github.com/gmcerqueira");
  });
});
