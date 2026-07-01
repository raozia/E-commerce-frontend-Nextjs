'use client'
import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { brandOptions, mobiles, products } from './data';
import Buttons from './UI/Buttons';
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";
interface ProductPageProps {
    params: {
        slug: string
    }
}

const ProductPage = ({ params }: ProductPageProps) => {

    const { slug } = params;

    const filteredProducts = products.filter(
        item => item.category === slug
    );
    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage = 3;
    const totalProducts = Math.ceil(filteredProducts.length / itemsPerPage)

    const product = useMemo(() => {
        const startItem = (currentPage - 1) * itemsPerPage;
        const lastItem = startItem + itemsPerPage;
        return filteredProducts.slice(
            startItem,
            lastItem
        )
    }, [currentPage, filteredProducts])
    const [searchItem, setsearchItem] = useState("")
    const [isExpand, setIsexpand] = useState<number | null>(null)
    const [openFilter, setopenFilter] = useState(false)
    const handleExpand = (id: number) => {
        setIsexpand(prev => (prev === id ? null : id))
    }
    const productSearch = product.filter((item) => (
        item.title.toLowerCase().includes(searchItem.toLowerCase())
    ))
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-10 font-inter'>
                <Buttons variation='outline' className='block sm:hidden' onClick={() => setopenFilter(prev => !prev)}>Filters</Buttons>
                <aside className={`${openFilter ? 'block' : 'hidden'} sm:block max-w-80 w-full p-2`}>
                    {brandOptions.map((item) => {
                        const isOpen = isExpand === item.id;
                        return <div key={item.id} className="mb-4">
                            <div className='flex items-center justify-between cursor-pointer p-2 shadow-sm rounded-md'
                                onClick={() => handleExpand(item.id)}>
                                <div>
                                    <h1 className='text-lg cursor-pointer' >{item.title}</h1>
                                </div>
                                <div>
                                    <IoIosArrowDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                </div>
                            </div>
                            <hr className='text-[#B5B5B5]' />
                            <div>
                                {isOpen && (
                                    <div className="mt-2">
                                        <div className='flex items-center gap-2 bg-[#F5F5F5] p-2 rounded-md'>
                                            <IoSearchOutline className='w-5 h-5 text-[#989898]' />
                                            <input type="search" placeholder='Search here' value={searchItem} onChange={(e) => setsearchItem(e.target.value)} className='text-sm outline-0' />
                                        </div>
                                        <ul>
                                            {item.options.map((option, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-2 py-1"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id={`${item.id}`}
                                                        className="cursor-pointer"
                                                    />

                                                    <label
                                                        htmlFor={`${item.id}`}
                                                        className="cursor-pointer text-sm text-gray-700"
                                                    >
                                                        {option}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    })}
                </aside>

                <div>
                    <div>
                        <h1 className='text-2xl'>Select Products</h1>
                    </div>
                    <div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-10'>
                        {productSearch.length > 0 ? (
                            productSearch.map((product) => (
                                <Link href={`/products/${product.slug}`} key={product.id}>
                                    <ProductCard key={product.id} product={product} />
                                </Link>
                            ))
                        ) : (
                            <p className="text-gray-500">No products found.</p>
                        )}
                    </div>
                    <div className='flex justify-center items-center mt-2'>
                        <button
                            className=" disabled:opacity-50"
                            onClick={() => setcurrentPage((prev) => prev - 1)}
                            disabled={currentPage === 1}
                        >
                            <IoIosArrowBack className='w-10 h-10' />
                        </button>
                        <div>
                            {currentPage} of {totalProducts}
                        </div>
                        <button
                            className=" disabled:opacity-50"
                            disabled={currentPage >= totalProducts}
                            onClick={() => setcurrentPage((prev) => prev + 1)}>
                            <IoIosArrowForward className='w-10 h-10' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
