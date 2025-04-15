"use client"

import ImageGallery from '@/components/ImageGallery'
import InfoComponent from '@/components/InfoComponent';
import TitleComponent from '@/components/TitleComponent'
import { useGetImageByAssetFolderQuery } from '@/services/Cloudinary';

const Altefest = () => {
    const { data } = useGetImageByAssetFolderQuery('altefest');
    
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'altefest gallery'} />
            <InfoComponent />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default Altefest