export default function ContactMap() {
  return (
    <section className="py-6 md:py-8 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            Find Us
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-foreground"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Location
          </h2>
        </div>

        {/* Google Map */}
        <div className="relative h-[300px] md:h-[450px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.815607772606!2d36.81435317362659!3d-1.2845718356214495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11006aa3dc5f%3A0xc8e3072aa27ca921!2sIconic%20Plaza%20Hotel!5e0!3m2!1sen!2ske!4v1768417487340!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Iconic Plaza Hotel Location"
          />
        </div>

        {/* Directions Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <h3
              className="font-heading text-xl text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From JKIA Airport
            </h3>
            <p className="text-muted-foreground text-sm">
              25 minutes drive via Mombasa Road. Airport transfer service
              available upon request.
            </p>
          </div>
          <div className="text-center">
            <h3
              className="font-heading text-xl text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              From Wilson Airport
            </h3>
            <p className="text-muted-foreground text-sm">
              15 minutes drive via Langata Road. Domestic flight connections to
              Maasai Mara and coastal destinations.
            </p>
          </div>
          <div className="text-center">
            <h3
              className="font-heading text-xl text-foreground mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              City Center
            </h3>
            <p className="text-muted-foreground text-sm">
              Located in the heart of Nairobi CBD, walking distance to major
              business and shopping districts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
