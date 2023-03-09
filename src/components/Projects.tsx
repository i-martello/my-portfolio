import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from '../components/ProjectItem'

const Projects = () => {
  return (
    <div id='proyectos' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Proyectos
        </p>
        <h2 className='py-4'>¡Todos mis Trabajos! :)</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Pokevirgo'
            backgroundImg='/pagina.jpg'
            projectUrl='/pop'
            tech='React JS'
          />
          <ProjectItem
            title='La bruna (no existe)'
            backgroundImg='/pagina.jpg'
            projectUrl='/pop'
            tech='React JS'

          />
          <ProjectItem
            title='pagina para que valto la ponga'
            backgroundImg='/pagina.jpg'
            projectUrl='/pop'
            tech='React JS'

          />
          <ProjectItem
            title='pagina q muestra la historia de racing (1500 A.C) para el bollo'
            backgroundImg='/pop'
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;