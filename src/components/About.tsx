import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="sobremi" className="w-full md:h-[95vh] p-2 flex items-center py-4">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-x1 tracking-widest text-[#0A66C2]">
            Sobre Mi
          </p>
          <h2 className="py-4">¿Quien soy yo?</h2>
          <p className="py-4 text-gray-600">
            Yo me especializo en el análisis de datos y una gran ambición y motivación por la programación, 
            me destaco desarrollador experto en Python, con habilidades tanto en SQL,
            trabajando con bases de datos No-SQL y SQL como MongoDB y MySQL.
            tengo la suerte que siempre supe estudiar lo que me gusta y tengo siempre
            entusiasmo para colaborar, programar y trabajar en equipo! :)
          </p>
          <p className="py-2 text-gray-600">
            Desde mi adolescencia, me fascina explorar, analizar equipos y buscar vulnerabilidades,
            lo que me llevó a especializarme en este campo, tanto durante mis estudios secundarios como en la Universidad Tecnologica Nacional (UTN).
            A lo largo de mi trayectoria, he desarrollado competencias en el manejo de tecnologías de desarrollo en la Nube y 
            en la implementación de soluciones integrales para el análisis y visualización de datos,
            demostrando siempre un entusiasmo contagioso por colaborar y trabajar en equipo.
          </p>
          <Link href="/#proyectos">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              ¡Dale un vistazo a mis ultimos proyectos!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/About.jpg"
            className="rounded-xl"
            alt="/"
            width={500}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
