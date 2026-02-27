import {
  Calculator,
  ClipboardList,
  Wrench,
  KeyRound,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Estimating & Consulting",
    body: "Accurate, competitive quotes and expert specification writing by licensed AHC professionals. We take the guesswork out of Division 8 and 10 packages.",
    tag: "AHC Certified",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    body: "End-to-end oversight, shop drawings, hardware schedules, and value engineering. Your project, managed with precision from submittal to closeout.",
    tag: "Full Lifecycle",
  },
  {
    icon: Wrench,
    title: "In-House Welding & Glazing",
    body: "Factory-trained specialists ready for rapid turnaround on frame modifications and vision lite installations. No outsourcing, no delays.",
    tag: "On-Site Fabrication",
  },
  {
    icon: KeyRound,
    title: "Locksmith Services",
    body: "Full-time Certified Master Locksmiths handling everything from basic repairs to intricate electronic access control systems.",
    tag: "Master Certified",
  },
  {
    icon: Truck,
    title: "Warehousing & Delivery",
    body: "Fully insured storage and daily job site deliveries via our dedicated truck fleet across the Eastern US. Your materials, on time.",
    tag: "Eastern US Coverage",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-block bg-black">
      <div className="site-container">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-black tracking-[0.3em] uppercase text-[#FF8C00] mb-4">
            What We Do
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.92] tracking-tight text-white">
              Full-Spectrum<br />Door Solutions.
            </h2>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              From specification through final inspection, our capabilities
              cover every phase of your commercial door and hardware project.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isWide = i === 3 || i === 4;

            return (
              <div
                key={service.title}
                className={`bg-white p-8 group hover:bg-[#F5F5F5] transition-colors duration-200 border border-white/0 hover:border-black/10 ${
                  isWide ? "md:col-span-1" : ""
                } ${i === 3 ? "md:col-span-2" : ""}`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={28} className="text-[#FF8C00]" strokeWidth={1.5} />
                </div>

                {/* Tag */}
                <p className="text-[10px] font-black tracking-[0.25em] uppercase text-black/40 mb-3">
                  {service.tag}
                </p>

                {/* Title */}
                <h3 className="text-xl font-black uppercase tracking-tight text-black mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-8 h-px bg-black mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Body */}
                <p className="text-[#525252] text-sm leading-relaxed">{service.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
