import { Theme } from "../models/theme";

export const themes: Record<string, Theme> = {
  light: {
    name: "light",
    colors: {
      backgroundPrimary: "#ffffff",
      backgroundSecondary: "#f5f5f5",
      textPrimary: "#222222",
      textSecondary: "#555555",
      accent: "#007BFF",
      border: "#cccccc",
      success: "#28a745",
      danger: "#dc3545",
    },
  },
  dark: {
    name: "dark",
    colors: {
      backgroundPrimary: "#121212",
      backgroundSecondary: "#1e1e1e",
      textPrimary: "#f5f5f5",
      textSecondary: "#bbbbbb",
      accent: "#4dabf7",
      border: "#333333",
      success: "#4caf50",
      danger: "#ff6b6b",
    },
  },
};
