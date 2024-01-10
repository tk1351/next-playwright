import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Todo } from "@/types";
import { getTodo } from "@/lib/todo";

export default function ClientTodoDetail() {
  const [todo, setTodo] = useState<Todo | null>(null);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    (async () => {
      // 型さぼり
      const response = await getTodo(id as string);
      setTodo(response);
    })();
  }, [id]);
  return (
    <div>
      {!todo && <p>Loading...</p>}
      {todo && <h1>{todo.title}</h1>}
      <Link href="/client">Go Back</Link>
    </div>
  );
}
