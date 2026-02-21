import GetInTouch from "../layout/GetInTouch"
import ImageLayout from "../layout/ImageLayout"
import InfoSection from "../layout/InfoSection"
import SocialMedia from "../layout/SocialMedia"
import SpotifyPlugin from "../layout/SpotifyPlugin"
import { motion } from "motion/react"


const HeroSection = () => {
  return (
    <motion.div 
      className=" container mx-auto max-w-4xl px-6 h-3xl"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <motion.div 
          className="container mx-auto max-w-5xl px-6 max-auto py-10 md:py-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
            <ImageLayout/>
            <InfoSection/>
            <GetInTouch/>
            <SocialMedia/>
            <SpotifyPlugin/>
        </motion.div>
    </motion.div>
  )
}

export default HeroSection