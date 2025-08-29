import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { GlobalStyle } from "../styles/GlobalStyle";

export const Layout = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);
  if (!theme) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
