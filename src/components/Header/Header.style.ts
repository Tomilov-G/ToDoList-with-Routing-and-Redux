import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }

  &.active {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const HeaderButtonBlock = styled.div`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%);
`;

export const HeaderButtonSwitchTheme = styled.input`
  position: relative;
  width: 42px;
  height: 22px;
  outline: none;
  background: ${(props) => props.theme.colors.border};
  border-radius: 20px;
  transition: background 0.3s ease;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  appearance: none;
  cursor: pointer;

  &:checked {
    background: ${(props) => props.theme.colors.accent};
  }

  &::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 50%;
    transition: transform 0.3s ease;
    transform: translateX(0);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  &:checked::before {
    transform: translateX(20px);
  }
`;
