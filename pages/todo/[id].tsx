import Link from "next/link";
import { Todo } from "@/types";
import { getTodo } from "@/lib/todo";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps = (async (context) => {
  const { id } = context.query;
  // 型さぼり
  const response = await getTodo(id as string);
  return {
    props: { todo: response },
  };
}) satisfies GetServerSideProps<{ todo: Todo }>;

export default function TodoDetail({
  todo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {!todo && <p>Loading...</p>}
      {todo && <h1>{todo.title}</h1>}
      <Link href="/">Go Back</Link>
    </div>
  );
}
