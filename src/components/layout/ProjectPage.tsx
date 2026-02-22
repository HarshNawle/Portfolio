import Project01 from "../features/ProjectComponents/Project01.tsx"
import { Separator } from "../ui/separator.tsx"
import { motion } from "motion/react"
import react from '../../images/tech/react.svg'
import mongodb from '../../images/tech/mongodb.svg'
import nodeJS from '../../images/tech/nodejs.svg'
import socketIO from '../../images/tech/socket-io-svgrepo-com.svg'
import express from '../../images/tech/express.svg'
import Project1 from '../../images/projects/huddle-chat-app.png'



const ProjectPage = () => {
    return (
        // min-h-screen remember to add in  below div
        <motion.div 
            className="container mx-auto max-w-4xl px-12 max-auto py-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div 
                className="flex items-center justify-center flex-col"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                <motion.p 
                    className="text-5xl"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                >
                    Projects
                </motion.p>
                <motion.h2 
                    className="text-gray-400 text-xl my-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                    I build projects across diverse technologies and domains.
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                    <Separator/>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            >
                <motion.div 
                    className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                >
                    {/* Card section */}
                    <Project01
                        title="Huddle"
                        description="A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools"
                        image={Project1}
                        liveUrl="https://your-live-link.com"
                        githubUrl="https://github.com/your-repo"
                        status="operational"
                        technologies={[
                            { name: "React", icon: react },
                            { name: "MongoDB", icon: mongodb },
                            { name: "Node.js", icon: nodeJS },
                            { name: "Socket.IO", icon: socketIO },
                        ]}
                    />
                    <Project01
                        title="Planora"
                        description="Planora is a smart project management platform that helps teams collaborate, organize tasks, and complete projects efficiently in one seamless workspace."
                        image={Project1}
                        liveUrl="https://your-live-link.com"
                        githubUrl="https://github.com/your-repo"
                        status="building"
                        technologies={[
                            { name: "React", icon: react },
                            { name: "Express", icon: express },
                            { name: "MongoDB", icon: mongodb },
                            { name: "Node.js", icon: nodeJS }
                        ]}
                    />
                    
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default ProjectPage