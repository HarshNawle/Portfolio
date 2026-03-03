import SpotifyImage from '../../images/logos/spotify.svg'
import AlbumImage from '../../images/AlbumImage.jpg'
import { useState } from 'react';
import { Heart } from 'lucide-react';

const SpotifyPlugin = () => {
    const [liked, setLiked] = useState(false);

    // ✅ Manual Song Data
    const songData = {
        song: "All The Stars",
        artist: "Kendrick Lamar, SZA",
        cover: AlbumImage,
        spotifyUrl: "https://open.spotify.com/track/3GCdLUSnKSMJhs4Tj6CV3s"
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

                    <button
                        onClick={() => setLiked(!liked)}
                        className="p-2 rounded-full hover:bg-white/10 transition"
                        aria-label="Like"
                    >
                        <Heart
                            className={`w-5 h-5 transition-all duration-300 ${liked
                                    ? "fill-red-500 text-red-500 scale-110"
                                    : "text-gray-400"
                                }`}
                        />
                    </button>

                    {/* Play Button
                    <Button variant={'outline'} className='size-8' onClick={togglePlay}>
                        {isPlaying ? <Pause /> : <Play />}
                    </Button> */}

                </div>

                {/* Audio
                <audio ref={audioRef} src={songData.audio} />

                <div hidden>
                    <ControllerSection />
                </div> */}

            </div>
        </div>
    )
}

export default SpotifyPlugin
