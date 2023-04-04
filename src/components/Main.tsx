import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='inicio' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            ¡Construyamos algo juntos!
          </p>
          <h1 className='py-4 text-gray-700'>
            Hola!, soy <span className='text-[#5651e5]'>Ignacio Martello</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            Desarrollador Full-Stack
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Estoy enfocado en crear aplicaciones web utilizando tecnologias Front-End y Back-End
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link href="linkedin.com/in/ignacio-josé-martello-6559a5205">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/i-martello">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </Link>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main