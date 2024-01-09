import { Todo } from "@/types";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

/**
 * 10個 todo リストを返す
 * @return Todo[]
 */
export const getTodoList = async (): Promise<Todo[]> => {
  return await fetch(`${BASE_URL}?_limit=10`).then(
    async (response) => (await response.json()) as Todo[],
  );
};

/**
 * id が一致する todo を返す
 * @param id todo の id
 * @return Todo
 */
export const getTodo = async (id: string): Promise<Todo> => {
  return await fetch(`${BASE_URL}/${id}`).then(
    async (response) => (await response.json()) as Todo,
  );
};
