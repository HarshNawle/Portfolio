

const CopyRight = () => {
    const CurrentYear = new Date().getFullYear()
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-gray-400 text-center">
                Design & Developed by
                <b> hxrsh28</b>
                <br />
                 © 
                 {` ${ CurrentYear}`}
                 . All rights reserved
            </p>
        </div>
    </div>
  )
}

export default CopyRight