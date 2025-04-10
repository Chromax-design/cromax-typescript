import ImageGallery from '@/components/ImageGallery'
import TitleComponent from '@/components/TitleComponent'
import { getImagesFromCloud } from '@/server';
import { PicnicData } from '@/utilities/PicnicData'

const Picnic = async () => {
    // const data = await getImagesFromCloud('test');
    
    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={'picnic gallery'} />
            <ImageGallery imageEntries={PicnicData} />
        </main>
    )
}

export default Picnic