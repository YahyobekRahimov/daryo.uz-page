import { useState } from "react";

export const useDark = (): {
   isDark: "light" | "dark" | "system";
   setDark: any;
} => {
   const [dark, setDark]: [
      dark: "system" | "light" | "dark",
      setDark: any
   ] = useState("system");
   if (dark === "system") {
      if (
         localStorage.theme === "dark" ||
         (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   } else if (dark === "dark") {
      document.documentElement.classList.add("dark");
   } else if (dark === "light") {
      document.documentElement.classList.remove("dark");
   }
   localStorage.setItem("theme", dark);
   return { isDark: dark, setDark };
};
