import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div id="proyectos" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <p className="text-xl tracking-widest uppercase text-[#0A66C2]">
          Proyectos
        </p>
        <h2 className="py-4">¡Todos mis Trabajos! :)</h2>
        <label className="flex font-sans text-4xl m-10 font-semibold leading-tight tracking-widest text-[#0A66C2] antialiased ">Proyectos Personales</label>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tienda de Autos"
            backgroundImg="/carstore.PNG"
            projectUrl="/carstore"
            tech="NextJS"
          />
          <ProjectItem
            title="DivertyWeb!"
            backgroundImg="/divertyweb.gif"
            projectUrl="/divertyweb"
            tech="React JS"
          />
          <ProjectItem
            title="ProyectoChat!"
            backgroundImg="/ChatProyecto.PNG"
            projectUrl="/proyectochat"
            tech="React JS"
          />
          <ProjectItem
            title="Album"
            backgroundImg="/AlbumWeb.PNG"
            projectUrl="/albumweb"
            tech="NodeJS/Express"
          />
        </div>
        <label className="flex font-sans text-4xl m-10 font-semibold leading-tight tracking-widest text-[#0A66C2] antialiased ">Proyectos Laborales</label>
        <div className="grid md:grid-cols-2 gap-8">
        <ProjectItem
          title="Control Cyber"
          backgroundImg="/CyberProgramaVideo.gif"
          projectUrl="/cybercontrol"
          tech="NextJS/TypeScript/MongoDB"
        />
        <ProjectItem
          title="Buscador CopyArt"
          backgroundImg="/buscadorCopyART.gif"
          projectUrl="/buscadorcopyart"
          tech="NodeJS/Express/MongoDB/React"
        />
        </div>
      </div>
    </div>
  );
};

export default Projects;
