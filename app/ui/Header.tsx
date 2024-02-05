import Container from "./Container";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchIcon from "./SearchIcon";
import LangSelect from "./LangSelect";

const menu = [
   {
      name: "mahalliy (o'zb)",
   },
   {
      name: "markaziy osiyo",
   },
   {
      name: "dunyo",
   },
   {
      name: "pul",
   },
   {
      name: "madaniyat",
   },
   {
      name: "layfstayl",
   },
   {
      name: "sport",
   },
   {
      name: "multimedia",
   },
];

export default function Header() {
   return (
      <header>
         <section>
            <Container>
               <div className="bg-zinc-200 h-40 mt-2 mb-1"></div>
            </Container>
         </section>
         <section>
            <Container className="flex bg-transparent">
               <div className="w-full bg-gray-800 flex items-center text-white px-2 gap-5">
                  <div className="py-2">
                     <Image
                        src={Logo}
                        alt="logo"
                        width={236}
                        className="w-[8rem]"
                     />
                  </div>
                  <ul className="flex">
                     {menu &&
                        menu.map((item) => (
                           <li
                              key={item.name}
                              className={
                                 "uppercase p-2 cursor-pointer hover:bg-gray-600"
                              }
                           >
                              {item.name}
                           </li>
                        ))}
                  </ul>
                  <div className="flex items-center gap-3">
                     <ThemeSwitcher />
                     <SearchIcon
                        color="#fff"
                        className="cursor-pointer"
                     />
                     <LangSelect />
                  </div>
               </div>
            </Container>
         </section>
      </header>
   );
}
