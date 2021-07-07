import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  beforeEach(() => {
    let app = render(<App />);
  });

  it("should have textbox element", () => {
    const textInputElement = screen.getByRole("textbox");
    // console.log(textInputElement);
    expect(textInputElement).toBeDefined();
  });

  describe("handleSubmit", () => {
    it("sets validation message on button click", () => {
      const submitButton = screen.getByRole("button");
      // console.log(submitButton);
      userEvent.click(submitButton);
      expect(
        screen.getByText("First name can not be all lowercase")
      ).toBeInTheDocument();
    });
    it("shows no validation message on button click with proper input", () => {
      const submitButton = screen.getByRole("button");
      const textInputbox = screen.getByRole("textbox");
      // console.log(textInputbox);
      userEvent.type(textInputbox, "blahA");
      userEvent.click(submitButton);
      const errorMessage = screen.queryByText(
        "First name can not be all lowercase",
        {}
      );
      expect(errorMessage).not.toBeInTheDocument();
    });
  });
});
