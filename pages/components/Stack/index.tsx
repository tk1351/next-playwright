import { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

type Props = ComponentPropsWithoutRef<"div">;

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Stack: FC<Props> = ({ children }) => {
  return <StyledStack>{children}</StyledStack>;
};
