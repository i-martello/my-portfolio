import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const excelprecios = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/divertyweb.gif"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Filtración productos de archivo Excel</h2>
          <h3>NodeJS / Express / Handlebars </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Proyecto</p>
          <h2>Descripción</h2>
          <p>
            El proyecto consiste en una pagina web que filtra los productos son
            su ID, este trabajo es especifico para el negocio que me lo pidió,
            ellos ingresan el archivo con todos los precios del mayorista, y con
            solo utilizar los ID de los productos del minorista, este filtra
            todos los productos que quiera del mayorista
            <strong> Proyecto laboral hecho para CopyArt!</strong> 
          </p>
          <a
            href="https://github.com/i-martello/ActualizadorPreciosExcel"
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
                <RiRadioButtonFill className="pr-1" /> NodeJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Handlebars
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Ajax
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

export default excelprecios;
