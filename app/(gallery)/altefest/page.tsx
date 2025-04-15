import ImageGallery from '@/components/ImageGallery';
import InfoComponent from '@/components/InfoComponent';
import TitleComponent from '@/components/TitleComponent';
import { getImagesFromCloud } from '@/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Alte Festival 2024 Gallery'
}


const Altefest = async () => {
    const data = await getImagesFromCloud('altefest');

    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'altefest 2024 gallery'} />
            <InfoComponent />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default Altefest