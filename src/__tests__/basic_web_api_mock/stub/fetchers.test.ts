import { getGreet } from "../getGreet";
import * as Fetchers from "../fetchers";

// jest.mock("../fetchers");

test("データ取得成功時: ユーザー名がない場合", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxxxxxx-123456",
    email: "taroyamada@myapi.testing.com",
  });

  await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
});

test("データ取得成功時: ユーザー名がある場合", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxxxxxx-123456",
    email: "taroyamada@myapi.testing.com",
    name: "taroyamada",
  });

  await expect(getGreet()).resolves.toBe("Hello, taroyamada!");
});

const httpError = {
  err: { message: "internal server error" },
};

test("データ取得失敗時", async () => {
  jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);

  await expect(getGreet()).rejects.toMatchObject({
    err: { message: "internal server error" },
  });
});

test("データ取得失敗時、エラー相当のデータが例外としてスローされる", async () => {
  expect.assertions(1);

  jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);

  try {
    await getGreet();
  } catch (err) {
    expect(err).toMatchObject(httpError);
  }
});
