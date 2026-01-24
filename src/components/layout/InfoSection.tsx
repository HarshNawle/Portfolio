import ReactImage from '../../images/tech/react.svg'
import NodeJs from '../../images/tech/nodejs.svg'
import Express from '../../images/tech/express.svg'
import MongoDB from '../../images/tech/mongodb.svg'
import NextJs from '../../images/tech/nextjs.svg'
import TypeScript from '../../images/tech/typescript.svg'

const InfoSection = () => {
    return (
        <div className=' mt-8 flex flex-col gap-2'>
            <h1 className='text-4xl font-bold dark:text-gray-400 text-gray-600'>
                Hi, I'm Harsh —
                <span className='text-gray-400 dark:text-gray-600'> A Full Stack web developer.</span>
            </h1>
            <div className='mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base
            md:text-lg text-neutral-500 whitespace-pre-wrap '>
                <span>
                    I enjoy crafting modern, user-focused web applications using
                    {/* React, Node.js, Express.js, and MongoDB. */}
                </span>
                <a href="https://react.dev/" className='inline-flex items-center text-sm bg-black/5
                dark:bg-white/15 border border-dashed dark:border-white/30 dark:text-white text-black
                py-1 border-balck/20 px-2 rounded-md skill-inner-shadow self-end  '>
                    <img src={ReactImage} className="size-4" />
                    <p className='ml-1 text-sm font-bold ' >React</p>

                </a>
                <span className='whitespace-pre-wrap'>,</span>
                <a href="https://nodejs.org/" className='inline-flex items-center text-sm bg-black/5
                dark:bg-white/15 border border-dashed dark:border-white/30 dark:text-white text-black
                py-1 border-balck/20 px-2 rounded-md skill-inner-shadow self-end  '>
                    <img src={NodeJs} className="size-4" />
                    <p className='ml-1 text-sm font-bold ' >Node.js</p>

                </a>
                <span className='whitespace-pre-wrap'>,</span>
                <a href="https://expressjs.com/" className='inline-flex items-center text-sm bg-black/5
                dark:bg-white/15 border border-dashed dark:border-white/30 dark:text-white text-black
                py-1 border-balck/20 px-2 rounded-md skill-inner-shadow self-end  '>
                    <img src={Express} className="size-4" />
                    <p className='ml-1 text-sm font-bold ' >Express</p>

                </a>
                <span className='whitespace-pre-wrap'>&</span>
                <a href="https://www.mongodb.com/" className='inline-flex items-center text-sm bg-black/5
                dark:bg-white/15 border border-dashed dark:border-white/30 dark:text-white text-black
                py-1 border-balck/20 px-2 rounded-md skill-inner-shadow self-end  '>
                    <img src={MongoDB} className="size-4" />
                    <p className='ml-1 text-sm font-bold ' >MongoDB</p>

                </a>
                <span className='whitespace-pre-wrap'>and I’m expanding my skill set with</span>
                <a href="https://nextjs.org/" className='inline-flex items-center text-sm bg-black/5
                dark:bg-white/15 border border-dashed dark:border-white/30 dark:text-white text-black
                py-1 border-balck/20 px-2 rounded-md skill-inner-shadow self-end  '>
                    <img src={NextJs} className="size-4" />
                    <p className='ml-1 text-sm font-bold ' >Next.js</p>

                </a>
                <span className='whitespace-pre-wrap'>and</span>
                <a href="https://www.typescriptlang.org/" className='inline-flex items-center text-sm bg-black/5
                dark:bg-white/15 border border-dashed dark:border-white/30 dark:text-white text-black
                py-1 border-balck/20 px-2 rounded-md skill-inner-shadow self-end  '>
                    <img src={TypeScript} className="size-4" />
                    <p className='ml-1 text-sm font-bold ' >TypeScript</p>

                </a>
                <span className='whitespace-pre-wrap'>.</span>
            </div>
        </div>
    )
}

export default InfoSection