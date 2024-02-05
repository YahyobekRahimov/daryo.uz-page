"use client";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
   const [dark, setDark]: [
      dark: "system" | "light" | "dark" | string,
      setDark: any
   ] = useState(localStorage.getItem("theme") || "system");
   useEffect(() => {
      if (typeof window !== "undefined") {
         if (dark === "system") {
            if (
               window.matchMedia("(prefers-color-scheme: dark)")
                  .matches
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
   }, [dark]);
   const handleChange = (e: any): void => {
      //@ts-ignore
      setDark(e.target.value);
   };
   return (
      <div className="selectWrapper">
         <Select
            labelId="select"
            id="select"
            value={dark}
            label="theme"
            onChange={handleChange}
            sx={{
               color: "white",
               fill: "white",
               "& .mui-1v3d52w-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
                  {
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                  },
               "& .MuiSelect-select": {
                  height: "0.5rem",
               },
               "& .mui-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
               },
               "& .mui-1d3z3hw-MuiOutlinedInput-notchedOutline:hover":
                  {
                     borderColor: "#fff",
                  },
               "& .mui-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
                  fill: "white",
               },
            }}
            size="small"
         >
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="light">Light</MenuItem>
         </Select>
      </div>
   );
}
