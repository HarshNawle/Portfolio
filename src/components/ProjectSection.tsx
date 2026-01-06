import Project01 from "./ProjectComponents/Project01"
import Project02 from "./ProjectComponents/Project02"


const ProjectSection = () => {
    return (
        // min-h-screen remember to add in  below div
        <div className="container mx-auto max-w-4xl px-12 max-auto ">
            <div>
                <p className="text-gray-400 text-sm">Featured</p>
                <h2 className="text-2xl font-bold">Projects</h2>
            </div>

            <div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-8">
                    {/* Card section */}
                    <Project01/>
                    <Project02/>
                </div>

            </div>
        </div>
    )
}

export default ProjectSection