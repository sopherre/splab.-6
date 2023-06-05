import React from "react";
import { render, screen } from "@testing-library/react";
import { SampleComponent } from "view/components/sample";
import userEvent from "@testing-library/user-event";

test("submitボタンが存在するかどうかのテスト", () => {
  const sampleComponent = render(<SampleComponent onClick={jest.fn()} />);
  const submitButton = sampleComponent.getByRole("button", { name: "submit" });

  expect(submitButton).toBeInTheDocument();
});

test("入力したテキストが表示されるかテスト", () => {
  render(<SampleComponent onClick={jest.fn()} />);
  const sampleForm = screen.getByRole("textbox");
  const submitButton = screen.getByRole("button", { name: "submit" });

  userEvent.type(sampleForm, "test");
  userEvent.click(submitButton);

  const sampleTypography = screen.getByRole("heading");
  expect(sampleTypography).toBeInTheDocument();
});

test("コールバック関数が呼び出されるかのテスト", () => {
  const mockFn = jest.fn();
  render(<SampleComponent onClick={mockFn} />);
  const submitButton = screen.getByRole("button", { name: "submit" });

  userEvent.click(submitButton);

  expect(mockFn).toHaveBeenCalledTimes(1);
});

// within p152
