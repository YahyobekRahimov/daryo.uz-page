"use client";

import { useState } from "react";

export default function ThemeSwitcher() {
   const [dark, setDark]: [
      dark: "system" | "light" | "dark",
      setDark: any
   ] = useState("system");
   if (typeof window !== "undefined") {
      if (dark === "system") {
         if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
               window.matchMedia("(prefers-color-scheme: dark)")
                  .matches)
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
   }
   const handleChange = (e: any): void => {
      //@ts-ignore
      setDark(e.target.value);
   };
   return (
      <div>
         <select
            className="text-3xl bg-blue-500"
            onChange={handleChange}
         >
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
         </select>
      </div>
   );
}
