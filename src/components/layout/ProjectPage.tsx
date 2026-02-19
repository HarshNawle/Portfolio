import Project01 from "../features/ProjectComponents/Project01.tsx"
import { Separator } from "../ui/separator.tsx"



const ProjectPage = () => {
    return (
        // min-h-screen remember to add in  below div
        <div className="container mx-auto max-w-4xl px-12 max-auto py-10 ">
            <div className="flex items-center justify-center flex-col">
                <p className="text-5xl">Projects</p>
                <h2 className="text-gray-400 text-xl my-3">I build projects across diverse technologies and domains.</h2>
                <Separator/>
            </div>

            <div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-8">
                    {/* Card section */}
                    <Project01/>
                    <Project01/>
                    <Project01/>
                </div>

            </div>
        </div>
    )
}

export default ProjectPage