export interface Theme {
  name: "light" | "dark";
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    textPrimary: string;
    textSecondary: string;
    accent: string;
    border: string;
    success: string;
    danger: string;
  };
}

export interface Themes {
  [key: string]: Theme;
}
