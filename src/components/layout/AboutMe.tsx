// import React from 'react'
import ProfileImage from '../../images/(2) Instagram.jpeg'
import ReactImage from '../../images/tech/react.svg'
import NodeJs from '../../images/tech/nodejs.svg'
import Express from '../../images/tech/express.svg'
import MongoDB from '../../images/tech/mongodb.svg'
import TypeScript from '../../images/tech/typescript.svg'
import { motion } from "motion/react"

const AboutMe = () => {
    return (
        <motion.div 
            className="container mx-auto max-w-4xl px-12 max-auto py-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                <p className="text-gray-400 text-sm">About</p>
                <h2 className="text-2xl font-bold">Me</h2>
            </motion.div>

            <motion.div 
                className="mt-8 flex flex-col gap-4 md:flex-row"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <motion.img 
                    src={ProfileImage}
                    alt="ProfileImage"
                    width={100}
                    height={100}
                    className="size-60 rounded-xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                />

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    <h3 className='mt-4 text-3xl font-bold'>
                        Harsh Nawle
                    </h3>
                    <p className='mt-4 text-gray-500'>
                        I'm a MERN Stack Developer passionate about building scalable
                        web applications and clean user interfaces.
                        I enjoy working with modern technologies and solving real-world
                        problems through code.
                    </p>
                    <p className='text-gray-400 mt-8 font-bold'>Skills</p>
                    <motion.div 
                        className='flex flex-wrap gap-2'
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        <motion.div 
                            className='mt-3 size-6 hover:cursor-pointer'
                            variants={{
                                hidden: { scale: 0, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img src={MongoDB} alt="MongoDB" />
                        </motion.div>
                        <motion.div 
                            className='mt-3 size-6 hover:cursor-pointer'
                            variants={{
                                hidden: { scale: 0, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img src={Express} alt="Express"/>
                        </motion.div>
                        <motion.div 
                            className='mt-3 size-6 hover:cursor-pointer'
                            variants={{
                                hidden: { scale: 0, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img src={ReactImage} alt="ReactImage" />
                        </motion.div>
                        <motion.div 
                            className='mt-3 size-6 hover:cursor-pointer'
                            variants={{
                                hidden: { scale: 0, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img src={NodeJs} alt="NodeJs" />
                        </motion.div>
                        <motion.div 
                            className='mt-3 size-6 hover:cursor-pointer'
                            variants={{
                                hidden: { scale: 0, opacity: 0 },
                                visible: { scale: 1, opacity: 1 }
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <img src={TypeScript} alt="TypeScript" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default AboutMe