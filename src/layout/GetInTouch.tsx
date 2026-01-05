import { Button } from '@/components/ui/button'
import { ClipboardList, Send } from 'lucide-react'

const GetInTouch = () => {
  return (
    <div className='mt-8 flex gap-3'>
        <a href="/resume" >
            <Button className='whitespace-nowrap  cursor-pointer dark:bg-black' variant={'outline'}>
                <ClipboardList />
                Resume / CV
            </Button>
        </a>
            <a href="/contact" >
            <Button className=' whitespace-nowrap cursor-pointer dark:bg-white dark:text-black text-white bg-black' variant={'outline'}>
                <Send />
                Get in Touch
            </Button>
        </a>
    </div>
  )
}

export default GetInTouch