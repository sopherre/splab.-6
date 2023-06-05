import { timeout, wait } from "./async-process";

describe("async process test", () => {
  // Promiseを返し、thenに渡す関数内にアサーションを書く方法
  test("指定時間待つと、経過時間をもってresolveされる", () => {
    return wait(100).then((duration) => {
      expect(duration).toBe(100);
    });
  });

  // resolvesを使用したアサーションをreturnする方法
  test("指定時間待つと、経過時間をもってresolveされる", () => {
    return expect(wait(100)).resolves.toBe(100);
  });

  // テスト関数をasync関数とし、関数内でPromiseが解決するのを待つ方法
  test("指定時間待つと、経過時間をもってresolveされる", async () => {
    await expect(wait(100)).resolves.toBe(100);
  });

  // 検証値のPromiseが解決するのを待ってから、アサーションに展開する方法
  test("指定時間待つと、経過時間をもってresolveされる", async () => {
    expect(await wait(100)).toBe(100);
  });

  describe("rejectを検証するテスト", () => {
    // Promiseをreturnする方法
    test("指定時間待つと、経過時間をもってresolveされる", () => {
      return timeout(100).catch((duration) => {
        expect(duration).toBe(100);
      });
    });

    // rejectマッチャーを使用し、アサーションをreturnする方法
    test("指定時間待つと、経過時間をもってresolveされる", () => {
      return expect(timeout(100)).rejects.toBe(100);
    });

    // rejectマッチャーを使用してasync関数の中でPromiseの解決を待つ方法
    test("指定時間待つと、経過時間をもってresolveされる", async () => {
      await expect(timeout(100)).rejects.toBe(100);
    });

    // try...catchを使用する方法
    test("指定時間待つと、経過時間をもってresolveされる", async () => {
      expect.assertions(1);
      try {
        await timeout(100);
      } catch (err) {
        expect(err).toBe(100);
      }
    });
  });

  // 実行されてほしいアサーションに到達しないまま、テストが終了（成功）してしまっている
  test("指定時間待つと、経過時間をもってresolveされる", async () => {
    expect.assertions(1); // アサーションが1度実行されることを期待する
    try {
      await wait(100); // アサーションが実行されないまま終了するので、テストは失敗する
    } catch (err) {
      expect(err).toBe(100);
    }
  });

  // 使用テスト関数が同期関数で.resolvesや.rejectsをマッチャーを使用して書かれる場合、アサーションをreturnする必要がある
  // 失敗を想定して書かれているがアサーションが評価されずに終了してしまっている
  test("指定時間待つと、経過時間をもってresolveされる", () => {
    expect(wait(2000)).resolves.toBe(3000);
  });
});
