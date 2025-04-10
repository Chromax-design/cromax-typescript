import React from 'react'

const TitleComponent = ({ title }: { title: string }) => {
    return (
        <div>
            <h1 className=' text-white text-center text-4xl md:text-5xl lg:text-7xl capitalize py-4'>
                {title}
            </h1>
        </div>
    )
}

export default TitleComponent