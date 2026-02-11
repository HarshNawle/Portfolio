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
            href='/'
            tooltip='Github'
           />
           <TooltipDemo
            icon={<Linkedin />}
            href='/'
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