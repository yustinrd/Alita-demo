import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders your content", () => {
  render(<App />);
  const contentElement = screen.getByText(/your content here/i);
  expect(contentElement).toBeInTheDocument();
});
