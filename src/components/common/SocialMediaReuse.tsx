import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type IconLinkProps = {
    href: string;
    icon: ReactNode;
    tooltip: string;
};

const TooltipDemo = ({ href, icon, tooltip }: IconLinkProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link to={href}>
                    <span className='cursor-pointer hover:text-black/80 dark:hover:text-white'>
                        {icon}
                    </span>
                </Link>
            </TooltipTrigger>

            <TooltipContent>
                <p>{tooltip}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export default TooltipDemo;
