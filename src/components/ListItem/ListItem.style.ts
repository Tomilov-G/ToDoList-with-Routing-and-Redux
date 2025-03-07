import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItemLink = styled(Link)<{ $done: boolean }>`
  text-decoration: none;
  padding: 10px;
  color: ${(props) => (props.$done ? "green" : "red")};
`;
