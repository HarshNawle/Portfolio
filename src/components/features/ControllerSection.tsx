import { Separator } from "../ui/separator"

const ControllerSection = () => {
    return (
        <div className="flex flex-col gap-3 overflow-hidden h-auto">
            <Separator className="my-2" />
            <div className="flex gap-3 items-center">
                <div className='flex-1 min-w-0'>
                    <a className='font-medium truncate h-5' >
                        All The Stars
                    </a>
                    <span>
                        <div className=' flex items-center'>
                            <p className='text-muted-foreground text-xs'>Kendrick lamar,SZA</p>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ControllerSection