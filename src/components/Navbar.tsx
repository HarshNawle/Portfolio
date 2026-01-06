import ProfileImage from '../assets/(2) Instagram.jpeg'
import { ModeToggle } from './ToggleMode'

const Navbar = () => {

    return (
        <div className='top-0 rounded-md container mx-auto max-w-4xl px-8 py-4 z-50 backdrop-blur-sm sticky'>
            <div className='flex items-center justify-between px-4'>
                <div className='flex items-baseline gap-6'>
                    <div>
                        <a href="#">
                            <img src={ProfileImage}
                                className="size-[60px] rounded-xl transition-transform duration-300 hover:scale-90" />
                        </a>
                    </div>
                    <div>
                        <div className=' flex gap-3 items-baseline justify-center font-[400px]'>
                            <a href="#about" className='hover:underline hover:underline-offset-4 text-black dark:text-gray-300 decoration-2' >About</a>
                            <a href="#project" className='hover:underline hover:underline-offset-4 text-black dark:text-gray-300 decoration-2' >Project</a>
                            <a href="#work" className='hover:underline hover:underline-offset-4 text-black dark:text-gray-300 decoration-2' >Work</a>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center '>
                    <ModeToggle />
                </div>

            </div>

        </div>
    )
}

export default Navbar