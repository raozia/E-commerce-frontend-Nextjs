import React from 'react'
import { mobiles, productCard, products, secondCard } from './data'
import Image from 'next/image';
import Buttons from './UI/Buttons';
import { FaMobileScreenButton } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from './ProductCard';

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 font-inter py-10'>
                <div>
                    <Image src={product.image} width={413} height={516} alt='Product' />
                </div>
                <div className='max-w-134'>
                    <div>
                        <h1 className='text-4xl font-bold'>{product.title} </h1>
                        <h2 className='text-[32px] font-bold mt-6'>${product.price}</h2>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-sm font-normal mt-6'>Select color:</h1>
                        </div>
                        <div className='mt-6 flex flex-col sm:flex-row gap-4'>
                            <Buttons variation='outline' className='w-full'>132GB</Buttons>
                            <Buttons variation='outline' className='w-full'>256GB</Buttons>
                            <Buttons variation='outline' className='w-full'>512GB</Buttons>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div className='flex gap-2 items-center bg-[#F4F4F4] w-full sm:max-w-42 py-4 px-2 mt-6 rounded-md' key={item}>
                                    <div>
                                        <FaMobileScreenButton className='w-5 h-5' />
                                    </div>
                                    <div>
                                        <h1 className='text-[#A7A7A7]'>Screen Size</h1>
                                        <p className='text-[#4E4E4E]'> 6.7&quot; </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div>
                            <p className='text-[#A7A7A7] text-sm mt-6 leading-6 tracking-widest'>
                                Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day.
                                Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras.
                            </p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
                            <Buttons variation='outline' className='px-14 w-full'>Add to Wishlist</Buttons>
                            <Buttons variation='warn' className='px-14 w-full'>Add to Card</Buttons>
                        </div>

                        <div className='flex justify-between mt-8 '>
                            {[1, 2, 3].map((item) => (
                                <div className='flex gap-4' key={item}>
                                    <div className='bg-[#F6F6F6] p-4 rounded-md' >
                                        <CiDeliveryTruck className='w-6 h-6 text-[#797979]' />
                                    </div>
                                    <div>
                                        <h1 className='text-[#717171] text-sm'>Free Delivery</h1>
                                        <p> 1-2 day</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FAFAFA] py-10 sm:py-20 px-4 sm:px-40 font-inter'>
                <div className='bg-white py-12 px-10'>
                    <h2 className='font-medium text-2xl'>Details</h2>
                    <p className='text-[#9D9D9D] text-sm leading-6 mt-8'>Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display.
                        Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for
                        the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple
                        everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by
                        the products of the Californian brand.
                        And last year&apos;s 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
                    <div className='mt-8'>
                        <h1 className='text-[20px]'>Screen</h1>
                        <div className='flex justify-between mt-2 text-[16px] '>
                            <h2>Screen Diagonal</h2>
                            <p>6.7&quot;</p>
                        </div>
                        <hr className='text-[#CDCDCD]' />
                        <div className='flex justify-between mt-3 text-[16px] '>
                            <h2 className=''>The screen resolution</h2>
                            <p>2796x1290</p>
                        </div>
                        <hr className='text-[#CDCDCD]' />
                        <div className='flex justify-between mt-3 text-[16px] '>
                            <h2 className=''>Screen Refresh Rate</h2>
                            <p>120 Hz</p>
                        </div>
                        <hr className='text-[#CDCDCD]' />
                        <div className='flex justify-between mt-3 text-[16px] '>
                            <h2 className=''>The pixel density</h2>
                            <p>460 ppi</p>
                        </div>
                        <hr className='text-[#CDCDCD]' />
                        <div className='flex justify-between mt-3 text-[16px] '>
                            <h2 className=''>Screen type</h2>
                            <p>OLED</p>
                        </div>
                        <hr className='text-[#CDCDCD]' />
                        <div className='flex justify-between mt-3 text-[16px] '>
                            <h2 className=''>Additionally</h2>
                            <div className='text-end'>
                                <p>Dynamic Island</p>
                                <p>Always-On display</p>
                                <p>HDR display</p>
                                <p>True Tone</p>
                                <p>Wide color (P3)</p>
                            </div>
                        </div>
                        <hr className='text-[#CDCDCD]' />
                        <div>
                            <h1 className='text-[20px]'>CPU</h1>
                        </div>
                        <div className='flex justify-between mt-3 text-[16px] '>
                            <h2 className=''>CPU</h2>
                            <p>A16 Bionic</p>
                        </div>
                        <hr className='text-[#CDCDCD]' />
                        <div className='flex justify-between mt-4 text-[16px] '>
                            <h2 className=''>Number of cores</h2>
                            <p>6</p>
                        </div>

                        <div className='mt-8 flex justify-center'>
                            <Buttons variation='outline' className='flex items-center gap-2'>View More <IoIosArrowDown className='w-5 h-5' />
                            </Buttons>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white font-inter'>
                <div className='py-20 px-4 sm:px-40'>
                    <h1 className='text-2xl font-medium'>Reviews</h1>
                    <div className='flex flex-col md:flex-row gap-15 mt-10'>
                        <div className='bg-[#FAFAFA] w-full sm:max-w-46 p-8 rounded-2xl text-center'>
                            <h1 className='text-5xl font-medium'>4.8</h1>
                            <p className='text-sm text-[#7E7E7E] mt-4'>of 125 reviews</p>
                            <Image src={'/stars.png'} width={100} height={100} alt='Reviews' className='mt-4 mx-auto' />
                        </div>
                        <div className='w-full'>
                            <div className='flex gap-13 items-center'>
                                <label>Excellent</label>
                                <progress max={100} value={60} className='w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-[#FFB547] [&::-moz-progress-bar]:bg-[#FFB547]'></progress>
                            </div>
                            <div className='flex gap-20 items-center'>
                                <label>Good</label>
                                <progress max={100} value={60} className='w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-[#FFB547] [&::-moz-progress-bar]:bg-[#FFB547]'></progress>
                            </div>
                            <div className='flex gap-15 items-center'>
                                <label>Average</label>
                                <progress max={100} value={30} className='w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-[#FFB547] [&::-moz-progress-bar]:bg-[#FFB547]'></progress>
                            </div>
                            <div className='flex gap-7 items-center'>
                                <label>Below Average</label>
                                <progress max={100} value={40} className='w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-[#FFB547] [&::-moz-progress-bar]:bg-[#FFB547]'></progress>
                            </div>
                            <div className='flex gap-22 items-center'>
                                <label>Poor</label>
                                <progress max={100} value={20} className='w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-[#FFB547] [&::-moz-progress-bar]:bg-[#FFB547]'></progress>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder='Leave a comment' className='w-full p-4 border border-[#CECECE] outline-none rounded-md mt-10' />
                    </div>
                    <div className='mt-8 '>
                        {[1, 2, 3].map((item) => (
                            <div className='bg-[#FAFAFA] p-4 flex gap-4 mt-5 rounded-md w-full' key={item}>
                                <div>
                                    <Image src={'/userprofile.png'} width={56} height={56} alt='Profile' />
                                </div>
                                <div>
                                    <div className='flex justify-between'>
                                        <h1 className='text-[17px] font-bold'>Ronald Richards</h1>
                                        <p className='text-sm text-[#7E7E7E] mt-2'>24 January,2023</p>
                                    </div>
                                    <Image src={'/stars.png'} width={80} height={50} alt='Profile' />
                                    <p className='text-sm text-[#7E7E7E] mt-2'>This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones!
                                        (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.</p>
                                </div>
                            </div>
                        ))}
                        <div className='mt-8 flex justify-center'>
                            <Buttons variation='outline' className='flex items-center gap-2'>View More <IoIosArrowDown className='w-5 h-5' />
                            </Buttons>
                        </div>
                    </div>
                    <div>
                        <div className='py-20'>
                            <h1 className='text-2xl font-medium'>Related Products</h1>
                            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                {secondCard.map((it) => (
                                    <ProductCard key={it.id} product={it} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
