import ProductDetails from '@/components/productDetails'
import React from 'react'

type PageProps = {
    params: {
        slug: string
    }
}

const Page = ({ params }: PageProps) => {
    return (
        <div>
            <ProductDetails params={params} />
        </div>
    )
}

export default Page
