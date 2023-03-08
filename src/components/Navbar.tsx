import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [lists, setLists] = useState<string[]>([]);
  const [nav, setNav] = useState(false);
  useEffect(() => {
    setLists([
      "Inicio",
      "Sobre Mi",
      "Habilidades",
      "Proyectos",
      "Resumen",
      "Contacto",
    ]);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Ignacio Martello"
            width="90"
            height="90"
            className="cursor-pointer"
          ></Image>
        </Link>
        <div>
          <ul className="hidden md:flex">
            {lists.map((list) => {
              return (
                <li
                  key={list}
                  className="ml-10 text-sm uppercase hover:border-b"
                >
                  <Link href={`/#${list === "Sobre Mi" ? "SobreMi" : list}`}>{list}</Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <GiHamburgerMenu size="22" />
          </div>
        </div>
      </div>

      {/* Menu para Móviles */}

      <div
        className={
          nav ? "md:hidden " : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  alt="Ignacio Martello"
                  width="80"
                  height="80"
                ></Image>
              </Link>
              <div className="p-3 cursor-pointer" onClick={handleNav}>
                <AiOutlineArrowLeft size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                ¡Construyamos algo juntos!
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {lists.map((list) => {
                return (
                  <Link key={list} href={`/#${list}`}>
                    <li className="py-4 text-sm">{list}</li>
                  </Link>
                );
              })}
              ;
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Contactos
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
                <a>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
