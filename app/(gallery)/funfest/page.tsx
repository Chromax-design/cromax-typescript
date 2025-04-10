import ImageGallery from '@/components/ImageGallery'
import TitleComponent from '@/components/TitleComponent'
import { getImagesFromCloud } from '@/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Esther\'s funfest 2025'
}

const page = async () => {
    const data = await getImagesFromCloud('funfest');
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'funfest gallery'} />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default page