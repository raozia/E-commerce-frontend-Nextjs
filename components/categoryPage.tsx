import React from 'react'
import { products } from './data';
import Link from 'next/link';

const CategoryPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;

    const filteredProducts = products.filter(
        item => item.category === slug
    );
    console.log("productslist>>>>>>>>>>>>>>>>", filteredProducts)
    return (
        <div>
            {filteredProducts.map(product => (
                <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                >
                    {product.title}
                </Link>
            ))}
        </div>
    );
}

export default CategoryPage
