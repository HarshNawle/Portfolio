import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'

const SocialMedia = () => {
    return (
        <div className='mt-8 flex gap-3 text-gray-500'>
            <a href="">
                <span  className='cursor-pointer'>
                    <Mail />
                </span>
            </a>
            <a href="">
                <span className='cursor-pointer'>
                    <Github />
                </span>
            </a>
            <a href="">
                <span className='cursor-pointer'>
                    <Linkedin />
                </span>
            </a>
            <a href="">
                <span className='cursor-pointer'>
                    <Instagram />
                </span>
            </a>
            <a href="">
            <span className='cursor-pointer'>
                <Twitter />
            </span>
            </a>
        </div>
    )
}

export default SocialMedia