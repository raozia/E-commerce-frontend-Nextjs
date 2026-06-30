import { products } from "@/components/data";
import Link from "next/link";

export default async function CategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const { slug } = await params;

    const filteredProducts = products.filter(
        item => item.category === slug
    );

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