import {
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineGlobe,
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
} from 'react-icons/hi'

const values = [
  {
    icon: HiOutlineHeart,
    title: 'Warm Hospitality',
    description:
      'We treat every guest as family, providing warm, personalized service rooted in genuine Kenyan hospitality that makes you feel at home from the moment you arrive.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Uncompromising Excellence',
    description:
      'From the finest Egyptian cotton linens to gourmet cuisine prepared by world-class chefs, we never compromise on quality in any aspect of your stay.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Community First',
    description:
      "We are proud to support local artisans, farmers, and businesses. Over 80% of our supplies are sourced locally, contributing to Kenya's economic growth.",
  },
  {
    icon: HiOutlineGlobe,
    title: 'Sustainable Luxury',
    description:
      "Our commitment to eco-friendly practices includes solar power, water recycling, and zero-waste initiatives that protect Kenya's beautiful environment.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Privacy & Security',
    description:
      'State-of-the-art security systems and discreet service ensure complete privacy and peace of mind for all our distinguished guests.',
  },
  {
    icon: HiOutlineLightBulb,
    title: 'Innovation',
    description:
      'We blend timeless elegance with cutting-edge technology, from smart room controls to seamless digital concierge services.',
  },
]

export default function AboutValues() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            What We Stand For
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-foreground mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Core Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-foreground/10 p-6 lg:p-8 group hover:border-foreground/20 transition-all duration-300 hover:-translate-y-1 rounded-lg lg:rounded-none"
            >
              {/* Icon + Title on same line */}
              <div className="flex items-center gap-3 mb-4">
                <value.icon
                  className="w-5 h-5 lg:w-6 lg:h-6 shrink-0"
                  style={{ color: 'var(--hotel-accent)' }}
                />
                <h3
                  className="font-heading text-lg lg:text-xl text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
