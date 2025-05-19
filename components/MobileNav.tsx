import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation';
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SocialMedia from './SocialMedia';
import Link from 'next/link';
import { pages } from '@/utilities/data';

const MobileNav = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const openSideBar = () => setIsOpen(true);
    const closeSideBar = () => setIsOpen(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node
            if (sidebarRef.current && !sidebarRef.current.contains(target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

    return (
        <nav className='max-lg:block hidden'>
            <span className=' text-4xl' onClick={openSideBar}><IoIosMenu /></span>
            {
                isOpen && <div className='fixed h-screen inset-0 bg-black/40 z-10 transition-transform' />
            }
            <div className={`fixed right-0 top-0 bg-white min-w-72 h-screen z-20 transition-transform ${isOpen ? 'translate-x-0' : ' translate-x-full'}`} ref={sidebarRef}>
                <div className='relative'>
                    <div className='absolute p-4 bg-white w-full flex justify-end'>
                        <span className='text-black text-4xl' onClick={closeSideBar}><IoClose /></span>
                    </div>
                </div>
                <div className='h-full overflow-y-auto'>
                    <ul className=' capitalize flex flex-col gap-10 pt-20 px-5'>
                        {
                            pages.map(({link, title}, i) => <li key={i} className='text-xl'>
                                <Link href={link} className={`${pathname == link ? 'text-red-400' : 'text-black'}`} onClick={closeSideBar}>
                                    {title}
                                </Link>
                            </li>)
                        }
                    </ul>
                    <SocialMedia uniqueClass={'mt-10 py-10 px-5'} color={'text-black '} />
                </div>
            </div>
        </nav>
    )
}

export default MobileNav