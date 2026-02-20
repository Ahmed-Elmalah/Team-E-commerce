
export default function CategoryCard({ title, img }) {
  return (
    <a
      className="group relative block overflow-hidden rounded-xl bg-gray-100 pt-[100%]"
      href="#"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"></div>
      <span className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-sm font-bold text-[#0d121c] backdrop-blur-sm">
        {title}
      </span>
    </a>
  );
}
