import styled from "styled-components";

export const ToDoListContainer = styled.div`
  width: 100%;
  padding: 15px;
`;

interface ToDoListBlockProps {
  status?: "failed" | "completed";
}

export const ToDoListBlock = styled.ul<ToDoListBlockProps>`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0;
  list-style: none;
  min-height: 140px;

  ${({ status, theme }) =>
    status === "failed" &&
    `
      &:empty:after {
        content: "Нет задач на выполнение";
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: ${theme.colors.textSecondary};
      }
    `}

  ${({ status, theme }) =>
    status === "completed" &&
    `
      padding: 60px 0 0 0;
      &:empty:after {
        content: "Нет выполненных задач";
        width: 100%;
        display: block;
        text-align: center;
        font-size: 12px;
        color: ${theme.colors.textSecondary};
      }
    `}
`;
