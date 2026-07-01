/* eslint-disable react-hooks/set-state-in-effect */
'use client'
import React, { useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { brandOptions, products } from './data';
import Buttons from './UI/Buttons';
import Link from 'next/link';
import { IoSearchOutline } from "react-icons/io5";
interface ProductPageProps {
    params: {
        slug: string
    }
}
type Product = (typeof products)[number];

type FilterKey = keyof Pick<
    Product,
    "brand" | "batteryCapacity" | "screenType" | "protectionGlass"
>;

const ProductPage = ({ params }: ProductPageProps) => {
    const { slug } = params;

    // const filteredProducts = products.filter(
    //     item => item.category === slug
    // );
    // const [currentPage, setcurrentPage] = useState(1);
    // const itemsPerPage = 3;
    // const totalProducts = Math.ceil(filteredProducts.length / itemsPerPage)

    // const product = useMemo(() => {
    //     const startItem = (currentPage - 1) * itemsPerPage;
    //     const lastItem = startItem + itemsPerPage;
    //     return filteredProducts.slice(
    //         startItem,
    //         lastItem
    //     )
    // }, [currentPage, filteredProducts])
    const [currentPage, setcurrentPage] = useState(1);
    const [searchItem, setsearchItem] = useState("")
    const [isExpand, setIsexpand] = useState<number | null>(null)
    const [openFilter, setopenFilter] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState<Record<FilterKey, string[]>>({
        brand: [],
        batteryCapacity: [],
        screenType: [],
        protectionGlass: [],
    });

    const [filterSearch, setFilterSearch] = useState<Record<string, string>>({});
    const handleCheckboxChange = (
        filter: FilterKey,
        value: string
    ) => {
        setSelectedFilters((prev) => ({
            ...prev,
            [filter]: prev[filter].includes(value)
                ? prev[filter].filter((item) => item !== value)
                : [...prev[filter], value],
        }));
    };
    const handleFilterSearch = (
        filter: string,
        value: string
    ) => {
        setFilterSearch((prev) => ({
            ...prev,
            [filter]: value,
        }));
    };
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            if (product.category !== slug) return false;

            if (
                searchItem &&
                !product.title
                    .toLowerCase()
                    .includes(searchItem.toLowerCase())
            ) {
                return false;
            }

            for (const key of Object.keys(
                selectedFilters
            ) as FilterKey[]) {
                if (
                    selectedFilters[key].length &&
                    !selectedFilters[key].includes(product[key])
                ) {
                    return false;
                }
            }

            return true;
        });
    }, [slug, searchItem, selectedFilters]);
    const itemsPerPage = 3;

    const totalProducts = Math.ceil(
        filteredProducts.length / itemsPerPage
    );

    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;

        return filteredProducts.slice(
            start,
            start + itemsPerPage
        );
    }, [filteredProducts, currentPage]);

    useEffect(() => {
        setcurrentPage(1);
    }, [selectedFilters, searchItem, slug]);
    const handleExpand = (id: number) => {
        setIsexpand(prev => (prev === id ? null : id))
    }
    // const productSearch = product.filter((item) => (
    //     item.title.toLowerCase().includes(searchItem.toLowerCase())
    // ))
    return (
        <div>
            <div className='flex flex-col md:flex-row gap-10 font-inter'>
                <Buttons variation='outline' className='block sm:hidden' onClick={() => setopenFilter(prev => !prev)}>Filters</Buttons>
                <aside className={`${openFilter ? 'block' : 'hidden'} sm:block max-w-80 w-full p-2`}>
                    {brandOptions.map((item) => {
                        const isOpen = isExpand === item.id;

                        const search =
                            filterSearch[item.title] ?? "";

                        const options = item.options.filter((option) =>
                            option
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        );

                        return (
                            <div key={item.id} className="mb-4">
                                <div
                                    className="flex items-center justify-between cursor-pointer p-2 shadow-sm rounded-md"
                                    onClick={() => handleExpand(item.id)}
                                >
                                    <h1 className="text-lg capitalize">
                                        {item.title}
                                    </h1>

                                    <IoIosArrowDown
                                        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>

                                <hr />

                                {isOpen && (
                                    <div className="mt-2">

                                        <div className="flex items-center gap-2 bg-[#F5F5F5] p-2 rounded-md">
                                            <IoSearchOutline />

                                            <input
                                                type="search"
                                                placeholder="Search"
                                                value={search}
                                                onChange={(e) =>
                                                    handleFilterSearch(
                                                        item.title,
                                                        e.target.value
                                                    )
                                                }
                                                className="outline-none bg-transparent w-full"
                                            />
                                        </div>

                                        <ul className="mt-2">
                                            {options.map((option) => (
                                                <li
                                                    key={option}
                                                    className="flex items-center gap-2 py-1"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedFilters[
                                                            item.title as FilterKey
                                                        ].includes(option)}
                                                        onChange={() =>
                                                            handleCheckboxChange(
                                                                item.title as FilterKey,
                                                                option
                                                            )
                                                        }
                                                    />

                                                    <label>{option}</label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </aside>

                <div>
                    <div>
                        <h1 className='text-2xl'>Select Products</h1>
                    </div>
                    <div className='grid sm:grid-cols-2  lg:grid-cols-3 gap-10'>
                        {paginatedProducts.length > 0 ? (
                            paginatedProducts.map((product) => (
                                <Link href={`/products/${product.slug}`} key={product.id}>
                                    <ProductCard key={product.id} product={product} />
                                </Link>
                            ))
                        ) : (
                            <div className="py-20 text-center">
                                <h2 className="text-2xl font-semibold">
                                    Product Not Found
                                </h2>
                            </div>
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
