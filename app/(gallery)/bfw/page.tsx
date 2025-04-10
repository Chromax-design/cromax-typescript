import ImageGallery from '@/components/ImageGallery';
import TitleComponent from '@/components/TitleComponent'
import { getImagesFromCloud } from '@/server';
import React from 'react'

const Bfw = async() => {
    const data = await getImagesFromCloud('bfw');

    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'BFW 2024 gallery'} />
            <ImageGallery imageEntries={data} />
        </main>
    )
}


export default Bfw