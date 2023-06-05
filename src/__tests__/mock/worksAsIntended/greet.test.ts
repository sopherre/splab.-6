import { greet } from "../greet";

test("挨拶を返す（本来の実装通り）", () => {
  const name = "Taro";

  const result = greet(name);

  expect(result).toBe("Hello! Taro.");
});
