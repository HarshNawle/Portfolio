import Project01 from "./ProjectComponents/Project01"
import { motion } from "motion/react"


const ProjectSection = () => {
    return (
        // min-h-screen remember to add in  below div
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
                <p className="text-gray-400 text-sm">Featured</p>
                <h2 className="text-2xl font-bold">Projects</h2>
            </motion.div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
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

export default ProjectSection