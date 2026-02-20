export default function Hero() {
  return (
    <section className="mx-auto mt-6 max-w-[1440px] px-6 lg:px-10">
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
        <div
          className="absolute inset-0 z-0 h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600")',
          }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        <div className="relative z-20 flex min-h-[500px] flex-col justify-center px-8 py-16 md:px-16 lg:w-1/2 text-left">
          <span className="mb-4 inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            New Arrivals
          </span>
          <h1 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Redefine Your <br /> Everyday Style.
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-200">
            Discover the latest trends in modern minimalist fashion. Premium
            quality essentials designed for the contemporary lifestyle.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0b50da] px-8 text-sm font-bold text-white transition-all hover:bg-[#0941b3] hover:shadow-lg hover:shadow-[#0b50da]/30">
              Shop Collection
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-lg bg-white/10 px-8 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
