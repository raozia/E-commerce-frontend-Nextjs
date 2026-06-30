/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import React from 'react'
import Buttons from './UI/Buttons'
import Link from 'next/link'
import ProductCard from './ProductCard';
import { catData, popularproducts, products, secondCard } from './data'

const Main = () => {
    return (
        <main>
            <section className='bg-[#211C24]'>
                <div className='px-7 flex flex-col md:flex-row pt-5 md:pt-0 justify-between items-center'>
                    <div className='text-white'>
                        <p className='text-2xl font-semibold text-[#909090]'>Pro.Beyond.</p>
                        <h1 className='text-6xl font-extralight my-6'>IPhone 14 <span className='font-bold'>Pro</span></h1>
                        <p className='text-sm text-[#909090] '>Created to change everything for the better. For everyone</p>
                        {/* <button className='border border-white text-[16px] py-4 px-6 rounded-md mt-6'>Shop Now</button> */}
                        <Buttons variation='outline' className='border border-white text-[16px] text-white py-4 px-6 rounded-md mt-6'>Shop Now</Buttons>
                    </div>
                    <div>
                        <Image src={'/Iphoneimg.png'} alt='heroImage' width={400} height={632} />
                        {/* <img src="/Iphoneimg.png" alt="heroimg" /> */}
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='flex flex-col md:flex-row'>
                        <div>
                            <div className='flex flex-col sm:flex-row items-center gap-6 sm:gap-0 py-10 sm:py-0'>
                                <div>
                                    <Image src={'/playstation.png'} width={360} height={343} alt='playstation' className='hidden sm:block' />
                                    <Image src={'/playstation5.png'} width={200} height={200} alt='playstation' className='block sm:hidden' />
                                </div>
                                <div className='max-w-83 text-center sm:text-start'>
                                    <h1 className='font-bold text-3xl sm:text-5xl'>Playstation 5</h1>
                                    <p className='text-[#909090] text-sm mt-2'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row w-full'>
                                <div className='flex flex-col sm:flex-row py-10 sm:py-0 items-center gap-10 bg-[#EDEDED] w-full sm:w-1/2'>
                                    <div>
                                        <Image src={'/headphone.png'} width={100} height={272} alt='HeadPhones' className='hidden sm:block' />
                                        <Image src={'/airpodsmax.png'} width={192} height={200} alt='HeadPhones' className='block sm:hidden' />
                                    </div>
                                    <div className='w-full sm:max-w-45 sm:pr-12 text-center sm:text-start'>
                                        <h1 className='text-3xl font-extralight'>Apple
                                            AirPods <span className='font-bold'>Max</span></h1>
                                        <p className='text-[#909090] text-sm mt-2'>Computational audio. Listen, its powerful</p>
                                    </div>
                                </div>
                                <div className='flex flex-col sm:flex-row items-center gap-4 py-10 sm:py-0 bg-[#353535] w-full sm:w-1/2'>
                                    <div>
                                        <Image src={'/vrimage.png'} width={136} height={190} alt='VRImage' className='hidden sm:block' />
                                        <Image src={'/vr.png'} width={325} height={192} alt='VRImage' className='block sm:hidden' />
                                    </div>
                                    <div className='w-full sm:max-w-45 sm:pr-12 text-center sm:text-start'>
                                        <h2 className='text-3xl font-extralight text-white'>Apple Vision <span className='font-bold'>Pro</span></h2>
                                        <p className='text-[#909090] text-sm mt-2'>An immersive way to experience entertainment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center justify-between py-5 pl-0 sm:pl-12 bg-[#EDEDED]'>
                            <div className='block sm:hidden'>
                                <Image src={'/macbookpro.png'} width={330} height={200} alt='MacBook' />
                            </div>
                            <div className='max-w-90 text-center sm:text-start'>
                                <h2 className='text-[64px] font-extralight'>Macbook <span className='font-bold'>Air</span></h2>
                                <p className='mt-4 text-sm text-[#909090]'>The new 15 inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                                {/* <button className='border border-black text-[16px] py-4 px-6 rounded-md mt-6'>Shop Now</button> */}
                                <Buttons variation='outline' className='mt-4'>Shop Now</Buttons>
                            </div>
                            <div className='hidden sm:block'>
                                <Image src={'/macbook.png'} width={292} height={502} alt='MacBook' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='py-20 px-7'>
                    <div className=''>
                        <div className='flex justify-between items-center'>
                            <div><h1 className='text-2xl font-bold'>Browse By Category</h1></div>
                            <div><Link href={'#'} className='text-xl font-normal'>View all</Link></div>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-0'>
                            {catData.map((item) => (
                                <Link href={`/categories/${item.slug}`} key={item.id}>
                                    <div className='bg-[#EDEDED] sm:max-w-30 w-full flex justify-center py-6 rounded-lg mt-8'>
                                        <div>
                                            <h1>{item.image}</h1>
                                            <p className='text-[16px] font-light mt-2'>{item.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='py-14 px-7'>
                        <div>
                            <ul className='flex gap-8'>
                                <li><Link href={'#'} className='text-[#8B8B8B] text-lg hover:text-black hover:underline'>New Arrival</Link></li>
                                <li><Link href={'#'} className='text-[#8B8B8B] text-lg hover:text-black hover:underline'>Best Seller</Link></li>
                                <li><Link href={'#'} className='text-[#8B8B8B] text-lg hover:text-black hover:underline'>Featured Products</Link></li>
                            </ul>
                        </div>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                            {products.map((it) => (
                                <Link href={`/products/${it.slug}`} key={it.id}>
                                    <ProductCard product={it} />
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                            {popularproducts.map((element) => (
                                <div className={`${element.bgColor} sm:max-w-90 w-full px-4 py-10 font-inter`} key={element.id} >
                                    <div className='flex justify-center'>
                                        <Image src={element.img} width={360} height={366} alt='Popular Products' />
                                    </div>
                                    <div className='max-w-74 mx-auto text-center sm:text-start'>
                                        <div className=''>
                                            <h1 className={`${element.textColor} text-3xl font-light`}>{element.title}</h1>
                                            <p className='text-sm text-[#909090] mt-4'>{element.desc}</p>
                                        </div>
                                        <div className='mt-4'>
                                            <Buttons variation={element.btnVariation as any}>Shop Now</Buttons>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='py-14 px-7 font-inter'>
                    <div>
                        <h1 className='font-bold text-2xl'>Discounts up to -50%</h1>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                        {secondCard.map((it) => (
                            <ProductCard key={it.id} product={it} />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <div className='font-inter relative'>
                        <Image src={'/banner2.png'} width={1000} height={400} alt='bannerImage' className='w-full' />
                        <div className='flex justify-center items-center'>
                            {/* <div className='absolute top-0'>
                                <h1 className='text-7xl font-extralight'>Big Summer <span className='font-bold'>Sale</span></h1>
                                <p className='text-[16px] text-[#787878]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                                <Buttons >Shop Now</Buttons>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Main
