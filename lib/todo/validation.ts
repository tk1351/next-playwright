/**
 * 入力された文字が空文字の場合にエラーメッセージを返す
 * @param value
 */
export const checkRequired = (value: string) => {
  return value === "" ? "入力してください" : "";
};
