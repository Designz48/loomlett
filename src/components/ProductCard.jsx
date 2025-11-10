// src/components/ProductCard.jsx
import { ShoppingCart } from "lucide-react";

/**
 * Re‑usable card for a single product.
 * – Soft rounded corners
 * – Subtle shadow that lifts on hover
 * – Consistent image height (aspect‑ratio)
 * – Bouncy primary‑color CTA button
 */
export default function ProductCard({ product }) {
  const { name, price, img, description } = product

  return (
    <article className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
      {/* ---------- Image ----------
          * `aspect-square` forces a 1:1 ratio so every card gets the same height
          * `object-cover` fills the box without distortion
      */}
      <img
        src={img}
        alt={name}
        className="w-full aspect-square object-cover"
      />

      {/* ---------- Content ----------
          * `flex flex-col flex-grow` lets the description take the remaining space
          * `p-4` gives breathing room
      */}
      <div className="flex flex-col flex-grow p-4">
        <h2 className="text-xl font-semibold text-primary mb-1">{name}</h2>

        <p className="text-sm text-gray-600 flex-grow line-clamp-3">
          {description}
        </p>

        {/* ---------- Footer ----------
            * Flex container for price + button, spaced apart
            * `mt-4` separates from the description
        */}
        <div className="mt-4 flex items-center justify-between">
          <span className="font-bold text-lg text-primary">
            ${price.toFixed(2)}
          </span>

          <button
            className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 hover:bg-primary/20 transition-colors"
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
