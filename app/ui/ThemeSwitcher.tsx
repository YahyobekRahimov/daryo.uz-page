"use client";

import { useEffect, useState } from "react";
import { useDark } from "../hooks/useDark";

export default function ThemeSwitcher() {
   const { isDark, setDark }: any = useDark();

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
