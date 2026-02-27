import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const services = [
  "Estimating & Consulting",
  "Project Management",
  "In-House Welding & Glazing",
  "Locksmith Services",
  "Warehousing & Delivery",
];

const legal = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Accessibility", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      {/* Contact bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start md:items-center">
          <div>
            <p className="text-xs font-black tracking-[0.3em] uppercase text-[#FF8C00] mb-2">
              Ready to Start Your Project?
            </p>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white leading-tight">
              Get a Quote Today.
            </h3>
          </div>
          <a
            href="mailto:info@doorsandhardware.com"
            className="inline-flex items-center gap-3 bg-[#FF8C00] text-white text-xs font-black tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors duration-200"
          >
            <Mail size={14} />
            Contact Us
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-8 bg-[#FF8C00]" />
            <span className="text-sm font-black tracking-widest uppercase leading-none text-white">
              Door<br />Hardware
            </span>
          </div>
          <p className="text-white/50 text-xs leading-relaxed mb-6 max-w-xs">
            The East Coast&apos;s premier source for commercial doors &amp; architectural
            hardware. Precision-engineered solutions since 1909.
          </p>
          <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30">
            Licensed AHC Consultants<br />
            NFPA Life Safety Compliant<br />
            Urban Enterprise Zone
          </p>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="text-xs font-black tracking-[0.3em] uppercase text-white/40 mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-white/20 group-hover:bg-[#FF8C00] group-hover:w-5 transition-all duration-200" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 className="text-xs font-black tracking-[0.3em] uppercase text-white/40 mb-6">
            Contact
          </h4>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-[#FF8C00] mt-0.5 shrink-0" />
              <span className="text-sm text-white/60 leading-relaxed">
                Middlesex County, NJ<br />
                Urban Enterprise Zone
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-[#FF8C00] shrink-0" />
              <a
                href="tel:+17325550100"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                (732) 555-0100
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-[#FF8C00] shrink-0" />
              <a
                href="mailto:info@doorsandhardware.com"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                info@doorsandhardware.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <ExternalLink size={14} className="text-[#FF8C00] shrink-0" />
              <span className="text-xs text-white/40">
                Daily deliveries across Eastern US
              </span>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal */}
        <div>
          <h4 className="text-xs font-black tracking-[0.3em] uppercase text-white/40 mb-6">
            Legal
          </h4>
          <ul className="flex flex-col gap-3 mb-8">
            {legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border border-white/10 p-4">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#FF8C00] mb-1">
              Tax Advantage
            </p>
            <p className="text-xs text-white/50 leading-relaxed">
              Operating within an Urban Enterprise Zone, our clients benefit from
              a reduced 3.5% NJ sales tax rate.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Door Hardware, Inc. All rights reserved.
            Established 1909 &mdash; Middlesex County, NJ.
          </p>
          <p className="text-[10px] text-white/20 tracking-widest uppercase">
            Licensed &bull; Insured &bull; AHC Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
