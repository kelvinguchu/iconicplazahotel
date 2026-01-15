import { useState, useEffect } from 'react'
import { HiStar } from 'react-icons/hi'
import { motion, AnimatePresence } from 'motion/react'

const testimonials = [
  {
    title: 'Great Hotel!',
    text: 'An absolutely wonderful experience! The staff went above and beyond to make our stay memorable. The rooms were immaculate and the views were breathtaking.',
    author: 'Sarah Johnson',
    role: 'Customer review',
    avatar: '/images/about.jpg',
  },
  {
    title: 'Highly Recommended!',
    text: 'A restaurant with exceptional service. From the moment we arrived, we felt like royalty. Highly recommended for anyone seeking luxury.',
    author: 'Michael Chen',
    role: 'Customer review',
    avatar: '/images/about.jpg',
  },
  {
    title: 'Exceptional Experience!',
    text: 'The spa treatments were divine and the restaurant served the most delicious cuisine. We will definitely be returning for our anniversary.',
    author: 'Emily Roberts',
    role: 'Customer review',
    avatar: '/images/about.jpg',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const current = testimonials[currentIndex]

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section
      className="relative py-24 lg:py-32 bg-cover bg-center bg-fixed overflow-hidden"
      style={{ backgroundImage: "url('/images/room1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* 5 Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <HiStar
                key={i}
                className="w-4 h-4 md:w-5 md:h-5"
                style={{ color: 'var(--hotel-accent)' }}
              />
            ))}
          </div>

          {/* Animated Content */}
          <div className="relative min-h-[350px] md:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                {/* Title */}
                <h3
                  className="font-heading text-xl md:text-2xl lg:text-3xl text-white mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {current.title}
                </h3>

                {/* Testimonial Text */}
                <p
                  className="text-white/80 text-base md:text-lg leading-relaxed mb-8 italic px-4 md:px-0"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {current.text}
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 mb-4">
                    <img
                      src={current.avatar}
                      alt={current.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="font-medium"
                    style={{ color: 'var(--hotel-accent)' }}
                  >
                    {current.author}
                  </p>
                  <p className="text-white/60 text-sm">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                  i === currentIndex
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
