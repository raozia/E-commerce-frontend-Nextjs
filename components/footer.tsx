import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer>
            <div className='bg-black py-20 px-7 text-white font-inter'>
                <div className='flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center'>
                    <div className='max-w-92'>
                        <h1 className='text-2xl font-bold text-center sm:text-start '>Logo</h1>
                        <p className='text-sm text-[#CFCFCF] mt-6 text-center sm:text-start'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-10 sm:gap-30'>
                        <div>
                            <h2 className='text-[16px] font-semibold text-center sm:text-start'>Services</h2>
                            <div className='mt-6 text-[#CFCFCF] text-sm '>
                                <ul>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Bonus program</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Gift cards</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Credit and payment</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Service contracts</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Non-cash account</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Payment</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div >
                            <h3 className='text-[16px] font-semibold text-center sm:text-start'>Assistance to the buyer</h3>
                            <div className='mt-6 text-[#CFCFCF] text-sm'>
                                <ul>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Find an order</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Terms of delivery</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Exchange and return of goods</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Guarantee</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Frequently asked questions</Link></li>
                                    <li className='py-2 hover:text-white text-center sm:text-start'><Link href="#">Terms of use of the site</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center sm:justify-start'>
                    <div className='flex gap-8 mt-6'>
                        <FaTwitter className='w-5 h-5' />
                        <FaFacebookF className='w-5 h-5' />
                        <IoLogoTiktok className='w-5 h-5' />
                        <RiInstagramFill className='w-5 h-5' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
