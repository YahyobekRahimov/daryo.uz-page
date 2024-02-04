import Image from "next/image";
import { ReactNode } from "react";
import ThemeSwitcher from "./ui/ThemeSwitcher";

export default function Home(): ReactNode {
   return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
         <ThemeSwitcher />
      </div>
   );
}
