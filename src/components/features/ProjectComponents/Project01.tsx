import { ArrowRightIcon, Github, Globe } from 'lucide-react'
import Project1 from '../../../images/projects/project-1.webp'
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip'
// import nextjs from '../../../images/tech/nextjs.svg'
// import typescript from '../../../images/tech/typescript.svg'
import react from '../../../images/tech/react.svg'
import mongodb from '../../../images/tech/mongodb.svg'
import nodeJS from '../../../images/tech/nodejs.svg'


const Project01 = () => {
    return (
        <div>
            <div className="bg-card text-card-foreground flex flex-col gap-6
            rounded-xl border group h-full w-full overflow-hidden transition-all
            p-0 border-gray-100 dark:border-gray-800 shadow-none">
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 p-0">
                    <div className="group relative aspect-video overflow-hidden">
                        <img src={Project1} className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className='px-6'>
                    <div className='space-y-4'>
                        <div className='flex items-center justify-between gap-4'>
                            <h3 className='text-2xl font-semibold leading-tight group-hover:text-primary hover:cursor-pointer'>
                                Huddle
                            </h3>
                            <div className='flex items-center gap-2'>
                                <div>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <a href="" className='text-gray-400 flex size-6 items-center justify-center hover:text-primary transition-colors duration-200 ease-[ease]'>
                                                <Globe />
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Website</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>

                                <div>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <a href="" className='text-gray-400 flex size-6 items-center justify-center hover:text-primary transition-colors duration-200 ease-[ease]'>
                                                <Github />
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Github</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-400 line-clamp-3'>
                            A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools
                        </p>
                        <div>
                            <h4 className='text-sm font-medium mb-2 text-gray-400'>
                                Technologies
                            </h4>
                            <div className='flex flex-wrap gap-2'>
                                <div className='size-6 hover:scale-120 hover:cursor-pointer transition-transform duration-200 ease-[ease]'>
                                    <img src={react} alt="" />
                                </div>
                                <div className='size-6 hover:scale-120 hover:cursor-pointer transition-transform duration-200 ease-[ease]'>
                                    <img src={mongodb} alt="" />
                                </div>
                                <div className='size-6 hover:scale-120 hover:cursor-pointer transition-transform duration-200 ease-[ease]'>
                                    <img src={nodeJS} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='items-center [.border-t]:pt-6 p-6 pt-0 flex justify-between'>
                    <div className='flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 bg-green-500/10'>
                        <div className='size-2 rounded-full bg-green-500 animate-pulse'></div>
                        All Systems Operational
                    </div>
                    <a href=" " className='text-gray-400 flex items-center gap-2 text-sm hover:underline underline-offset-4 hover:text-primary transition-colors duration-200 ease-[ease]'>
                        View Details
                        <ArrowRightIcon/>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Project01