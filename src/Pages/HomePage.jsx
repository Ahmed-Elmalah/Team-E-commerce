import Header from "../Components/HomeComponents/Header";
import ProductCard from "../Components/HomeComponents/ProductCard";
import Hero from "../Components/HomeComponents/Hero";
import CategoryCard from "../Components/HomeComponents/CategoryCard";
import Footer from "../Components/HomeComponents/Footer";
import { FiArrowRight } from "react-icons/fi";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white antialiased">
      <main className="flex-1">
        <Hero />

        {/* Categories Section */}
        <section className="mx-auto mt-12 max-w-[1440px] px-6 lg:px-10">
          <div className="flex items-center justify-between pb-6">
            <h2 className="text-2xl font-bold text-[#0d121c]">
              Shop by Category
            </h2>
            <a
              className="group flex items-center justify-center gap-1 text-md font-semibold text-[#0b50da]"
              href="#"
            >
              View all
              <FiArrowRight />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <CategoryCard
              title="Clothing"
              img="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400"
            />
            <CategoryCard
              title="Shoes"
              img="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"
            />
            <CategoryCard
              title="Accessories"
              img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
            />
            <CategoryCard
              title="Home & Beauty"
              img="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400"
            />
          </div>
        </section>

        {/* Trending Section */}
        <section className="mx-auto my-16 max-w-[1440px] px-6 lg:px-10">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between text-left">
            <div>
              <h2 className="text-3xl font-bold text-[#0d121c]">
                Trending Now
              </h2>
              <p className="mt-2 text-[#49659c]">
                Curated picks popular with our community.
              </p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              <button className="whitespace-nowrap rounded-full bg-[#0d121c] px-4 py-2 text-sm font-medium text-white">
                All
              </button>
              <button className="whitespace-nowrap rounded-full bg-[#f8f9fc] px-4 py-2 text-sm font-medium text-[#49659c] hover:bg-gray-200">
                New In
              </button>
              <button className="whitespace-nowrap rounded-full bg-[#f8f9fc] px-4 py-2 text-sm font-medium text-[#49659c] hover:bg-gray-200">
                Best Sellers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProductCard
              title="Classic White Tee"
              category="Essential Basics"
              price="$25.00"
              img="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
            />
            <ProductCard
              title="Leather Weekend Bag"
              category="Travel & Gear"
              price="$150.00"
              img="https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500"
            />
            <ProductCard
              title="Ceramic Vase"
              category="Home Decor"
              price="$35.00"
              oldPrice="$45.00"
              badge="Sale"
              img="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=500"
            />
            <ProductCard
              title="Minimalist Watch"
              category="Accessories"
              price="$120.00"
              img="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
            />
            <ProductCard
              title="Design Anthology"
              category="Books"
              price="$55.00"
              badge="New"
              img="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
            />
            <ProductCard
              title="Retro Sunglasses"
              category="Accessories"
              price="$18.00"
              soldOut
              badge="Sold Out"
              img="https://images.unsplash.com/photo-1511499767390-a8a196109e92?w=500"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
