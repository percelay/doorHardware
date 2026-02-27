import Image from "next/image";
import { ShieldCheck, Award, Building2 } from "lucide-react";

const credentials = [
  {
    icon: Award,
    label: "Licensed AHC Professionals",
    desc: "150+ years combined industry-certified experience",
  },
  {
    icon: ShieldCheck,
    label: "NFPA Life Safety Compliant",
    desc: "Division 8 & 10 packages executed flawlessly",
  },
  {
    icon: Building2,
    label: "Urban Enterprise Zone",
    desc: "Reduced 3.5% sales tax passed directly to clients",
  },
];

export default function About() {
  return (
    <section id="about" className="min-h-[90vh] grid md:grid-cols-2">
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0 bg-white">
        {/* Eyebrow */}
        <p className="text-xs font-black tracking-[0.3em] uppercase text-[#FF8C00] mb-6">
          About Us
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-tight text-black mb-8">
          Over a Century of Industry Excellence.
        </h2>

        <div className="w-16 h-0.5 bg-black mb-8" />

        <p className="text-[#525252] text-base md:text-lg leading-relaxed max-w-lg mb-12">
          Located in the heart of Middlesex County, NJ, our 50,000-square-foot
          facility operates within an Urban Enterprise Zone—passing along a
          reduced 3.5% sales tax rate directly to our clients. With over 150
          years of combined, industry-certified experience, our licensed
          Architectural Hardware Consultants (AHC) ensure your Division 8 and
          10 packages are executed flawlessly. From NFPA life safety compliance
          to value engineering, we pride ourselves on getting the job done right
          the first time, every time.
        </p>

        {/* Credential cards */}
        <div className="flex flex-col gap-4">
          {credentials.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-start gap-4 border border-black/10 p-4 group hover:border-black transition-colors duration-200"
            >
              <div className="p-2 border border-black/10 group-hover:border-black transition-colors duration-200 shrink-0">
                <Icon size={16} className="text-[#FF8C00]" />
              </div>
              <div>
                <p className="text-xs font-black tracking-widest uppercase text-black">{label}</p>
                <p className="text-xs text-[#525252] mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Image */}
      <div className="relative min-h-[50vh] md:min-h-0 bg-[#F5F5F5]">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
          alt="Our 50,000 sq ft warehouse facility"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Corner accent */}
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FF8C00]" />
        <div className="absolute bottom-4 left-4 text-white text-xs font-black tracking-widest uppercase z-10">
          Est. 1909
        </div>
      </div>
    </section>
  );
}
