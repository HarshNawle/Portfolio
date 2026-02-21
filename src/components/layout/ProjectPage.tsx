import Project01 from "../features/ProjectComponents/Project01.tsx"
import { Separator } from "../ui/separator.tsx"
import { motion } from "motion/react"



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
                    <Project01/>
                    <Project01/>
                    <Project01/>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default ProjectPage