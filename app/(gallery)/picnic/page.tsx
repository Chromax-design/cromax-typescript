import ImageGallery from '@/components/ImageGallery'
import TitleComponent from '@/components/TitleComponent'
import { getImagesFromCloud } from '@/server';

const Picnic = async () => {
    const data = await getImagesFromCloud('picnic');
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'picnic gallery'} />
            <ImageGallery imageEntries={data} />
        </main>
    )
}

export default Picnic