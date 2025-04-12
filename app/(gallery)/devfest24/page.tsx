import ImageGallery from '@/components/ImageGallery';
import TitleComponent from '@/components/TitleComponent';
import { getImagesFromCloud } from '@/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Devfest 2024 Gallery'
}


const Devfest = async () => {
    const data = await getImagesFromCloud('devfest24');
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'devfest 2024 gallery'} />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default Devfest