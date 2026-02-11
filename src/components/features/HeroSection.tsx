import GetInTouch from "../layout/GetInTouch"
import ImageLayout from "../layout/ImageLayout"
import InfoSection from "../layout/InfoSection"
import SocialMedia from "../layout/SocialMedia"
import SpotifyPlugin from "../layout/SpotifyPlugin"


const HeroSection = () => {
  return (
    <div className=" container mx-auto max-w-4xl px-6 h-3xl">
        <div className="container mx-auto max-w-5xl px-6 max-auto py-10 md:py-16">
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