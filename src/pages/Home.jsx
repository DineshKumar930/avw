// src/pages/Home.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Hammer, Sofa, Wrench, PaintRoller, ChevronLeft, ChevronRight, 
  Star, ArrowRight, MapPin, Phone, Clock, Sparkles, Award, 
  Users, ThumbsUp, Truck, Shield, Zap, Quote 
} from 'lucide-react';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const slides = [
    {
      image: 'images/sld.jpeg',
      tag: 'श्रेष्ठ शिल्पकला',
      title: ['Custom', 'Furniture'],
      subtitle: 'आपके सपनों के फर्नीचर को देते हैं अनोखा डिज़ाइन, मजबूती और खूबसूरती का नया रूप।',
    },
    {
      image: 'images/sld2.jpeg',
      tag: 'अनुभवी कारीगर',
      title: ['काष्ठ कला', 'के उस्ताद'],
      subtitle: 'आपके घर के हर कोने में हमारी बेहतरीन कारीगरी, जहाँ गुणवत्ता और परफेक्शन की पहचान होती है।',
    },
    {
      image: 'images/sl3.png',
      tag: 'नवीनीकरण की कला',
      title: ['पुरानी यादें,', 'नया अंदाज़'],
      subtitle: 'पुराने फर्नीचर में फिर से जान भरते हैं, यादों को संजोकर देते हैं नई चमक और नई पहचान।',
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [slides.length]);

  const services = [
    { icon: Sofa,        title: 'Custom Furniture', desc: 'Bespoke pieces designed around your vision, space, and lifestyle. Each piece tells a unique story.',       features: ['Custom Design', 'Premium Materials', 'Lifetime Warranty'],   color: '#C9923A' },
    { icon: Hammer,      title: 'Carpenter Work',   desc: 'Precision carpentry for cabinetry, panelling, and joinery. Excellence in every detail.',                   features: ['Expert Craftsmanship', 'Modern Techniques', 'Timely Delivery'], color: '#B07F32' },
    { icon: Wrench,      title: 'Furniture Repair', desc: 'Meticulous restoration to bring your cherished pieces back to life. Reviving family heirlooms.',            features: ['Structural Repair', 'Joint Restoration', 'Hardware Upgrade'],  color: '#9A6D28' },
    { icon: PaintRoller, title: 'Polish & Finish',  desc: 'Premium polishing and finishing for a flawless, lasting result. The perfect final touch.',                  features: ['Natural Finishes', 'Scratch Removal', 'Color Matching'],       color: '#C9923A' },
  ];

  const stats = [
    { value: '50',  suffix: '+',  label: 'Years of Craft',      icon: Award    },
    { value: '500', suffix: '+',  label: 'Projects Delivered',  icon: Users    },
    { value: '100', suffix: '%',  label: 'Client Satisfaction', icon: ThumbsUp },
    { value: '24',  suffix: '/7', label: 'Support Available',   icon: Zap      },
  ];

  const testimonials = [
    { name: 'Amit Singh',  text: 'Best carpenter in Sahjanwa! Made my dream dining table perfectly. Professional and timely. The attention to detail is remarkable.', stars: 5, location: 'Gorakhpur', role: 'Homeowner'        },
    { name: 'Priya Sharma',text: 'Excellent polish work — my old furniture looks brand new. Highly recommend WoodCraft Studio! They exceeded all expectations.',       stars: 5, location: 'Sahjanwa',  role: 'Interior Designer' },
    { name: 'Rahul Verma', text: 'Professional team, delivered on time. Quality of work is outstanding and pricing is fair. Will definitely work with them again.',   stars: 5, location: 'Gorakhpur', role: 'Business Owner'   },
  ];

  const projects = [
    { title: 'Door Restoration',       year: '2024', category: 'Restoration', before: 'images/door2.jpeg', after: '/images/door3.jpeg'  },
    { title: 'Modern Door Makeover',   year: '2024', category: 'Custom',      before: 'images/do.jpeg',    after: 'images/doo.jpeg'     },
    { title: 'Custom Temple Renovation', year: '2023', category: 'Renovation',before: 'images/temp.jpg',   after: 'images/temp2.jpeg'   },
  ];

  return (
    <main className="home-main">

      {/* ── HERO SECTION ──────────────────────────────────────────── */}
      <section ref={heroRef} className="hero-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: heroY }}
          >
            <div className="hero-image" style={{ backgroundImage: `url(${slides[currentSlide].image})` }} />
            <div className="hero-overlay" />
            <div className="hero-vignette" />
          </motion.div>
        </AnimatePresence>

        {/* Decorative lines — desktop only via CSS */}
        <div className="hero-decorative-lines">
          {[0, 1, 2, 3].map(i => (
            <motion.div
              key={i}
              className="decorative-line"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
        </div>

        <div className="hero-content-wrapper">
          <div className="container hero-container">
            <AnimatePresence mode="wait">
              <motion.div key={currentSlide} className="hero-content">

                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="eyebrow"
                >
                  <span className="gold-line" />
                  {slides[currentSlide].tag}
                </motion.div>

                {/* Title */}
                <h1 className="hero-title">
                  {slides[currentSlide].title.map((line, i) => (
                    <span key={i} className="hero-title-line">
                      <motion.span
                        className={i === 0 ? 'hero-title-main' : 'hero-title-accent'}
                        initial={{ opacity: 0, y: 60, skewY: 3 }}
                        animate={{ opacity: 1, y: 0, skewY: 0 }}
                        transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {line}
                      </motion.span>
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Buttons */}
                <motion.div
                  className="hero-buttons"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 }}
                >
                  <Link to="/contact" className="btn-gold">
                    Get Free Estimate <ArrowRight size={15} />
                  </Link>
                  <Link to="/gallery" className="btn-ghost">
                    View Portfolio
                  </Link>
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Controls */}
        <button
          className="slide-control slide-control-left"
          onClick={() => setCurrentSlide(p => (p - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="slide-control slide-control-right"
          onClick={() => setCurrentSlide(p => (p + 1) % slides.length)}
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Progress Dots */}
        <div className="progress-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`progress-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll Hint */}
        <div className="scroll-hint">
          <span className="scroll-hint-text">Scroll</span>
          <div className="scroll-hint-line" />
        </div>
      </section>

      {/* ── MARQUEE ───────────────────────────────────────────────── */}
      <div className="marquee-band" aria-hidden="true">
        <motion.div
          className="marquee-content"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {Array(8).fill('✦ Custom Furniture  ✦ Expert Carpentry  ✦ Polish & Restoration  ✦ Sahjanwa · Gorakhpur  ✦ Quality Guaranteed  ✦ Free Consultation  ').map((text, i) => (
            <span key={i} className="marquee-text">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* ── STATS SECTION ─────────────────────────────────────────── */}
      <section className="stats-section">
        <div className="stats-circle-bg" />
        <div className="stats-circle-bg stats-circle-bg-small" />

        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.12, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon">
                    <Icon size={30} />
                  </div>
                  <div className="stat-number">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="stat-divider" />
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ──────────────────────────────────────── */}
      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="eyebrow"><span className="gold-line" />What We Offer</div>
              <h2 className="section-heading">Our <em>Premium</em><br />Services</h2>
            </div>
            <p className="services-header-text">
              From bespoke creations to expert restoration — every project receives the same meticulous
              attention to detail and uncompromising quality.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isHovered = hoveredService === i;
              return (
                <motion.div
                  key={i}
                  className="service-card"
                  onHoverStart={() => setHoveredService(i)}
                  onHoverEnd={() => setHoveredService(null)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="service-card-watermark">{String(i + 1).padStart(2, '0')}</div>

                  <motion.div
                    className="service-icon-wrapper"
                    animate={{ rotate: isHovered ? 10 : 0 }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>

                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-check">✓</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to="/services" className="service-link">
                    Learn More
                    <motion.span animate={{ x: isHovered ? 4 : 0 }}>
                      <ArrowRight size={14} />
                    </motion.span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BEFORE/AFTER SECTION ──────────────────────────────────── */}
      <section className="beforeafter-section">
        <div className="beforeafter-bg" />

        <div className="container">
          <div className="beforeafter-header">
            <div className="eyebrow centered"><span className="gold-line" />Our Transformations</div>
            <h2 className="section-heading">Before &amp; <em>After</em></h2>
            <p className="beforeafter-subtitle">
              Witness the extraordinary transformations our craftsmen deliver with precision and artistry.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="project-images">
                  <div className="project-image-wrapper">
                    <span className="image-label before">BEFORE</span>
                    <img src={project.before} alt={`${project.title} before`} className="project-image" loading="lazy" />
                  </div>
                  <div className="project-image-wrapper">
                    <span className="image-label after">AFTER</span>
                    <img src={project.after} alt={`${project.title} after`} className="project-image" loading="lazy" />
                  </div>
                  <div className="image-divider" />
                </div>

                <div className="project-info">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-year">{project.year}</p>
                  </div>
                  <div className="project-arrow">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="gallery-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/gallery" className="btn-gold">View Full Gallery <ArrowRight size={15} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS SECTION ──────────────────────────────────── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div className="eyebrow centered"><span className="gold-line" />Client Voices</div>
            <h2 className="section-heading">What Our <em>Clients</em> Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, k) => (
                    <Star
                      key={k}
                      size={16}
                      fill={k < testimonial.stars ? '#C9923A' : 'none'}
                      color={k < testimonial.stars ? '#C9923A' : '#333'}
                    />
                  ))}
                </div>

                <div className="testimonial-quote">
                  <Quote size={48} />
                </div>

                <p className="testimonial-text">"{testimonial.text}"</p>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name[0]}</div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-location">
                      <MapPin size={11} /> {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="testimonials-footer">
            <Link to="/reviews" className="btn-ghost">Read All Reviews <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="cta-overlay" />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="cta-sparkle"
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
            style={{ top: `${15 + i * 13}%`, left: `${5 + i * 15}%` }}
          >
            <Sparkles size={14} />
          </motion.div>
        ))}

        <div className="container cta-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow centered"><span className="gold-line" />Start Your Project</div>
            <h2 className="section-heading cta-title">
              Ready to Transform<br /><em>Your Space?</em>
            </h2>
            <p className="cta-description">
              Get a free, no-obligation estimate for your furniture or carpentry project today.
            </p>

            <div className="cta-features">
              <div className="cta-feature">
                <div className="feature-icon"><Phone size={14} /></div>
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <div className="feature-icon"><Clock size={14} /></div>
                <span>Fast Turnaround</span>
              </div>
              <div className="cta-feature">
                <div className="feature-icon"><Truck size={14} /></div>
                <span>Free Delivery</span>
              </div>
              <div className="cta-feature">
                <div className="feature-icon"><Shield size={14} /></div>
                <span>1 Year Warranty</span>
              </div>
            </div>

            <Link to="/contact" className="btn-gold cta-button">
              Get Free Estimate <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

/* ── Counter Component ──────────────────────────────────────── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target.replace(/\D/g, ''), 10);
    let start = 0;
    const step = Math.ceil(num / 60);
    const id = setInterval(() => {
      start = Math.min(start + step, num);
      setCount(start);
      if (start >= num) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default Home;