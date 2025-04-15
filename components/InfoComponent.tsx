import React from 'react'
import { FaCircleInfo } from 'react-icons/fa6'

const InfoComponent = () => {
    return (
        <div className='text-white bg-white/10 px-4 py-2 border-l-2 border-gray-300 w-fit lg:hidden max-sm:text-sm flex gap-2 items-center'>
            <FaCircleInfo className='text-lg' />
            <p>Notice: Please tap an Image to view full size</p>
        </div>
    )
}

export default InfoComponent