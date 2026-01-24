import SpotifyImage from '../../images/logos/spotify.svg'
import AlbumImage from '../../images/AlbumImage.jpg'
import { Button } from '../ui/button'
import { Play } from 'lucide-react'
import ControllerSection from '../features/ControllerSection'

const SpotifyPlugin = () => {
    return (
        <div className='mt-6'>
            <div className='flex flex-col gap-4 text-sm p-3 rounded-lg bg-muted/50
                border border-border/50
                shadow-inner'>
                <div className='flex items-center gap-3'>
                    {/* Album image */}
                    <img src={AlbumImage} className="size-13 rounded-md shadow-inner ring-1 ring-black/50 
                dark:ring-white/50" />

                    {/* Controller Box */}
                    <div className='flex flex-col min-w-0 flex-1 gap-1'>
                        {/* SpotifyIcon + Last Played */}
                        <div className='flex gap-3 items-center'>
                            {/* Spotify SVG */}
                            <div className='p-1 rounded bg-green-500/10 shadow-inner transition-opacity'>
                                <img src={SpotifyImage} alt="Spotify"
                                    className='size-4 animate-pulse' />
                            </div>
                            <span className='text-xs text-muted-foreground font-medium'>Last played</span>
                        </div>
                        {/* Name of Singer and Song */}
                        <div className='flex flex-col min-h-10 max-h-10'>
                            <a href="https://open.spotify.com/track/3GCdLUSnKSMJhs4Tj6CV3s"
                                target='_blank'
                                className='font-medium truncate text-foreground hover:underline
                            hover:text-green-500 transition-colors cursor-pointer h-5'
                                title='Open in Spotify' >
                                All The Stars
                            </a>
                            <span>
                                <div className=' flex gap-1 items-center'>
                                    <p className='w-3 h-3 rounded-xs bg-gray-400 text-[9px] text-black flex items-center justify-center'>
                                        E
                                    </p>
                                    <p className='text-muted-foreground text-xs'>Kendrick lamar,SZA</p>
                                </div>
                            </span>
                        </div>
                    </div>

                    {/* Play Button */}
                    <button  >
                        <Button variant={'outline'} className='size-8'>
                            <Play />
                        </Button>
                    </button>

                </div>

                {/* Controller Section */}
                <div hidden>
                    <ControllerSection />
                </div>

            </div>
        </div>
    )
}

export default SpotifyPlugin