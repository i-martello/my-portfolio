import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const albumweb = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/AlbumWeb.PNG"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">AlbumWeb!</h2>
          <h3>React / Javascript / MongoDB / Tailwind / NodeJS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Proyecto</p>
          <h2>Descripción</h2>
          <p>
            El proyecto tiene similitudes con la red social DivertyWeb (Que
            tambien podras ver dando click <Link className="text-blue-500 underline font-bold" href="/divertyweb">acá</Link>)
            pero esta web tiene la particularidad que podes enviar tu imagen y
            esta se vera en la pagina principal con la resolución de la imagen
            sin deformar ni modificar. En la parte derecha verás las
            estadísticas generales donde visualizamos la cantidad de
            publicaciones, comentarios y likes totales. Y en el sector inferior
            a la derecha podrás ver, en orden, las publicaciones con mayor
            cantidad de likes. El proyecto este tiene una gran particularidad a
            diferencia de DivertyWeb, AlbumWeb esta creado únicamente utilizando
            tecnologías backend como NodeJS, Express, MongoDB y motores de
            plantilla como Handlebars para elaborar el html y el frontend.
          </p>
          <a
            href="https://github.com/i-martello/Project-Personal"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Código</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">

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
                <RiRadioButtonFill className="pr-1" /> Handlebars
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap 5
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

export default albumweb;
