import { ArrowRightIcon, Github, Globe } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import { motion } from "motion/react";

export type ProjectStatus = "operational" | "building" | "down";

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  status?: ProjectStatus;
}

const statusConfig: Record<
  ProjectStatus,
  { text: string; dot: string; badge: string }
> = {
  operational: {
    text: "All Systems Operational",
    dot: "bg-green-500",
    badge: "border-green-300 bg-green-500/10",
  },
  building: {
    text: "Building in Progress",
    dot: "bg-yellow-500",
    badge: "border-yellow-300 bg-yellow-500/10",
  },
  down: {
    text: "System Down",
    dot: "bg-red-500",
    badge: "border-red-300 bg-red-500/10",
  },
};

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl = "#",
  githubUrl = "#",
  status = "operational",
}) => {
  const currentStatus = statusConfig[status];

  return (
    <motion.div
      variants={{
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 0.45 }}
    >
      <div className="bg-card flex flex-col rounded-xl border group overflow-hidden h-full">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Body */}
        <div className="p-6 space-y-4 flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold group-hover:text-primary">
              {title}
            </h3>

            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-primary"
                  >
                    <Globe size={18} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>View Website</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-primary"
                  >
                    <Github size={18} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>View GitHub</TooltipContent>
              </Tooltip>
            </div>
          </div>

          <p className="text-gray-400 line-clamp-3">{description}</p>

          {/* Technologies */}
          <div>
            <h4 className="text-sm mb-2 text-gray-400">Technologies</h4>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <div className="size-6 hover:scale-125 transition-transform cursor-pointer">
                      <img src={tech.icon} alt={tech.name}  />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>{tech.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 flex justify-between items-center">
          <div
            className={`flex items-center gap-2 px-2 py-1 text-xs rounded-md ${currentStatus.badge}`}
          >
            <div
              className={`size-2 rounded-full animate-pulse ${currentStatus.dot}`}
            />
            {currentStatus.text}
          </div>

          <a
            href={liveUrl}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary hover:underline"
          >
            View Details
            <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;