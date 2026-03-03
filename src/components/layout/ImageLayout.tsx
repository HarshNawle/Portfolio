import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import ProfileImage from '../../images/(2) Instagram.jpeg'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import Antigravity from '../../images/Antigravity.png'
import { useWakaTime } from '@/hooks/useWakaTime'
import { useCallback, useEffect, useRef, useState } from 'react'

const ImageLayout = () => {
    const { status, yesterday, loading } = useWakaTime()
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    // Derive active state from the hook
    const isActive = status?.isCoding ?? false
    const isLoading = loading || status === null

    // Close tooltip when tapping outside (mobile)
    const handleOutsideClick = useCallback((e: TouchEvent | MouseEvent) => {
        if (
            triggerRef.current && !triggerRef.current.contains(e.target as Node) &&
            contentRef.current && !contentRef.current.contains(e.target as Node)
        ) {
            setOpen(false)
        }
    }, [])

    useEffect(() => {
        if (open) {
            document.addEventListener('touchstart', handleOutsideClick)
            document.addEventListener('mousedown', handleOutsideClick)
        }
        return () => {
            document.removeEventListener('touchstart', handleOutsideClick)
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [open, handleOutsideClick])

    return (
        <div className='relative inline-flex items-center gap-3'>
            <div>
                <Avatar>
                    <AvatarImage src={ProfileImage} className='rounded-full size-26' />
                </Avatar>

                <div className='relative group z-30'>
                    <TooltipProvider delayDuration={500}>
                        <Tooltip
                            open={open}
                            onOpenChange={setOpen}
                        >
                            <TooltipTrigger
                                ref={triggerRef}
                                onClick={(e) => {
                                    e.preventDefault()
                                    setOpen(prev => !prev)
                                }}
                                onTouchStart={(e) => {
                                    e.preventDefault()
                                    setOpen(prev => !prev)
                                }}
                                className={`absolute bottom-0 right-0 
                size-6 border-2 rounded-full flex items-center justify-center
                shadow-lg group-hover:scale-110 hover:transition-transform cursor-pointer
                ${isActive ? 'bg-green-500 border-white' : 'bg-background'}`}
                            >
                                <div
                                    className={`size-2 rounded-full ${isActive ? 'bg-white' : 'bg-muted-foreground'
                                        }`}
                                />
                            </TooltipTrigger>

                            <TooltipContent
                                ref={contentRef}
                                side="right"
                                align="start"
                                sideOffset={5}
                                className="bg-white dark:bg-black border border-gray-600 shadow-xl p-3 rounded-lg min-w-[160px]"
                                onPointerDownOutside={(e) => e.preventDefault()}
                            >
                                <div className="flex flex-col gap-1">
                                    {/* Row 1: Status dot + label + icon */}
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`size-2 rounded-full ${isActive ? "bg-green-500" : "bg-gray-500"
                                                }`}
                                        />

                                        <span className="text-sm text-gray-400">
                                            {isLoading
                                                ? "Checking..."
                                                : isActive
                                                    ? "Active"
                                                    : "Offline"}
                                        </span>

                                        <img
                                            src={Antigravity}
                                            className="size-4 opacity-80"
                                            alt="Status"
                                        />

                                        <span className="text-sm text-gray-400">
                                            Google Antigravity
                                        </span>
                                    </div>

                                    {/* Row 2: Activity detail */}
                                    <div className="text-[15px] ml-2 text-gray-400">
                                        {isLoading ? (
                                            "Checking..."
                                        ) : isActive ? (
                                            <>
                                                Coding & Designing
                                                {status?.project && (
                                                    <span className="block text-xs mt-0.5 text-gray-500">
                                                        Working on <b>{status.project}</b>
                                                        {status.language && ` · ${status.language}`}
                                                    </span>
                                                )}
                                            </>
                                        ) : yesterday && yesterday !== "0 mins" ? (
                                            <>
                                                Yesterday worked <b>{yesterday}</b>
                                            </>
                                        ) : (
                                            "No activity yesterday"
                                        )}
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>

            <div className='flex flex-col'>
                <span className='text-[30px] text-gray-700'>Harsh Nawle</span>
                <span
                    className='absolute text-[18px] text-gray-400 
          bottom-3 hover:text-gray-300'
                >
                    @hxrsh28
                </span>
            </div>
        </div>
    )
}

export default ImageLayout