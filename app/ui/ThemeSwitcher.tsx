"use client";

import { useDark } from "../hooks/useDark";

export default function ThemeSwitcher() {
   const { isDark, setDark } = useDark();
   const handleChange = (e: any): void => {
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
