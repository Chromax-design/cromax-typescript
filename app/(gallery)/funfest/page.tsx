"use client"

import ImageGallery from '@/components/ImageGallery'
import InfoComponent from '@/components/InfoComponent';
import TitleComponent from '@/components/TitleComponent'
import { useGetImageByAssetFolderQuery } from '@/services/Cloudinary';

const Funfest = () => {
    const { data } = useGetImageByAssetFolderQuery('funfest');
    
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'Esther\'s funfest 2024 gallery'} />
            <InfoComponent />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default Funfest