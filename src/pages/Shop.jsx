// src/pages/Shop.jsx
import PageWrapper from "../components/PageWrapper"
import Hero from "../components/Hero";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  return ( 
    <PageWrapper>
    <section className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">Our Prints</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{products.map((p) => (
	  <ProductCard key={p.id} product={p} />
	))}
      </div>
    </section>
    </PageWrapper>
  );
}
