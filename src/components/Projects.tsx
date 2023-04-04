import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from '../components/ProjectItem'

const Projects = () => {
  return (
    <div id='proyectos' className='w-full'>
      <div className='max-w-[1240px] md:h-[100vh] mx-auto px-2 py-20'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Proyectos
        </p>
        <h2 className='py-4'>¡Todos mis Trabajos! :)</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Tienda de Autos'
            backgroundImg='/carstore.PNG'
            projectUrl='/carstore'
            tech='NextJS'
          />
          <ProjectItem
            title='DivertyWeb!'
            backgroundImg='/divertyweb.gif'
            projectUrl='/divertyweb'
            tech='React JS'

          />
          <ProjectItem
            title='ProyectoChat!'
            backgroundImg='/ChatProyecto.PNG'
            projectUrl='/proyectochat'
            tech='React JS'

          />
          <ProjectItem
            title='Album'
            backgroundImg='/AlbumWeb.PNG'
            projectUrl='/albumweb'
            tech='NodeJS/Express'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;