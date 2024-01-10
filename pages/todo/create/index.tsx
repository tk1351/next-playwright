import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { createPortal } from "react-dom";
import { Stack } from "@/pages/components/Stack";
import { createTodo } from "@/lib/todo";
import { useFormValidation } from "@/hooks/useFormValidation";
import { Modal } from "@/pages/components/Modal";

export default function TodoCreate() {
  const [showModal, setShowModal] = useState(false);

  // title, completed のフォームが空文字でない場合にのみ submit 可能
  const {
    titleValue,
    completedValue,
    setTitleValue,
    setCompletedValue,
    isDisabled,
  } = useFormValidation();

  const handleChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitleValue(event.target.value);
  };

  const handleChangeSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setCompletedValue(event.target.value);
  };

  const stringToBoolean = (value: string) => {
    return value === "true";
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (isDisabled) return;
    await createTodo(titleValue, stringToBoolean(completedValue));
    setShowModal(true);
  };

  return (
    <Stack>
      <h1>Todo Create</h1>
      <form onSubmit={handleSubmit}>
        <label>
          title
          <input type="text" placeholder="title" onChange={handleChangeInput} />
        </label>
        <label>
          completed
          <select onChange={handleChangeSelect}>
            <option value="">---</option>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </label>
        <button disabled={isDisabled}>Submit</button>
      </form>
      {showModal && createPortal(<Modal open={showModal} />, document.body)}
    </Stack>
  );
}
