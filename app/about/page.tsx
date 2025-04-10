import TitleComponent from '@/components/TitleComponent'
import Image from 'next/image'

const About = () => {
    return (
        <main className='my-14 space-y-5 p-4 lg:p-2'>
            <TitleComponent title={'About'} />
            <section className='grid grid-cols-12 gap-5'>
                <div className='col-span-12 md:col-span-7'>
                    <Image src={'/banner.jpg'} alt="Cromax mockup" className='object-cover w-full saturate-0 hover:scale-105 brightness-90 duration-300 ease-in-out rounded-md' loading='lazy' width={500} height={500} quality={70} />
                </div>
                <div className='col-span-12 md:col-span-5 space-y-4 pl-4'>
                    <h2 className='text-white text-2xl md:text-4xl capitalize'>my mission</h2>
                    <p className=' text-white/45 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at laudantium recusandae voluptatem perferendis explicabo reiciendis placeat dicta fugit pariatur vel repellat ipsum fugiat ullam? Fugit nemo in recusandae aperiam autem quae obcaecati odit sint. Non voluptate commodi deleniti ea sed, libero sunt tenetur autem, molestias aliquam, quis veritatis explicabo!
                    </p>
                    <p className=' text-white/45 leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, at laudantium recusandae voluptatem perferendis explicabo reiciendis placeat dicta fugit pariatur vel repellat ipsum fugiat ullam.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default About