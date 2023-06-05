test("モック関数は実行された", () => {
  const mockFn = jest.fn();

  mockFn();

  expect(mockFn).toBeCalled();
});

test("モック関数は実行されていない", () => {
  const mockFn = jest.fn();

  expect(mockFn).toBeCalled();
});

test("モック関数は実行されて回数を記録している", () => {
  const mockFn = jest.fn();

  mockFn();

  expect(mockFn).toHaveBeenCalledTimes(1);

  mockFn();

  expect(mockFn).toHaveBeenCalledTimes(2);
});

test("モック関すは関数の中でも実行できる", () => {
  const mockFn = jest.fn();
  const greet = () => {
    mockFn();
  };

  greet();

  expect(mockFn).toHaveBeenCalledTimes(1);
});

test("モック関数は実行時の引数を記録している", () => {
  const mockFn = jest.fn();
  const greet = (message: string) => {
    mockFn(message);
  };

  greet("hello");

  expect(mockFn).toHaveBeenCalledWith("hello");
});
