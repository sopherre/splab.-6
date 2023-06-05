import { greet, sayGoodBye } from "../greet";

jest.mock("../greet", () => ({
  ...jest.requireActual("../greet"),
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装通り）", () => {
  const name = "Taro";

  const result = greet(name);

  expect(result).toBe("Hello! Taro.");
});

test("さよならを返す（本来の実装ではない）", () => {
  const name = "Taro";

  const result = sayGoodBye(name);

  expect(result).toBe("Good bye, Taro.");
});
