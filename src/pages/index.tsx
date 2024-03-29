import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
// import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portfolio!</title>
        <meta name="description" content="Mi CV y mis proyectos personales y laborales :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png"></link>
      </Head>
      <div>
        <Main />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  )
}
