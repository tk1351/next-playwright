import { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Stack } from "@/pages/components/Stack";
import { Todo } from "@/types";
import { getTodoList } from "@/lib/todo";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const StyledLink = styled.span.attrs(() => ({}))`
  &:hover {
    text-decoration: underline;
  }
`;

export default function ClientHome() {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getTodoList();
      setTodos(response);
    })();
  }, []);
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Stack>
        {!todos && <p>Loading...</p>}
        {todos && (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <Link href={`/client/todo/${todo.id}`} passHref>
                  <StyledLink>{todo.title}</StyledLink>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Stack>
    </main>
  );
}
