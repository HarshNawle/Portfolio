import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import ProfileImage from '../../images/(2) Instagram.jpeg'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import Antigravity from '../../images/Antigravity.png'

import { useEffect, useState } from 'react'
import { TODAY_TIME, YESTERDAY_TIME } from '@/utils/constant'
import apiClient from '@/lib/api-client'




const ImageLayout = () => {
    const [isActive, setIsActive] = useState<boolean | null>(null)
    const [yesterdayTime, setYesterdayTime] = useState<string | null>(null)

    const STATUS_API = TODAY_TIME
    // `${API_URL}/status`

    const YESTERDAY_API = YESTERDAY_TIME
    const fetchStatus = async () => {
        try {
            const response = await apiClient.get(STATUS_API)

            if (response.data.isCoding) {
                // ✅ user is active
                setIsActive(true)
                setYesterdayTime(null)
            } else {
                // ✅ user is offline → fetch yesterday
                setIsActive(false)

                try {
                    const response2 = await apiClient.get(YESTERDAY_API)
                    setYesterdayTime(response2.data.time ?? null)
                } catch {
                    setYesterdayTime(null)
                }
            }
        } catch (error) {
            console.log(error)
            setIsActive(null)
        }
    }

    useEffect(() => {
        // fetchStatus()

        const interval = setInterval(fetchStatus, 30000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='relative inline-flex items-center gap-3'>
            <div>
                <Avatar>
                    <AvatarImage src={ProfileImage} className='rounded-full size-26' />
                </Avatar>

                <div className='relative group z-30'>
                    <TooltipProvider delayDuration={500}>
                        <Tooltip>
                            <TooltipTrigger
                                className={`absolute bottom-0 right-0 
                size-6 border-2 rounded-full flex items-center justify-center
                shadow-lg group-hover:scale-110 hover:transition-transform 
                ${isActive ? 'bg-green-500 border-white' : 'bg-background'}`}
                            >
                                <div
                                    className={`size-2 rounded-full ${isActive ? 'bg-white' : 'bg-muted-foreground'
                                        }`}
                                />
                            </TooltipTrigger>

                            <TooltipContent
                                side='right'
                                align='start'
                                sideOffset={5}
                                className='bg-white dark:bg-black border border-gray-600 shadow-xl p-3 rounded-lg min-w-[160px]'
                            >
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center gap-2'>
                                        <div
                                            className={`size-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-500'
                                                }`}
                                        />

                                        <span className='text-sm text-gray-400'>
                                            {isActive ? 'Active' : 'offline in'}
                                        </span>

                                        <img
                                            src={Antigravity}
                                            className='size-4 opacity-80'
                                            alt='Status'
                                        />

                                        <span className='text-sm text-gray-400'>
                                            Google Antigravity
                                        </span>
                                    </div>

                                    {/* ⭐ THIS IS THE IMPORTANT PART */}
                                    <div className='text-[15px] ml-2 text-gray-400'>
                                        {isActive === null ? (
                                            'Checking...'
                                        ) : isActive ? (
                                            'Coding & Designing'
                                        ) : yesterdayTime ? (
                                            <>
                                                Yesterday worked <b>{yesterdayTime}</b>
                                            </>
                                        ) : (
                                            'No activity yesterday'
                                        )}
                                    </div>
                                    {/* <div className='text-[15px] ml-2 text-gray-400'>
                                        {isActive
                                            ? 'Coding & Designing'
                                            : yesterdayTime
                                                ? <p>`Yesterday worked <b>${yesterdayTime}</b>`</p>
                                                : <p>Yesterday worked <b>30 min 21 sec</b></p>}
                                    </div> */}
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