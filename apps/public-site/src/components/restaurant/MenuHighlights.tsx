const menuCategories = [
  {
    category: 'Breakfast',
    items: [
      {
        name: 'Full English Breakfast',
        description:
          'Eggs any style, back bacon, Cumberland sausages, grilled tomatoes, mushrooms, baked beans, hash browns, toast',
      },
      {
        name: 'Kenyan Breakfast',
        description:
          'Mandazi, mahamri, freshly brewed Kenyan chai, farm eggs, seasonal tropical fruits',
      },
      {
        name: 'Eggs Benedict',
        description:
          'Poached eggs on toasted English muffin, smoked salmon or ham, hollandaise sauce',
      },
    ],
  },
  {
    category: 'Main Courses',
    items: [
      {
        name: 'Nyama Choma',
        description:
          'Traditional charcoal-grilled goat ribs or beef, served with ugali, kachumbari, and sukuma wiki',
      },
      {
        name: 'Aged Angus Ribeye',
        description:
          '300g premium dry-aged beef, roasted vegetables, peppercorn sauce, hand-cut fries',
      },
      {
        name: 'Swahili Fish Curry',
        description:
          'Fresh catch in aromatic coconut curry with coastal spices, served with basmati rice',
      },
      {
        name: 'Mombasa Lobster',
        description:
          'Grilled whole lobster, garlic herb butter, seasonal vegetables, saffron rice',
      },
      {
        name: 'Braised Oxtail',
        description:
          'Slow-cooked in rich stout-flavored sauce, creamy mashed potatoes, glazed carrots',
      },
      {
        name: 'Chicken Dania',
        description:
          'Traditional bone-in chicken with coriander, served with chapatti and pilau rice',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Sticky Toffee Pudding',
        description:
          'Warm date sponge, butterscotch sauce, vanilla bean ice cream',
      },
      {
        name: 'Tropical Fruit Platter',
        description:
          'Selection of fresh Kenyan mangoes, pawpaw, pineapple, passion fruit',
      },
      {
        name: 'Lemon Cheesecake',
        description: 'Creamy New York style, citrus curd, berry compote',
      },
    ],
  },
]

export default function MenuHighlights() {
  return (
    <section className="py-16 lg:py-24 bg-[#f8f5f0]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--hotel-accent)' }}
          >
            Our Menu
          </p>
          <h2
            className="font-heading text-3xl lg:text-5xl font-normal text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Menu Highlights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            A selection of our signature dishes, featuring the finest local and
            international ingredients prepared with care and creativity.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 lg:p-8 shadow-md">
              <h3
                className="font-heading text-xl lg:text-2xl text-gray-900 mb-6 pb-4 border-b border-gray-200"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <div key={i}>
                    <h4 className="font-medium text-gray-900 mb-1 text-sm md:text-base">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-xs md:text-sm mt-10">
          Full menu available upon request. We accommodate dietary requirements
          and allergies—please inform our staff.
        </p>
      </div>
    </section>
  )
}
