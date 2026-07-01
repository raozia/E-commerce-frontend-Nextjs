import Link from 'next/link';
import React from 'react'
import ProductCard from './ProductCard';

type SearchResultItem = {
    id: string | number;
    slug: string;
    image: string;
    title: string;
    price: number;
    [key: string]: unknown;
};

type SearchResultProps = {
    results: SearchResultItem[];
};

const SearchResult = ({ results }: SearchResultProps) => {
    if (results.length === 0) {
        return (
            <div className="py-20 text-center">
                <h2 className="text-2xl font-semibold">
                    Product Not Found
                </h2>
            </div>
        );
    }
    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {results.map((it) => (
                <Link href={`/products/${it.slug}`} key={it.id}>
                    <ProductCard product={it} />
                </Link>
            ))}

        </div>
    )
}

export default SearchResult
