import ImageGallery from '@/components/ImageGallery'
import InfoComponent from '@/components/InfoComponent';
import TitleComponent from '@/components/TitleComponent'
import { getImagesFromCloud } from '@/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Picnic with fellow medics'
}

const Picnic = async () => {
    const data = await getImagesFromCloud('picnic');
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'picnic gallery'} />
            <InfoComponent />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default Picnic