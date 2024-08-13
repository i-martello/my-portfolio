import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="habilidades" className="w-full  py-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-4xl tracking-widest uppercase text-[#0A66C2]">
          Habilidades
        </p>
        <div className="mb-12">
          <div className="grid grid-cols-2 gap-10">
            <div className="gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/python.png"
                      alt="Python"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Python</h3>
                  </div>
                </div>
                <div className="w-[90%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    9/10
                  </div>
                </div>
              </div>
            </div>
            <div className=" gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image src="/c.png" alt="c" width={85} height={70} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>C</h3>
                  </div>
                </div>
                <div className="w-[75%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    6/10
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image src="/cpp.png" alt="cpp" width={64} height={64} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>C++</h3>
                  </div>
                </div>
                <div className="w-[80%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    7/10
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image src="/net.png" alt="net" width={64} height={64} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>.NET</h3>
                  </div>
                </div>
                <div className="w-[70%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    7/10
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/mysql.png"
                      alt="MySql"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>MySql</h3>
                  </div>
                </div>
                <div className="w-[80%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    8/10
                  </div>
                </div>
              </div>
            </div>
            <div className=" gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/mongodb.png"
                      alt="MongoDB"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>MongoDB</h3>
                  </div>
                </div>
                <div className="w-[80%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    8/10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xl tracking-widest uppercase text-[#0A66C2]">
          Desarrollo Web
        </p>
        <div className="mb-12">
          <div className="grid grid-cols-2 gap-10">
            <div className="gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/html.png"
                      alt="HTML 5"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>HTML 5</h3>
                  </div>
                </div>
                <div className="w-[90%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    9/10
                  </div>
                </div>
              </div>
            </div>
            <div className=" gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image src="/css.png" alt="CSS" width={64} height={64} />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>CSS</h3>
                  </div>
                </div>
                <div className="w-[75%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    7.5/10
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/js.png"
                      alt="JavaScript"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>JavaScript</h3>
                  </div>
                </div>
                <div className="w-[80%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    8/10
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/typescript.png"
                      alt="JavaScript"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>TypeScript</h3>
                  </div>
                </div>
                <div className="w-[70%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    7/10
                  </div>
                </div>
              </div>
            </div>
            <div className=" gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/react.png"
                      alt="React"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>React</h3>
                  </div>
                </div>
                <div className="w-[90%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    9/10
                  </div>
                </div>
              </div>
            </div>
            <div className=" gap-8">
              <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                <div className="grid grid-cols-2 gap-4 h-[64px] justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src="/nodejs.png"
                      alt="NodeJS"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>Node JS</h3>
                  </div>
                </div>
                <div className="w-[90%] mt-5 bg-green-400 dark:bg-neutral-600 rounded-lg">
                  <div className="bg-primary text-white p-0.5 text-center text-xs font-medium leading-none text-primary-100">
                    9/10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
