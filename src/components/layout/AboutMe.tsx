// import React from 'react'
import ProfileImage from '../../images/(2) Instagram.jpeg'
import ReactImage from '../../images/tech/react.svg'
import NodeJs from '../../images/tech/nodejs.svg'
import Express from '../../images/tech/express.svg'
import MongoDB from '../../images/tech/mongodb.svg'
import TypeScript from '../../images/tech/typescript.svg'

const AboutMe = () => {
    return (
        <div className="container mx-auto max-w-4xl px-12 max-auto py-10 ">
            <div>
                <p className="text-gray-400 text-sm">About</p>
                <h2 className="text-2xl font-bold">Me</h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">
                <img src={ProfileImage}
                    alt="ProfileImage"
                    width={100}
                    height={100}
                    className="size-60 rounded-xl"
                />

                <div>
                    <h3 className='mt-4 text-3xl font-bold'>
                        Harsh Nawle
                    </h3>
                    <p className='mt-4 text-gray-500'>
                        I’m a MERN Stack Developer passionate about building scalable
                        web applications and clean user interfaces.
                        I enjoy working with modern technologies and solving real-world
                        problems through code.
                    </p>
                    <p className='text-gray-400 mt-8 font-bold'>Skills</p>
                    <div className='flex flex-wrap gap-2'>
                        <div className='mt-3 size-6 hover:cursor-pointer'>
                            <img src={MongoDB} alt="MongoDB" />
                        </div>
                        <div className='mt-3 size-6 hover:cursor-pointer'>
                            <img src={Express} alt="Express"/>
                        </div>
                        <div className='mt-3 size-6 hover:cursor-pointer'>
                            <img src={ReactImage} alt="ReactImage" />
                        </div>
                        <div className='mt-3 size-6 hover:cursor-pointer'>
                            <img src={NodeJs} alt="NodeJs" />
                        </div>
                        <div className='mt-3 size-6 hover:cursor-pointer'>
                            <img src={TypeScript} alt="TypeScript" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe