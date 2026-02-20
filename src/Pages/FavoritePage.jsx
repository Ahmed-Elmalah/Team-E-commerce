import ProductCard from "../Components/FavoriteComponents/ProductCard";

const data = [
  { id: 2, title: "Analog Classic Watch", price: "120.00", category: "Silver Band • 42mm", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=500" },
  { id: 3, title: "H4 Wireless Headphones", price: "299.00", category: "Matte Black • Noise", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500" },
  { id: 4, title: "Pro Run Speedster", price: "159.00", category: "Red/White • US 10", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" },
  { id: 5, title: "Everyday Leather Tote", price: "185.00", category: "Tan • Genuine Leather", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=500" },
  { id: 6, title: "Urban Street Sneakers", price: "89.00", category: "Off-White • Canvas", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500" },
  { id: 7, title: "Radiance Face Serum", price: "45.00", category: "30ml • Vitamin C", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=500" },
  { id: 8, title: "Nordic Ceramic Vase", price: "32.00", category: "Matte White • 8 inch", img: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=500" },
];

export default function FavoritePage() {
  return (
    <div className="max-w-360 mx-auto px-4 py-10">
      <header className="mb-10">
         <h1 className="text-4xl font-black text-text-main dark:text-white">Your Favorites</h1>
         <p className="text-text-secondary mt-2">You have <span className="text-primary font-bold">{data.length} items</span> saved.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}