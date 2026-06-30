import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import Buttons from "./UI/Buttons";
import { MdOutlineFavorite } from "react-icons/md";

type ProductCardProps = {
    product: {
        id: string | number;
        image: string;
        title: string;
        price: number;
    };
};

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div>
            <div className='bg-[#EDEDED] w-full sm:max-w-67 py-6 px-4 rounded-md mt-8'>
                <div className='flex justify-end'>
                    <GrFavorite className='w-6 h-6 text-[#909090]' />
                </div>
                <div>
                    <div className='flex justify-center'>
                        <Image src={product.image} width={160} height={160} alt={product.title} />
                    </div>
                    <div className='text-center'>
                        <p className='text-[16px] font-medium mt-4'> {product.title} </p>
                        <h1 className='text-2xl font-semibold mt-4'>${product.price}</h1>
                    </div>
                    <div className='mt-6 flex justify-center'>
                        <Buttons variation='warn'>Shop Now</Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
