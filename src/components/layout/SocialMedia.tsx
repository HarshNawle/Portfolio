import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import TooltipDemo from '../common/SocialMediaReuse'

const SocialMedia = () => {
    return (
        <div className='mt-8 p-2 flex gap-3 text-gray-500'>
            
           <TooltipDemo
            icon={<Mail/>}
            href='/'
            tooltip='Email'
           />
           <TooltipDemo
            icon={<Github />}
            href='https://github.com/HarshNawle'
            tooltip='Github'
           />
           <TooltipDemo
            icon={<Linkedin />}
            href='https://in.linkedin.com/in/harsh-nawle-ab5358323'
            tooltip='LinkedIn'
           />
           <TooltipDemo
            icon={<Instagram />}
            href='/'
            tooltip='Instagram'
           />
           <TooltipDemo
            icon={<Twitter />}
            href='/'
            tooltip='X'
           />
        </div>
    )
}

export default SocialMedia