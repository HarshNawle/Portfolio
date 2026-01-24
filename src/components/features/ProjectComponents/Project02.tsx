import { Github, Globe } from 'lucide-react'
import project1 from '../../assets/project-1.webp'
import nextjs from '../../assets/nextjs.svg'
import typescript from '../../assets/typescript.svg'
import react from '../../assets/react.svg'
import mongodb from '../../assets/mongodb.svg'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'


const Project01 = () => {
    return (
        <div>
            <Card className='max-w-md pt-0'>
                <CardContent className='px-0'>
                    <img
                        src={project1}
                        alt='Banner'
                        className='aspect-video h-60 rounded-t-xl object-cover'
                    />
                </CardContent>
                <CardHeader>
                    <CardTitle>
                        <div className='flex justify-between'>
                            <div>
                                <h3 className='text-xl font-semibold leading-tight'>
                                    Huddle - chat me
                                </h3>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <a href="" className='text-gray-400'>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Globe className='size-6' />

                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Website</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </a>
                                <a href="" className='text-gray-400'>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Github className='size-6' />


                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Github</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </a>
                            </div>
                        </div>
                    </CardTitle>
                    <CardDescription>Smooth, flowing gradients blending rich reds and blues in an abstract swirl.</CardDescription>
                </CardHeader>
                <CardFooter className='flex-col items-start gap-4'>
                    {/* Technologies */}
                    <div className="w-full">
                        <p className="text-xs font-semibold text-gray-500 tracking-wider mb-2">Technologies</p>
                        <div className="flex gap-1 items-center">
                            <div className="size-10   flex items-center justify-center p-1.5" title="React">
                                <img src={react} alt="React" className="w-full h-full object-contain" />
                            </div>
                            <div className="size-10 flex items-center justify-center p-1.5 " title="TypeScript">
                                <img src={typescript} alt="TS" className="w-full h-full object-contain" />
                            </div>
                            <div className="size-10 flex items-center justify-center p-1.5 " title="Next.js">
                                <img src={nextjs} alt="Next" className="w-full h-full object-contain filter invert dark:invert-0" />
                            </div>
                            <div className="size-10 flex items-center justify-center p-1.5 " title="MongoDB">
                                <img src={mongodb} alt="Mongo" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Project01