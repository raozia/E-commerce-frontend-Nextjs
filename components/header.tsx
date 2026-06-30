'use client'
import Link from 'next/link'
import { useState } from 'react';
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header>
            <div>
                <div className='lg:flex justify-between px-7 py-4 font-inter'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h1 className='text-2xl font-bold'>Logo</h1>
                        </div>
                        <div className='block sm:hidden'>
                            <button onClick={() => setIsOpen(item => !item)}>
                                {isOpen ? <IoMdClose className='w-8 h-8' />
                                    : <IoMenu className='w-10 h-10' />}
                            </button>
                        </div>
                    </div>

                    <div className={`${isOpen ? 'block' : 'hidden'} sm:flex flex-col  gap-5 mt-5 md:mt-0 md:flex-row`}>
                        <div>
                            <div className='flex items-center gap-2 bg-gray-100 p-4 rounded-sm text-[#989898]'>
                                <IoSearchOutline className='w-4 h-4' />
                                <input type="search" placeholder='Search here' className='text-sm outline-0' />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center gap-5 mt-5 sm:mt-0 sm:gap-13 text-[16px]'>
                            <Link href="#" className='text-gray-500 hover:text-black'>Home</Link>
                            <Link href="#" className='text-gray-500 hover:text-black'>About</Link>
                            <Link href="#" className='text-gray-500 hover:text-black'>Contact</Link>
                            <Link href="#" className='text-gray-500 hover:text-black'>Blog</Link>
                        </div>
                        <div className='flex gap-6 items-center justify-center mt-5 sm:mt-0'>
                            <GrFavorite className='w-5 h-5' />
                            <IoCartOutline className='w-5 h-5' />
                            <IoPersonOutline className='w-5 h-5' />
                        </div>
                    </div>


                </div>
            </div >
        </header >
    )
}

export default Header
