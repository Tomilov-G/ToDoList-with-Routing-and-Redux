import { useDispatch } from "react-redux";
import {
  HeaderButtonBlock,
  HeaderButtonSwitchTheme,
  HeaderContainer,
  HeaderLink,
  HeaderSection,
} from "./Header.style";
import { toggleThemeAction } from "../../feature/themeList";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderLink to="/">ToDo</HeaderLink>
        <HeaderLink to="/list">List</HeaderLink>
        <HeaderButtonBlock>
          <HeaderButtonSwitchTheme
            type="checkbox"
            onClick={() => dispatch(toggleThemeAction())}
          />
        </HeaderButtonBlock>
      </HeaderContainer>
    </HeaderSection>
  );
};
