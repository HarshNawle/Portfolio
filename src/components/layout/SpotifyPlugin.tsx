import { useState, useRef } from "react"
import SpotifyImage from '../../images/logos/spotify.svg'
import AlbumImage from '../../images/AlbumImage.jpg'
import SongFile from '../../music/Kendrick_Lamar_-_SZA_-_All_The_Stars_-_Kendrick_Lamar_-_SZA_-_All_The_Stars_(mp3.pm).mp3'   // <-- add your music file
import { Button } from '../ui/button'
import { Play, Pause } from 'lucide-react'
import ControllerSection from '../features/ControllerSection'

const SpotifyPlugin = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // ✅ Manual Song Data
    const songData = {
        song: "All The Stars",
        artist: "Kendrick Lamar, SZA",
        cover: AlbumImage,
        audio: SongFile,
        spotifyUrl: "https://open.spotify.com/track/3GCdLUSnKSMJhs4Tj6CV3s"
    }

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }

        setIsPlaying(!isPlaying)
    }

    return (
        <div className='mt-6'>
            <div className='flex flex-col gap-4 text-sm p-3 rounded-lg bg-muted/50 border border-border/50 shadow-inner'>

                <div className='flex items-center gap-3'>

                    {/* Album */}
                    <img src={songData.cover}
                        className="size-13 rounded-md shadow-inner ring-1 ring-black/50 dark:ring-white/50" />

                    {/* Info */}
                    <div className='flex flex-col min-w-0 flex-1 gap-1'>

                        <div className='flex gap-3 items-center'>
                            <div className='p-1 rounded bg-green-500/10 shadow-inner'>
                                <img src={SpotifyImage} className='size-4 animate-pulse' />
                            </div>
                            <span className='text-xs text-muted-foreground font-medium'>
                                Last played
                            </span>
                        </div>

                        <div className='flex flex-col min-h-10 max-h-10'>
                            <a href={songData.spotifyUrl}
                                target='_blank'
                                className='font-medium truncate text-foreground hover:underline hover:text-green-500 transition-colors'>
                                {songData.song}
                            </a>

                            <p className='text-muted-foreground text-xs'>
                                {songData.artist}
                            </p>
                        </div>

                    </div>

                    {/* Play Button */}
                    <Button variant={'outline'} className='size-8' onClick={togglePlay}>
                        {isPlaying ? <Pause /> : <Play />}
                    </Button>

                </div>

                {/* Audio */}
                <audio ref={audioRef} src={songData.audio} />

                <div hidden>
                    <ControllerSection />
                </div>

            </div>
        </div>
    )
}

export default SpotifyPlugin
