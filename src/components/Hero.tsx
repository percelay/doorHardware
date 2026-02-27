import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        alt="Industrial warehouse facility"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay — industrial cinematic grade */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        }}
      />

      {/* Orange accent bar — top */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#FF8C00]" />

      {/* Text — anchored bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24">
        <div className="site-container">
          <div className="max-w-4xl">
          {/* Eyebrow */}
            <p className="text-[#FF8C00] text-xs font-black tracking-[0.3em] uppercase mb-6">
              Est. 1909 &mdash; Middlesex County, NJ
            </p>

          {/* Headline */}
            <h1 className="text-white font-black text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.92] tracking-tight uppercase mb-8">
              The East Coast&rsquo;s Premier Source for{" "}
              <span className="text-[#FF8C00]">Commercial Doors</span>{" "}
              &amp; Hardware.
            </h1>

          {/* Sub */}
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              Serving contractors and building owners since 1909. We stock,
              build, and deliver premium hollow metal doors, architectural
              hardware, and wood doors with uncompromising precision.
            </p>

          {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block bg-[#FF8C00] text-white text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-200"
              >
                Request a Quote
              </a>
              <a
                href="#services"
                className="inline-block border border-white/30 text-white text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-200"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — bottom right */}
      <div className="absolute left-0 right-0 bottom-16 md:bottom-24 hidden lg:block">
        <div className="site-container flex justify-end">
          <div className="flex flex-col gap-6">
            {[
              { value: "115+", label: "Years in Business" },
              { value: "50K", label: "Sq Ft Facility" },
              { value: "3.5%", label: "Sales Tax Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-right border-r border-[#FF8C00] pr-4">
                <div className="text-white font-black text-2xl leading-none">{stat.value}</div>
                <div className="text-white/50 text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
