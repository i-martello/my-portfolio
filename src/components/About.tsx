import React from "react";
import Image from "next/image";
import Link from 'next/link'

const About = () => {
  return (
    <div id="sobremi" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-x1 tracking-widest text-[#5651e5]">
            Sobre Mi
          </p>
          <h2 className="py-4">¿Quien soy yo?</h2>
          <p className="py-4 text-gray-600">
            Yo me especializo en el Desarrollo de Aplicaciones Web Full-Stack,
            Tengo una gran ambicion y motivación por la programación, tengo la
            suerte que siempre supe estudiar lo que me gusta y tengo siempre
            entusiasmo pero colaborar, programar y trabajar en equipo! :)
          </p>
          <p className="py-2 text-gray-600">
            Desde desde que inicié mi adolescencia me encanta programar, decidi
            estudiarlo en la secundaria y actualmente lo estudio en la
            Univesidad (UTN). A medida que fui aprendiendo, adquirí conocimiento
            para el desarrollo con tecnologias Back-End y Front-End, como
            tambien manejar Bases de Datos No-SQL y tecnologias de desarrollo en
            la Nube.
          </p>
          <Link href='/#proyectos'>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              ¡Dale un vistazo a mis ultimos proyectos!
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src='/About.jpg' className="rounded-xl" alt='/' width={500} height={400} /> 
        </div>
      </div>
    </div>
  );
};

export default About;
