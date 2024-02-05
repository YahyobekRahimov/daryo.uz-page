"use client";
import { useState } from "react";
import MySelect from "./MySelect";

const langs = [
   {
      name: "O'zbek",
      value: "uz",
   },
   {
      name: "Русскый",
      value: "ru",
   },
   {
      name: "English",
      value: "en",
   },
];

export default function LangSelect() {
   const [lang, setLang] = useState("uz");
   const handleChange = (e: any) => {
      setLang(e.target.value);
   };
   return (
      <MySelect
         menuItems={langs}
         value={lang}
         onChange={handleChange}
      />
   );
}
