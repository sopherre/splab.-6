import { render, screen } from "@testing-library/react";
import React from "react";
import App from "App";
import userEvent from "@testing-library/user-event";

test("初期状態ではダイアログは出ていない", () => {
  render(<App />);
  const dialog = screen.queryByRole("dialog");

  expect(dialog).not.toBeInTheDocument();
});

test("ダイアログが開くかのテスト", () => {
  render(<App />);
  const openButton = screen.getByRole("button", { name: "open dialog" });

  userEvent.click(openButton);
  const dialog = screen.getByRole("dialog");

  expect(dialog).toBeInTheDocument();
});
