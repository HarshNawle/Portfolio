import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'

const ViewCount = () => {
    return (
        <div className='container mx-w-4xl mx-auto px-12 py-8 mb-10'>
            <div className='flex justify-center'>
                <div className='relative px-4 py-3 rounded-lg bg-muted/30 border 
                    border-border/50 shadow-inner flex flex-col 
                    sm:flex-row items-center gap-3 sm:gap-6'>
                    <div className='flex items-center gap-2'>
                        <Button variant={'outline'} className='size-7'>
                            <Eye/>
                        </Button>

                        <div className='felx items-baseline gap-1 font-mono text-sm'>
                            <span className='text-muted-foreground'>Your are the </span>
                            <span className='font-semibold text-primary text-base font-mono tracking-tight'>
                                100
                                <sup className='text-[0.65]'>nd </sup>
                            </span>
                            <span className='text-muted-foreground'>visitor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCount