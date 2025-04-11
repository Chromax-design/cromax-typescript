import TitleComponent from '@/components/TitleComponent'
import { serviceList } from '@/utilities/data'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Services'
}

const Services = () => {
    return (
        <main className='my-14 space-y-5 p-4 lg:p-2'>
            <TitleComponent title={'Services'} />
            <section className=' grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10'>
                {
                    serviceList.map(({ title, description }, i) => {
                        return (
                            <div className='text-white bg-neutral-900 p-10 space-y-5 text-center shadow-2xl hover:scale-105 transition-transform' key={i}>
                                <h2 className='text-2xl'>{title}</h2>
                                <p className=' text-white/40'>{description}</p>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Services