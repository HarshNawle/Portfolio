import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import ProfileImage from '../../images/(2) Instagram.jpeg'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import Antigravity from '../../images/Antigravity.png'


import { useMemo } from 'react'


const ImageLayout = () => {
    const { timeString, isActive, statusText, activity } = useMemo(() => {
        // Use initial rendering to seed random values safely and only once
        const hours = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF * 6); // 0 to 5 hours
        const minutes = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF * 60);

        const isActive = hours >= 3;
        const activities = ["Coding & Designing"];
        // Remove impure Math.random usage during render; always select the first activity for stability
        const randomActivity = activities[0];

        return {
            timeString: `${hours}h ${minutes}m`,
            isActive,
            statusText: isActive ? "Active in" : "Offline in",
            activity: isActive ? randomActivity : "Yesterday worked"
        };
    }, [])

    return (
        <div className='relative inline-flex items-center gap-3'>
            <div>
                <div>
                    <Avatar>
                        <AvatarImage src={ProfileImage} className='rounded-full size-26' />
                    </Avatar>
                </div>


                <div className='relative group z-30'>
                    <TooltipProvider delayDuration={500}>
                        <Tooltip>
                            <TooltipTrigger className={`absolute bottom-0 right-0 
                        size-6 border-2 rounded-full flex items-center justify-center
                        shadow-lg group-hover:scale-110 hover:transition-transform ${isActive ? 'bg-green-500 border-white' : 'bg-background'}`}>
                                <div className={`size-2 rounded-full ${isActive ? 'bg-white' : 'bg-muted-foreground'}`}> </div>
                            </TooltipTrigger>
                            <TooltipContent side='right' align='start' sideOffset={5}
                                className='bg-white dark:bg-black border border-gray-600 shadow-xl p-3 rounded-lg min-w-[200px]' >
                                <div className='flex items-center gap-2 mb-1'>
                                    <div className={`size-2 rounded-full ${isActive ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-gray-500'}`}></div>
                                    <span className='text-sm text-gray-400' >
                                        {statusText}
                                    </span>
                                    <img src={Antigravity} className="size-4 opacity-80" alt="VSCode" />
                                    <span className='text-xs font-medium text-gray-400'>Google Antigravity</span>
                                </div>
                                <div className='flex items-baseline gap-1 text-sm text-gray-400'>
                                    <span className='text-black dark:text-white'>{activity}</span>
                                    {
                                        isActive ? <span> </span> : <span className='text-black dark:text-white font-bold'>{timeString}</span>
                                    }

                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            <div className='flex flex-col'>
                <span className='text-[30px] text-gray-700'>
                    Harsh Nawle
                </span>
                <span className='absolute text-[18px] text-gray-400 
                bottom-3 hover:text-gray-300 '>
                    @hxrsh28
                </span>
            </div>
        </div>
    )
}

export default ImageLayout