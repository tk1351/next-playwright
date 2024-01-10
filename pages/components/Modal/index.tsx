import { FC } from "react";
import Link from "next/link";

type Props = {
  open: boolean;
};

export const Modal: FC<Props> = (props) => {
  const { open } = props;
  return (
    <dialog open={open}>
      <Link href="/">Home</Link>
    </dialog>
  );
};
