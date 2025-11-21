import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDestination, setActiveDestination] = useState(null)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const destinations = [
    {
      id: 1,
      name: 'Maldives',
      tagline: 'Paradise on Earth',
      description: 'Crystal clear turquoise waters, pristine white beaches, and luxury overwater villas',
      price: 'From $2,499',
      duration: '7 Days',
      image: '/designe_poster_1.jpeg',
      highlights: ['Snorkeling', 'Beach Resort', 'Water Sports']
    },
    {
      id: 2,
      name: 'Switzerland',
      tagline: 'Alpine Wonderland',
      description: 'Majestic mountains, charming villages, and breathtaking scenic train journeys',
      price: 'From $3,299',
      duration: '10 Days',
      image: '/designe_poster_2.jpeg',
      highlights: ['Mountain Hiking', 'Scenic Trains', 'Swiss Culture']
    },
    {
      id: 3,
      name: 'Bali',
      tagline: 'Island of Gods',
      description: 'Ancient temples, lush rice terraces, vibrant culture, and tropical beaches',
      price: 'From $1,899',
      duration: '8 Days',
      image: '/designe_poster_3.jpeg',
      highlights: ['Temple Tours', 'Rice Terraces', 'Beach Clubs']
    }
  ]

  const services = [
    {
      id: 1,
      icon: '✈️',
      title: 'Flight Booking',
      description: 'Best deals on international and domestic flights with flexible options'
    },
    {
      id: 2,
      icon: '🏨',
      title: 'Hotel Reservations',
      description: 'Handpicked accommodations from budget to luxury properties'
    },
    {
      id: 3,
      icon: '🗺️',
      title: 'Tour Packages',
      description: 'Curated itineraries designed by travel experts for unforgettable experiences'
    },
    {
      id: 4,
      icon: '🎫',
      title: 'Visa Assistance',
      description: 'Complete visa support and documentation guidance for hassle-free travel'
    },
    {
      id: 5,
      icon: '🚗',
      title: 'Transport',
      description: 'Comfortable and reliable transportation throughout your journey'
    },
    {
      id: 6,
      icon: '📸',
      title: 'Activities',
      description: 'Exciting adventures and unique experiences at every destination'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      text: 'HappyDestinations made our dream honeymoon come true! Every detail was perfect, from the resort to the activities. The team was incredibly responsive and helpful.',
      rating: 5,
      avatar: '👩🏼'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Mumbai, India',
      text: 'Professional service and great value for money. They handled everything from flights to hotels. Our family vacation was stress-free and memorable!',
      rating: 5,
      avatar: '👨🏽'
    },
    {
      id: 3,
      name: 'Emma Williams',
      location: 'London, UK',
      text: 'Best travel agency I have worked with! They customized our itinerary perfectly and provided excellent support throughout our trip. Highly recommended!',
      rating: 5,
      avatar: '👩🏻'
    }
  ]

  const stats = [
    { number: '10K+', label: 'Happy Travelers' },
    { number: '50+', label: 'Destinations' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Satisfaction Rate' }
  ]

  return (
    <div className="app">
      {/* Enhanced Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-container">
          <a href="#home" className="logo-link">
            <img src="/logo.svg" alt="HappyDestinations Logo" className="logo-image" />
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <ul className={mobileMenuOpen ? 'nav-links mobile-open' : 'nav-links'}>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Reviews</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
            <li className="nav-cta">
              <a href="#contact" className="btn-nav" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section id="home" className="hero">
        <div className="hero-background">
          <img src="/hero-image.jpg" alt="Travel Adventure" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">✨ Your Trusted Travel Partner Since 2010</div>
          <h1 className="hero-title">
            Discover Your Next
            <span className="gradient-text"> Adventure</span>
          </h1>
          <p className="hero-subtitle">
            Explore breathtaking destinations, create unforgettable memories, and experience the world with expert guidance
          </p>
          <div className="cta-buttons">
            <a href="#destinations" className="btn btn-primary">
              <span>Explore Destinations</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Plan Your Trip</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="stats-bar">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations - Enhanced */}
      <section id="destinations" className="destinations section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Popular Destinations</span>
            <h2>Explore Our Top Picks</h2>
            <p>Handpicked destinations that promise unforgettable experiences</p>
          </div>

          <div className="destinations-showcase">
            {destinations.map((dest, index) => (
              <div
                key={dest.id}
                className={`destination-card-enhanced ${activeDestination === dest.id ? 'active' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setActiveDestination(dest.id)}
                onMouseLeave={() => setActiveDestination(null)}
              >
                <div className="destination-image-wrapper">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="destination-image-enhanced"
                  />
                  <div className="destination-badge-overlay">{dest.duration}</div>
                </div>

                <div className="destination-content">
                  <div className="destination-header">
                    <div>
                      <h3 className="destination-name">{dest.name}</h3>
                      <p className="destination-tagline">{dest.tagline}</p>
                    </div>
                    <div className="destination-price">{dest.price}</div>
                  </div>

                  <p className="destination-desc">{dest.description}</p>

                  <div className="destination-highlights">
                    {dest.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>

                  <a href="#contact" className="btn-destination">
                    View Details
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Services</span>
            <h2>Everything You Need for Perfect Travel</h2>
            <p>Comprehensive travel solutions tailored to your needs</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon-wrapper">
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Testimonials</span>
            <h2>What Our Travelers Say</h2>
            <p>Real experiences from real adventurers</p>
          </div>

          <div className="testimonials-grid-enhanced">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="testimonial-card-enhanced"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="testimonial-quote">"</div>
                <div className="testimonial-stars">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-location">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Let us help you create memories that last a lifetime</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary btn-large">
                Get Started Today
              </a>
              <a href="tel:+1234567890" className="btn btn-secondary btn-large">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <img src="/logo.svg" alt="HappyDestinations" className="footer-logo" />
              <p>Your trusted partner for unforgettable travel experiences around the globe.</p>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook">📘</a>
                <a href="#instagram" aria-label="Instagram">📷</a>
                <a href="#twitter" aria-label="Twitter">🐦</a>
                <a href="#youtube" aria-label="YouTube">📺</a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Reviews</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><a href="#flights">Flight Booking</a></li>
                <li><a href="#hotels">Hotel Reservations</a></li>
                <li><a href="#tours">Tour Packages</a></li>
                <li><a href="#visa">Visa Assistance</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="footer-links footer-contact">
                <li>
                  <span className="contact-icon">📧</span>
                  <a href="mailto:info@happydestinations.com">info@happydestinations.com</a>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>123 Travel Street, Adventure City</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 HappyDestinations. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span>•</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
