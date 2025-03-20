import { Package, Flame, Handshake, Check } from "lucide-react";
import { Badge } from "./ui/badge";


const advantages = [
  {
    icon: Package,
    title: "Wholesale & Bulk Orders",
    description:
      "Supplying premium coffee beans and ground coffee for cafés, restaurants, and businesses worldwide.",
    points: [
      "High-quality, consistent supply",
      "Flexible order quantities",
      "Freshly sourced beans",
    ],
  },
  {
    icon: Flame,
    title: "Custom Roasting",
    description:
      "Tailored roasting profiles to match the unique needs of coffee shops and brands.",
    points: [
      "Personalized roast levels",
      "Precision roasting",
      "Strict quality control",
    ],
  },
  {
    icon: Handshake,
    title: "Corporate & Event Collaboration",
    description:
      "Offering coffee catering, workshops, and event partnerships for businesses and special occasions.",
    points: [
      "Coffee catering services",
      "Educational workshops",
      "Exclusive event partnerships",
    ],
  },
];


export default function AdvantagesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1e3a6e] to-[#152b50] text-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          <Badge className="bg-[#daabad] text-[#1e3a6e] hover:bg-[#f5c6c6] mb-3 py-1 px-3 text-sm font-medium">Why Choose Us</Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 tracking-tight">AB Roasting is Different</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            What sets our coffee apart is our commitment to quality, sustainability, and the perfect coffee experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, title, description, points }) => (
            <div
              key={title}
              className="bg-[#1e3a6e]/40 p-5 md:p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-[#f5c6c6]/30 transition-all group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-[#f5c6c6] h-12 w-12 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-[#f5c6c6]/30 mr-4">
                  <Icon className="h-6 w-6 text-[#1e3a6e]" strokeWidth={2} />
                </div>
                <h3 className="text-lg md:text-xl font-bold group-hover:text-[#f5c6c6] transition-colors">{title}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1 flex-shrink-0">
                      <svg className="h-4 w-4 text-[#f5c6c6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs md:text-sm text-gray-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
