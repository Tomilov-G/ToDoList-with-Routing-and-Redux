import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  transition: background-color .2s;
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &.active {
    color: #ffffff33;
  }
`;

export const HeaderButtonBlock = styled.div`
  position: absolute;
  right: 1%;
  top: 50%;
  transform: translateY(-50%)
`;

export const HeaderButtonSwitchTheme = styled.input`
position: relative;
  width: 40px;
  height: 20px; 
  outline: none;
  background: #c6c6c6; 
  border-radius: 20px;
  transition: 0.5s;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  appearance: none;
  cursor: pointer;

  &:checked {
    background: #00cc00; 
  }

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    transition: 0.5s;
    transform: translateX(0);
  }

  &:checked::before {
    transform: translateX(20px);
  }
`;


