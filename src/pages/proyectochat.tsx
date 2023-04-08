import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const proyectochat = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/ChatProyecto.PNG"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ProyectoChat</h2>
          <h3>NextJS / Typescript / MongoDB / Tailwind / NodeJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Proyecto</p>
          <h2>Descripción</h2>
          <p>
            La página intenta recrear un chat de Whatsapp, el usuario tiene la
            obligación de registrarse e iniciar sesión para poder escribir
            mensajes. El algoritmo relaciona el mensaje con el usuario del
            cliente almacenado en la cookie con Json Web Token (JWT) y
            utilizando Socket.io crea un chat a tiempo real donde 2 o más
            personas pueden dialogar en un chat grupal. Cuando envías tu mensaje
            te verás a vos mismo con el destinatario de “Me”, pero vos verás a
            los demás usuarios y ellos te verán a vos por tu nombre de usuario,
            con el cual identificarán quien envió el mensaje.
          </p>
          <a
            href="https://github.com/i-martello/Proyecto-Chat"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Código</button>
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <button className="px-8 py-2 mt-4">Ir a la página!</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> NextJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Json Web Token
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Socket.io
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Volver</p>
        </Link>
      </div>
    </div>
  );
};

export default proyectochat;
