import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import ProfileImage from '../assets/(2) Instagram.jpeg'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Antigravity from '../assets/Antigravity.png'


const ImageLayout = () => {
    const AntigravityTime = "7h 30m"
    return (
        <div className='relative inline-flex items-center gap-3'>
            <div>
                <Avatar>
                    <AvatarImage src={ProfileImage} className='rounded-full size-26' />
                </Avatar>

                <div className='relative group z-30'>
                    <TooltipProvider delayDuration={500}>
                        <Tooltip>
                            <TooltipTrigger className='absolute bottom-0 right-0 
                        size-6 bg-background border-2 rounded-full flex items-center justify-center
                        shadow-lg group-hover:scale-110 hover:transition-transform'>
                                <div className='size-2 bg-muted-foreground rounded-full'> </div>
                            </TooltipTrigger>
                            <TooltipContent side='right' align='start' sideOffset={5}
                                className='bg-white dark:bg-black border border-gray-600 shadow-xl p-3 rounded-lg min-w-[200px]' >
                                <div className='flex items-center gap-2 mb-1'>
                                    <div className='size-2 bg-gray-500 rounded-full'></div>
                                    <span className='text-sm text-gray-400' >
                                        Offline in
                                    </span>
                                    <img src={Antigravity} className="size-4 opacity-80" alt="VSCode" />
                                    <span className='text-xs font-medium text-gray-400'>Google Antigravity</span>
                                </div>
                                <div className='flex items-baseline gap-1 text-sm text-gray-400'>
                                    <span className='text-black dark:text-white'>Yesterday worked</span>
                                    <span className='text-black dark:text-white font-bold'>{AntigravityTime}</span>
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