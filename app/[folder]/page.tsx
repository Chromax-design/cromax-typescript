"use client"

import InfoComponent from "@/components/InfoComponent";
import TitleComponent from "@/components/TitleComponent";
import { useGetImageByAssetFolderQuery } from "@/services/Cloudinary";

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';

import { useParams } from "next/navigation"

const GalleryPage = () => {
    const { folder } = useParams();
    const { data } = useGetImageByAssetFolderQuery(folder);

    return (
        <main className=' my-14 space-y-5 p-3'>
            <TitleComponent title={`${folder} gallery`} />
            <InfoComponent />
            <section className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5'>
                {
                    data?.map(({ url }: { url: string }, index: number) => {
                        return <div
                            className='h-80 overflow-hidden group hover:scale-105 duration-300 ease-in-out relative'
                            key={index}
                        >
                            <LightGallery
                                speed={500}
                                plugins={[lgThumbnail, lgZoom]}
                                download={false}
                                closable={true}
                                mobileSettings={{
                                    controls: true,
                                    showCloseIcon: true,
                                    download: false
                                }}
                                preload={2}
                            >
                                <a href={url}>
                                    <Image
                                        width={500}
                                        height={600}
                                        src={url || '/banner.jpg'}
                                        alt={`gallery-${index}`}
                                        className={`w-full h-full min-h-80 rounded object-cover object-top transition-all duration-300 ease-in-out saturate-0 brightness-80 `}
                                        loading='lazy'
                                        quality={65}
                                        unoptimized={false}
                                    />
                                </a>
                            </LightGallery>
                        </div>
                    })
                }
            </section>
        </main>
    )
}

export default GalleryPage