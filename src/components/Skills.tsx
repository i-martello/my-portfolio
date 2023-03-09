import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="habilidades" className='w-full lg:h-screen p-2' >
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Habilidades
        </p>
        <h2 className='py-4'>
          ¿Que puedo hacer?
        </h2>
        <div className='grid grid-cols-2 gap-10'>
        <div className='gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/html.png' alt="HTML 5" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML 5</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=' gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/css.png' alt="CSS" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/js.png' alt="JavaScript" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/tailwind.png' alt="Tailwind" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=' gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/mongodb.png' alt="MongoDB" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=' gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/nextjs.png' alt="NextJS" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=' gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/react.png' alt="React" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=' gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 h-[64px] justify-center items-center'>
              <div className='m-auto'>
                <Image src='/nodejs.png' alt="NodeJS" width={64} height={64} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node JS</h3>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills