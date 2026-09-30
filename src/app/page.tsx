import { FiShoppingBag, FiMenu } from "react-icons/fi";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header className="border-b border-[#eee3de] bg-[#fffaf7]">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-semibold tracking-wide text-[#b85c72]">
              Tullipious
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm text-[#2f2926] transition hover:text-[#b85c72]"
            >
              Home
            </a>

            <a
              href="#shop"
              className="text-sm text-[#2f2926] transition hover:text-[#b85c72]"
            >
              Shop
            </a>

            <a
              href="#about"
              className="text-sm text-[#2f2926] transition hover:text-[#b85c72]"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm text-[#2f2926] transition hover:text-[#b85c72]"
            >
              Contact
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Shopping bag"
              className="text-[#2f2926] transition hover:text-[#b85c72]"
            >
              <FiShoppingBag size={21} />
            </button>

            <button
              aria-label="Menu"
              className="text-[#2f2926] md:hidden"
            >
              <FiMenu size={23} />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
<section
  id="home"
  className="relative overflow-hidden bg-[#fffaf7]"
>
  <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

    {/* Left Content */}
    <div className="max-w-xl">

      <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-[#b85c72]">
        Flowers made with love
      </p>

      <h2 className="font-serif text-5xl leading-[1.1] text-[#2f2926] sm:text-6xl lg:text-7xl">
        Let every
        <span className="block italic text-[#b85c72]">
          moment bloom.
        </span>
      </h2>

      <p className="mt-7 max-w-lg text-base leading-7 text-[#766b66] sm:text-lg">
        Thoughtfully arranged flowers for birthdays, celebrations,
        special moments, and everything in between.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-wrap items-center gap-4">

        <a
          href="#shop"
          className="rounded-full bg-[#b85c72] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#9f4c61]"
        >
          Shop Flowers
        </a>

        <a
          href="#about"
          className="rounded-full border border-[#d9c9c3] px-7 py-3.5 text-sm font-medium text-[#2f2926] transition hover:border-[#b85c72] hover:text-[#b85c72]"
        >
          Our Story
        </a>

      </div>

      {/* Small Info */}
      <div className="mt-12 flex items-center gap-8 border-t border-[#eaded9] pt-6">

        <div>
          <p className="text-xl font-semibold text-[#2f2926]">
            100+
          </p>
          <p className="mt-1 text-xs uppercase tracking-wider text-[#8b7d77]">
            Flower varieties
          </p>
        </div>

        <div className="h-10 w-px bg-[#eaded9]" />

        <div>
          <p className="text-xl font-semibold text-[#2f2926]">
            Fresh
          </p>
          <p className="mt-1 text-xs uppercase tracking-wider text-[#8b7d77]">
            Every morning
          </p>
        </div>

      </div>
    </div>

    {/* Right Image */}
    <div className="relative mx-auto w-full max-w-lg">

      {/* Decorative circle */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#f3dce1] opacity-70" />

      <div className="relative overflow-hidden rounded-[12rem_12rem_2rem_2rem]">
        <img
          src="/images/tulip.png"
          alt="Beautiful flower bouquet"
          className="h-[600px] w-full object-cover"
        />
      </div>

      {/* Floating text */}
      <div className="absolute bottom-8 -left-6 rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur-sm">
        <p className="text-xs uppercase tracking-widest text-[#8b7d77]">
          Hand picked
        </p>
        <p className="mt-1 font-serif text-lg italic text-[#2f2926]">
          Just for you
        </p>
      </div>

    </div>

  </div>
</section>

{/* Shop by Occasion */}
<section id="shop" className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Section Heading */}
    <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#b85c72]">
          Find the perfect flowers
        </p>

        <h2 className="font-serif text-4xl text-[#2f2926] sm:text-5xl">
          Shop by occasion
        </h2>
      </div>

      <a
        href="#"
        className="text-sm font-medium text-[#2f2926] underline underline-offset-8 transition hover:text-[#b85c72]"
      >
        View all flowers →
      </a>
    </div>

    {/* Categories */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {/* Birthday */}
      <a
        href="#"
        className="group relative h-[360px] overflow-hidden rounded-[2rem]"
      >
        <img
          src="/images/birthday.jpg"
          alt="Birthday flowers"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

        <div className="absolute bottom-0 left-0 p-7 text-white">
          <p className="text-xs uppercase tracking-[0.2em]">
            Celebrate
          </p>

          <h3 className="mt-2 font-serif text-3xl">
            Birthday
          </h3>
        </div>
      </a>

      {/* Anniversary */}
      <a
        href="#"
        className="group relative h-[360px] overflow-hidden rounded-[2rem]"
      >
        <img
          src="/images/aniversary.jpg"
          alt="Anniversary flowers"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

        <div className="absolute bottom-0 left-0 p-7 text-white">
          <p className="text-xs uppercase tracking-[0.2em]">
            For love
          </p>

          <h3 className="mt-2 font-serif text-3xl">
            Anniversary
          </h3>
        </div>
      </a>

      {/* Wedding */}
      <a
        href="#"
        className="group relative h-[360px] overflow-hidden rounded-[2rem]"
      >
        <img
          src="/images/weeding.jpg"
          alt="Wedding flowers"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

        <div className="absolute bottom-0 left-0 p-7 text-white">
          <p className="text-xs uppercase tracking-[0.2em]">
            Your special day
          </p>

          <h3 className="mt-2 font-serif text-3xl">
            Wedding
          </h3>
        </div>
      </a>

      {/* Just Because */}
      <a
        href="#"
        className="group relative h-[360px] overflow-hidden rounded-[2rem]"
      >
        <img
          src="/images/just-because.jpg"
          alt="Beautiful flowers"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

        <div className="absolute bottom-0 left-0 p-7 text-white">
          <p className="text-xs uppercase tracking-[0.2em]">
            A little surprise
          </p>

          <h3 className="mt-2 font-serif text-3xl">
            Just Because
          </h3>
        </div>
      </a>

    </div>
  </div>
</section>

{/* Featured Flowers */}
<section className="bg-[#fffaf7] py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    {/* Heading */}
    <div className="mb-12 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#b85c72]">
        Our favorites
      </p>

      <h2 className="font-serif text-4xl text-[#2f2926] sm:text-5xl">
        Featured flowers
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#766b66] sm:text-base">
        Beautifully arranged blooms, freshly selected and thoughtfully
        designed for every special moment.
      </p>
    </div>

    {/* Products */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* Product 1 */}
      <div className="group">

        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f4e9e5]">
          <img
            src="/images/rose-bouquet.jpg"
            alt="Classic Rose Bouquet"
            className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#b85c72]">
            Bestseller
          </span>

          <button
            className="absolute bottom-4 left-4 right-4 rounded-full bg-white/95 py-3 text-sm font-medium text-[#2f2926] opacity-0 shadow-sm transition duration-300 group-hover:opacity-100"
          >
            Add to cart
          </button>
        </div>

        <div className="pt-5">
          <p className="text-xs uppercase tracking-wider text-[#9a8b85]">
            Roses
          </p>

          <h3 className="mt-2 font-serif text-2xl text-[#2f2926]">
            Classic Rose Bouquet
          </h3>

          <p className="mt-2 font-medium text-[#b85c72]">
            Rs. 2,500
          </p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="group">

        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f4e9e5]">
          <img
            src="/images/pink-bloom.jpg"
            alt="Pink Blossom"
            className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <button
            className="absolute bottom-4 left-4 right-4 rounded-full bg-white/95 py-3 text-sm font-medium text-[#2f2926] opacity-0 shadow-sm transition duration-300 group-hover:opacity-100"
          >
            Add to cart
          </button>
        </div>

        <div className="pt-5">
          <p className="text-xs uppercase tracking-wider text-[#9a8b85]">
            Spring collection
          </p>

          <h3 className="mt-2 font-serif text-2xl text-[#2f2926]">
            Pink Blossom
          </h3>

          <p className="mt-2 font-medium text-[#b85c72]">
            Rs. 3,000
          </p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="group">

        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f4e9e5]">
          <img
            src="/images/white-garden.jpg"
            alt="White Garden Bouquet"
            className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <button
            className="absolute bottom-4 left-4 right-4 rounded-full bg-white/95 py-3 text-sm font-medium text-[#2f2926] opacity-0 shadow-sm transition duration-300 group-hover:opacity-100"
          >
            Add to cart
          </button>
        </div>

        <div className="pt-5">
          <p className="text-xs uppercase tracking-wider text-[#9a8b85]">
            Elegant
          </p>

          <h3 className="mt-2 font-serif text-2xl text-[#2f2926]">
            White Garden
          </h3>

          <p className="mt-2 font-medium text-[#b85c72]">
            Rs. 2,800
          </p>
        </div>
      </div>

    
      <div className="group">

        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#f4e9e5]">
          <img
            src="/images/sunset-bouquet.jpg"
            alt="Sunset Bouquet"
            className="h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#b85c72]">
            New
          </span>

          <button
            className="absolute bottom-4 left-4 right-4 rounded-full bg-white/95 py-3 text-sm font-medium text-[#2f2926] opacity-0 shadow-sm transition duration-300 group-hover:opacity-100"
          >
            Add to cart
          </button>
        </div>

        <div className="pt-5">
          <p className="text-xs uppercase tracking-wider text-[#9a8b85]">
            New arrival
          </p>

          <h3 className="mt-2 font-serif text-2xl text-[#2f2926]">
            Sunset Bouquet
          </h3>

          <p className="mt-2 font-medium text-[#b85c72]">
            Rs. 3,500
          </p>
        </div>
      </div>

    </div>

  
    <div className="mt-12 text-center">
      <button className="rounded-full border border-[#d9c9c3] px-8 py-3.5 text-sm font-medium text-[#2f2926] transition hover:border-[#b85c72] hover:text-[#b85c72]">
        View all flowers
      </button>
    </div>

  </div>
</section>


<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

  
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[#b85c72]">
        The Bloomora difference
      </p>

      <h2 className="font-serif text-4xl leading-tight text-[#2f2926] sm:text-5xl">
        Flowers with a little more feeling
      </h2>

      <p className="mt-5 text-sm leading-7 text-[#766b66] sm:text-base">
        Every bouquet is carefully selected, thoughtfully arranged,
        and prepared to make your special moments even more beautiful.
      </p>
    </div>

  
    <div className="mt-16 grid border-y border-[#eaded9] sm:grid-cols-3">

      
      <div className="px-6 py-10 text-center sm:border-r sm:border-[#eaded9] lg:px-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e8eb]">
          <span className="text-2xl">✿</span>
        </div>

        <h3 className="mt-6 font-serif text-2xl text-[#2f2926]">
          Always Fresh
        </h3>

        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#766b66]">
          We select fresh blooms regularly so every bouquet arrives
          looking beautiful and vibrant.
        </p>
      </div>

     
      <div className="px-6 py-10 text-center sm:border-r sm:border-[#eaded9] lg:px-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e8eb]">
          <span className="text-2xl">♡</span>
        </div>

        <h3 className="mt-6 font-serif text-2xl text-[#2f2926]">
          Made With Love
        </h3>

        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#766b66]">
          Each arrangement is handcrafted with care and attention
          to every little detail.
        </p>
      </div>

     
      <div className="px-6 py-10 text-center lg:px-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f8e8eb]">
          <span className="text-2xl">✧</span>
        </div>

        <h3 className="mt-6 font-serif text-2xl text-[#2f2926]">
          Thoughtful Delivery
        </h3>

        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#766b66]">
          From our studio to their doorstep, we make every delivery
          part of the experience.
        </p>
      </div>

    </div>
  </div>
</section>

<section id="about" className="bg-[#f8f1ed] py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

    {/* Image */}
    <div className="relative">
      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="/images/soft-beige.png"
          alt="Flowers arranged by hand"
          className="h-[550px] w-full object-cover"
        />
      </div>

      
      <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white px-6 py-5 shadow-lg sm:-right-6">
        <p className="font-serif text-2xl text-[#b85c72]">
          Since 2024
        </p>

        <p className="mt-1 text-xs uppercase tracking-wider text-[#8b7d77]">
          Blooming with love
        </p>
      </div>
    </div>

    <div className="lg:pl-8">

      <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#b85c72]">
        Our story
      </p>

      <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2f2926] sm:text-5xl">
        A little story
        <span className="block italic text-[#b85c72]">
          behind every bloom.
        </span>
      </h2>

      <p className="mt-7 text-base leading-8 text-[#766b66]">
        Bloomora began with a simple idea — flowers have a beautiful
        way of saying what words sometimes cannot.
      </p>

      <p className="mt-5 text-base leading-8 text-[#766b66]">
        From a single rose to a carefully designed bouquet, we believe
        every arrangement should feel personal, thoughtful, and
        memorable.
      </p>

      <p className="mt-5 text-base leading-8 text-[#766b66]">
        That's why we carefully select our flowers and create each
        arrangement with attention to the smallest details.
      </p>

      <a
        href="#contact"
        className="mt-8 inline-flex rounded-full bg-[#b85c72] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[#9f4c61]"
      >
        Discover our story
      </a>
    </div>

  </div>
</section>


<section className="bg-[#fffaf7] py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

   
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#b85c72]">
        Kind words
      </p>

      <h2 className="mt-4 font-serif text-4xl text-[#2f2926] sm:text-5xl">
        Loved by flower lovers
      </h2>
    </div>


    <div className="mt-14 grid gap-6 md:grid-cols-3">

   
      <div className="rounded-[2rem] border border-[#eaded9] bg-white p-8">
        <div className="text-sm tracking-[0.25em] text-[#b85c72]">
          ★★★★★
        </div>

        <p className="mt-6 font-serif text-xl leading-8 text-[#2f2926]">
          "The bouquet was even more beautiful than I expected.
          Every little detail felt so thoughtful."
        </p>

        <div className="mt-8 border-t border-[#eee3de] pt-5">
          <p className="text-sm font-medium text-[#2f2926]">
            Alien Brocelin.
          </p>

          <p className="mt-1 text-xs text-[#9a8b85]">
            Biratnagar
          </p>
        </div>
      </div>

     
      <div className="rounded-[2rem] border border-[#eaded9] bg-white p-8">
        <div className="text-sm tracking-[0.25em] text-[#b85c72]">
          ★★★★★
        </div>

        <p className="mt-6 font-serif text-xl leading-8 text-[#2f2926]">
          "I ordered flowers for my sister's birthday and she
          absolutely loved them. Beautiful and fresh!"
        </p>

        <div className="mt-8 border-t border-[#eee3de] pt-5">
          <p className="text-sm font-medium text-[#2f2926]">
            Riya Rai.
          </p>

          <p className="mt-1 text-xs text-[#9a8b85]">
            Ithari
          </p>
        </div>
      </div>

    
      <div className="rounded-[2rem] border border-[#eaded9] bg-white p-8">
        <div className="text-sm tracking-[0.25em] text-[#b85c72]">
          ★★★★★
        </div>

        <p className="mt-6 font-serif text-xl leading-8 text-[#2f2926]">
          "The ordering process was simple and the flowers arrived
          beautifully arranged. I'll definitely order again."
        </p>

        <div className="mt-8 border-t border-[#eee3de] pt-5">
          <p className="text-sm font-medium text-[#2f2926]">
            Chandani C.
          </p>

          <p className="mt-1 text-xs text-[#9a8b85]">
            Duhabi
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}