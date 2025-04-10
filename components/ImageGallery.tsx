"use client"

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';

type ImageGalleryProps = { imageEntries: string[] };

const ImageGallery = ({ imageEntries }: ImageGalleryProps) => {

    return (
        <section className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5'>
            {imageEntries.map((url, index) => {
                return (
                    <div
                        className='h-80 overflow-hidden group hover:scale-105 duration-300 ease-in-out relative'
                        key={index}
                    >
                        <LightGallery
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            download={true}
                            closable={true}
                            mobileSettings={{
                                controls: true,
                                showCloseIcon: true,
                                download: true,
                            }}
                            preload={2}
                        >
                            <a href={url}>
                                <Image
                                    width={500}
                                    height={600}
                                    src={url}
                                    alt={`gallery-${index}`}
                                    className={`w-full h-full min-h-80 rounded object-cover object-top transition-all duration-300 ease-in-out saturate-0 brightness-80 `}
                                    loading='lazy'
                                    quality={65}
                                />
                            </a>
                        </LightGallery>
                    </div>
                );
            })}
        </section>
    )
}

export default ImageGallery