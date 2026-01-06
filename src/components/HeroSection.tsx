import GetInTouch from "@/layout/GetInTouch"
import ImageLayout from "@/layout/ImageLayout"
import InfoSection from "@/layout/InfoSection"
import SocialMedia from "@/layout/SocialMedia"
import SpotifyPlugin from "@/layout/SpotifyPlugin"


const HeroSection = () => {
  return (
    <div className=" container mx-auto max-w-3xl px-6 min-h-screen  ">
        <div className="container mx-auto max-w-3xl px-6 max-auto min-h-screen py-16">
            <ImageLayout/>
            <InfoSection/>
            <GetInTouch/>
            <SocialMedia/>
            <SpotifyPlugin/>
        </div>
    </div>
  )
}

export default HeroSection