import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styled from "styled-components";
import styles from "@/styles/Home.module.css";
import { Todo } from "@/types";
import { getTodoList } from "@/lib/todo";

const inter = Inter({ subsets: ["latin"] });

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledCreateTodoLink = styled.span.attrs(() => ({}))`
  &:hover {
    cursor: pointer;
  }
`;

const StyledLink = styled.span.attrs(() => ({}))`
  &:hover {
    text-decoration: underline;
  }
`;

export const getServerSideProps = (async () => {
  const response = await getTodoList();
  return {
    props: { todos: response },
  };
}) satisfies GetServerSideProps<{ todos: Todo[] }>;

export default function Home({
  todos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Next-Playwright</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Stack>
          <Link href="/todo/create" passHref>
            <StyledCreateTodoLink>Create Todo</StyledCreateTodoLink>
          </Link>
          {todos && (
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <Link href={`todo/${todo.id}`} passHref>
                    <StyledLink>{todo.title}</StyledLink>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Stack>
      </main>
    </>
  );
}
