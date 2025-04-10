"use client"

import React, { useEffect, useState } from 'react'
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Skeleton } from './ui/skeleton';

type imageEntryType = { imgSrc: string, imgAlt: string }[]

const ImageGallery = ({ imageEntries }: { imageEntries: imageEntryType }) => {
    const [hasMounted, setHasMounted] = useState(false);
    const [loadedImages, setLoadedImages] = useState<boolean[]>(
        Array(imageEntries.length).fill(false)
    );

    useEffect(() => {
        setHasMounted(true);
        setLoadedImages(Array(imageEntries.length).fill(false));
    }, [imageEntries.length]);


    const handleImageLoad = (index: number) => {
        setLoadedImages(prev => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    if (!hasMounted) return null; // SSR bypass

    return (
        <section className='grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-5'>
            {imageEntries.map(({ imgAlt, imgSrc }, index) => {
                const loaded = loadedImages[index];
                return (
                    <div
                        className='h-80 overflow-hidden group hover:scale-105 duration-300 ease-in-out relative'
                        key={index}
                    >
                        {!loaded && (
                            <Skeleton className="w-full h-full min-h-80 rounded" />
                        )}

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
                            <a href={imgSrc}>
                                <img
                                    src={imgSrc}
                                    alt={`gallery-${index}`}
                                    onLoad={() => handleImageLoad(index)}
                                    className={`w-full h-full min-h-80 rounded object-cover object-top transition-all duration-300 ease-in-out
                  saturate-0 brightness-80 
                  ${loaded ? 'group-hover:scale-105 group-hover:cursor-pointer group-hover:saturate-100 group-active:saturate-100 group-active:scale-105' : 'opacity-0'}`}
                                    loading='lazy'
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