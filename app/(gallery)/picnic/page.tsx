"use client"

import ImageGallery from '@/components/ImageGallery'
import InfoComponent from '@/components/InfoComponent';
import TitleComponent from '@/components/TitleComponent'
import { useGetImageByAssetFolderQuery } from '@/services/Cloudinary';

const Picnic = () => {
    const { data } = useGetImageByAssetFolderQuery('picnic');
    
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'picnic gallery'} />
            <InfoComponent />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default Picnic