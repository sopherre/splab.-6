import React from "react";
import { render, screen } from "@testing-library/react";
import App from "App";
import userEvent from "@testing-library/user-event";

test("初期状態ではドロワーは表示されない", () => {
  render(<App />);
  const drawer = screen.queryByRole("presentation");

  expect(drawer).not.toBeInTheDocument();
});

test("開閉ボタン押下後にドロワーが表示される", () => {
  render(<App />);
  const drawerOpenButton = screen.getByRole("button", { name: "open drawer" });

  userEvent.click(drawerOpenButton);
  const drawer = screen.getByRole("presentation");

  expect(drawer).toBeInTheDocument();
});
