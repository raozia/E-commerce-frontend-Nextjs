import CategoryPage from '@/components/categoryPage'
import ProductPage from '@/components/productPage'
import React from 'react'

type PageProps = {
    params: {
        slug: string
    }
}

const Page = async ({ params }: PageProps) => {
    const { slug } = await params;

    return (
        <div>
            <ProductPage params={{ slug }} />
        </div>
    )
}

export default Page
