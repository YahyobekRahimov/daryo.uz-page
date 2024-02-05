import React, { ReactNode } from "react";

export default function Container({
   children,
   className,
}: {
   children: ReactNode;
   className?: string;
}) {
   return (
      <div
         className={`mx-auto px-[5rem] w-full max-w-[1440px] ${className}`}
      >
         {children}
      </div>
   );
}
