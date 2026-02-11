// import React from 'react'


const AboutMe = () => {
    return (
        <div className="container mx-auto max-w-4xl px-12 max-auto py-10 ">
            <div>
                <p className="text-gray-400 text-sm">Featured</p>
                <h2 className="text-2xl font-bold">GitHub Activity</h2>
            </div>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">
                <img src="https://ghchart.rshah.org/HarshNawle" alt="" />
            </div>
        </div>
    )
}

export default AboutMe