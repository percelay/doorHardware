const brands = {
  Doors: [
    "Algoma", "Ambico", "Anything Wood", "Corrim", "Curries",
    "Custom Quality Products", "de La Fontaine", "Daybar", "EZYjamb",
    "Eliason", "Graham Wood Doors", "Harring Wood Doors", "Karpen Steel",
    "Krieger", "Karona", "Maiman", "Mohawk Doors", "Medallion Doors",
    "Next Door Co.", "Overly", "Poncraft", "Stainless Doors", "Steelcraft",
    "VT Industries",
  ],
  Hardware: [
    "Accurate Lock and Hardware", "Adams Rite", "Alarm Lock",
    "Architectural Builders", "Arrow Lock", "Best", "Bommer",
    "Corbin Russwin", "Detex", "Don-Jo", "Dorma", "Dor-O-Matic",
    "Door Controls", "FSB", "Falcon", "Folger Adam", "Glynn-Johnson",
    "Haefele", "Hes Innovations", "Hager Companies", "Ives Schlage", "Kaba",
    "LCN", "McKinney", "Markar", "Marks USA", "Norton",
    "National Guard Products", "Omnia", "Peter Pepper", "Pemko", "Rockwood",
    "Rajack Designs", "Reese", "Rixson", "Schlage", "Sargent", "Securitech",
    "Securitron", "Soss", "Stanley", "Trimco", "Tydix", "Von Duprin",
    "Yale", "Zero",
  ],
  Accessories: [
    "Anemostat", "Air Louvers", "Acudor", "ASI", "Bobrick", "Bradley",
    "Brey Krause", "Karp Inc.",
  ],
};

export default function Partners() {
  return (
    <section id="partners" className="bg-[#F5F5F5] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-black tracking-[0.3em] uppercase text-[#FF8C00] mb-4">
            Our Trusted Partners
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-tight text-black">
            Industry-Leading<br />Brands.
          </h2>
          <div className="w-16 h-0.5 bg-black mt-6" />
        </div>

        {/* Brand categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-black/10">
          {(Object.entries(brands) as [string, string[]][]).map(
            ([category, names], catIdx) => (
              <div
                key={category}
                className={`p-8 md:p-10 ${
                  catIdx < 2 ? "border-b lg:border-b-0 lg:border-r border-black/10" : ""
                }`}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-6 bg-[#FF8C00]" />
                  <h3 className="text-xs font-black tracking-[0.3em] uppercase text-black">
                    {category}
                  </h3>
                </div>

                {/* Brand links */}
                <ul className="flex flex-wrap gap-x-0 gap-y-0">
                  {names.map((name, i) => (
                    <li key={name} className="flex items-center">
                      <a
                        href="#"
                        className="text-sm text-black/40 hover:text-black transition-colors duration-150 font-medium py-1"
                      >
                        {name}
                      </a>
                      {i < names.length - 1 && (
                        <span className="text-black/20 mx-2 text-xs select-none">/</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Bottom note */}
        <p className="text-xs text-[#525252] mt-8 tracking-wide">
          Our preferred manufacturer relationships ensure preferred pricing, priority fulfillment, and full technical support for your projects.
        </p>
      </div>
    </section>
  );
}
