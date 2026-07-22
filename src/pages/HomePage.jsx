import { useState, useEffect } from 'react';
import { COLORS, features, foodCategories, menuItems, reviews, faqs, galleryEmojis, galleryColors } from '../constants';
import FoodCard from '../components/FoodCard';
import StarRating from '../components/StarRating';

export default function HomePage({ setActivePage }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [reviewIdx, setReviewIdx]           = useState(0);
  const [openFaq, setOpenFaq]               = useState(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setReviewIdx((i) => (i + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: '100vh',
          background: COLORS.dark,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 70,
        }}
      >
        {/* Gradient blobs */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              radial-gradient(circle at 18% 52%, ${COLORS.orange}20 0%, transparent 50%),
              radial-gradient(circle at 82% 20%, ${COLORS.yellow}16 0%, transparent 42%)
            `,
            pointerEvents: 'none',
          }}
        />

        {/* Floating food emojis bg */}
        {['🥟', '🍔', '🍜', '🧆', '🥢'].map((e, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              fontSize: 28 + i * 8,
              opacity: 0.1,
              top: `${10 + i * 14}%`,
              left: i % 2 === 0 ? `${4 + i * 4}%` : `${74 + i * 3}%`,
              animation: `float${i} ${3 + i}s ease-in-out infinite`,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            {e}
          </div>
        ))}

        <div
          className="hero-grid"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '60px 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Left: Copy */}
          <div style={{ animation: 'fadeInUp 0.7s ease both' }}>
            <div
              style={{
                display: 'inline-block',
                background: `${COLORS.yellow}20`,
                border: `1px solid ${COLORS.yellow}55`,
                padding: '6px 18px',
                borderRadius: 20,
                color: COLORS.yellow,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
                marginBottom: 22,
              }}
            >
              🔥 BILASPUR'S FAVORITE STREET FOOD
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(34px, 5.5vw, 64px)',
                color: COLORS.white,
                lineHeight: 1.15,
                marginBottom: 18,
                fontWeight: 900,
              }}
            >
              Your Favorite<br />
              <span style={{ color: COLORS.yellow }}>Street Food</span><br />
              Destination
            </h1>

            <p
              style={{
                fontSize: 18,
                color: '#bbb',
                marginBottom: 10,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              Fresh • Tasty • Affordable
            </p>
            <p
              style={{
                fontSize: 15,
                color: '#888',
                marginBottom: 36,
                maxWidth: 430,
                lineHeight: 1.75,
              }}
            >
              Enjoy hot and crispy snacks with authentic taste at Pandit Fast Food.
              Made with love, served with happiness on Bilaspur Road.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                onClick={() => setActivePage('Menu')}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
                  border: 'none',
                  color: COLORS.dark,
                  fontWeight: 800,
                  fontSize: 15,
                  padding: '14px 32px',
                  borderRadius: 30,
                  cursor: 'pointer',
                  boxShadow: `0 8px 30px rgba(255,184,0,0.5)`,
                  fontFamily: 'inherit',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                🛍️ Order Now →
              </button>
              <button
                onClick={() => setActivePage('Menu')}
                style={{
                  background: 'transparent',
                  border: `2px solid ${COLORS.yellow}55`,
                  color: COLORS.white,
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '14px 32px',
                  borderRadius: 30,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.yellow;
                  e.currentTarget.style.color = COLORS.yellow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${COLORS.yellow}55`;
                  e.currentTarget.style.color = COLORS.white;
                }}
              >
                🍽️ Explore Menu
              </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 32, marginTop: 44, flexWrap: 'wrap' }}>
              {[['500+', 'Happy Customers'], ['9+', 'Menu Items'], ['10+', 'Years Serving'], ['100%', 'Vegetarian']].map(
                ([num, label]) => (
                  <div key={label}>
                    <div
                      style={{
                        fontSize: 26,
                        fontWeight: 900,
                        color: COLORS.yellow,
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {num}
                    </div>
                    <div style={{ fontSize: 11, color: '#666', letterSpacing: 0.5 }}>{label}</div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: Hero visual */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: 320,
                height: 320,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${COLORS.orange}30, ${COLORS.yellow}18, transparent)`,
                border: `3px solid ${COLORS.yellow}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 160,
                animation: 'pulse 3s ease-in-out infinite',
                boxShadow: `0 0 80px ${COLORS.orange}30`,
                position: 'relative',
              }}
            >
              🥟
              <div
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 16,
                  background: COLORS.green,
                  color: COLORS.white,
                  padding: '6px 14px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 700,
                  boxShadow: `0 4px 15px rgba(46,204,113,0.5)`,
                }}
              >
                Fresh Daily! 🌿
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 32,
                  left: 8,
                  background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
                  color: COLORS.dark,
                  padding: '8px 16px',
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: 800,
                  boxShadow: `0 4px 15px rgba(255,184,0,0.5)`,
                }}
              >
                Starting ₹12 🔥
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section style={{ background: COLORS.cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px,4vw,42px)',
                color: COLORS.dark,
                fontWeight: 900,
                marginBottom: 10,
              }}
            >
              Why Choose{' '}
              <span style={{ color: COLORS.orange }}>Pandit Fast Food?</span>
            </h2>
            <p style={{ color: '#888', fontSize: 15 }}>
              We deliver more than food — we deliver happiness
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: 22,
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.white,
                  borderRadius: 20,
                  padding: '32px 20px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: `1px solid ${COLORS.yellow}22`,
                  transition: 'all 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(255,184,0,0.18)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                }}
              >
                <div style={{ fontSize: 44, marginBottom: 14 }}>{f.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 15, color: COLORS.dark, marginBottom: 8 }}>
                  {f.title}
                </div>
                <div style={{ fontSize: 13, color: '#888', lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOD CATEGORIES ──────────────────────────────────────────────── */}
      <section style={{ background: COLORS.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px,4vw,42px)',
                color: COLORS.white,
                fontWeight: 900,
                marginBottom: 10,
              }}
            >
              Popular <span style={{ color: COLORS.yellow }}>Categories</span>
            </h2>
            <p style={{ color: '#777' }}>Pick your favorite and dig in!</p>
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            {foodCategories.map((cat, i) => (
              <div
                key={i}
                onClick={() => setActiveCategory(i)}
                style={{
                  background:
                    activeCategory === i
                      ? `linear-gradient(135deg, ${cat.color}, ${cat.color}aa)`
                      : '#2D2D2D',
                  borderRadius: 20,
                  padding: '26px 30px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  minWidth: 120,
                  border: `2px solid ${activeCategory === i ? cat.color : 'transparent'}`,
                  transform: activeCategory === i ? 'scale(1.07)' : 'scale(1)',
                  boxShadow: activeCategory === i ? `0 10px 30px ${cat.color}55` : 'none',
                  transition: 'all 0.3s',
                }}
              >
                <div style={{ fontSize: 44, marginBottom: 10 }}>{cat.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.white }}>
                  {cat.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ─────────────────────────────────────────────────── */}
      <section style={{ background: COLORS.cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div
              style={{
                color: COLORS.orange,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              🔥 HOT & POPULAR
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px,4vw,42px)',
                color: COLORS.dark,
                fontWeight: 900,
              }}
            >
              Best <span style={{ color: COLORS.orange }}>Selling Items</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
              gap: 24,
            }}
          >
            {menuItems.slice(0, 6).map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <button
              onClick={() => setActivePage('Menu')}
              style={{
                background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
                border: 'none',
                color: COLORS.dark,
                fontWeight: 800,
                fontSize: 15,
                padding: '14px 42px',
                borderRadius: 30,
                cursor: 'pointer',
                fontFamily: 'inherit',
                boxShadow: `0 8px 30px rgba(255,184,0,0.4)`,
              }}
            >
              View Full Menu →
            </button>
          </div>
        </div>
      </section>

      {/* ── DAILY SPECIAL OFFER ──────────────────────────────────────────── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${COLORS.dark}, #261500)`,
          padding: '80px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: 340,
            height: 340,
            borderRadius: '50%',
            background: `${COLORS.yellow}10`,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: `${COLORS.yellow}20`,
              border: `1px solid ${COLORS.yellow}`,
              padding: '8px 22px',
              borderRadius: 20,
              color: COLORS.yellow,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 1.5,
              marginBottom: 22,
            }}
          >
            ⏰ TODAY'S SPECIAL
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(28px,4.5vw,50px)',
              color: COLORS.white,
              fontWeight: 900,
              marginBottom: 14,
            }}
          >
            Hot & Fresh Snacks{' '}
            <span style={{ color: COLORS.yellow }}>Everyday!</span>
          </h2>
          <p style={{ color: '#999', fontSize: 15, marginBottom: 44, maxWidth: 480, margin: '0 auto 44px' }}>
            Starting from just ₹12 — no compromise on taste, quality, or freshness.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 20,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 44,
            }}
          >
            {[
              { offer: 'Buy 2 Burgers', bonus: 'Get 1 Free 🎁', bg: COLORS.orange },
              { offer: 'Weekend Special', bonus: 'Momos @ ₹25 🥢', bg: '#9B59B6' },
              { offer: 'Morning Combo', bonus: 'Samosa + Chai ☕', bg: COLORS.green },
            ].map((o, i) => (
              <div
                key={i}
                style={{
                  background: `${o.bg}22`,
                  border: `1px solid ${o.bg}`,
                  borderRadius: 18,
                  padding: '22px 28px',
                  minWidth: 170,
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div style={{ color: o.bg, fontWeight: 800, fontSize: 15, marginBottom: 6 }}>
                  {o.offer}
                </div>
                <div style={{ color: COLORS.white, fontWeight: 600, fontSize: 14 }}>
                  {o.bonus}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setActivePage('Contact')}
            style={{
              background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
              border: 'none',
              color: COLORS.dark,
              fontWeight: 800,
              fontSize: 15,
              padding: '14px 42px',
              borderRadius: 30,
              cursor: 'pointer',
              fontFamily: 'inherit',
              boxShadow: `0 8px 30px rgba(255,184,0,0.5)`,
            }}
          >
            📞 Contact to Order
          </button>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ background: COLORS.cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              color: COLORS.orange,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            ❤️ OUR CHERISHED PATRONS
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(26px,4vw,42px)',
              color: COLORS.dark,
              fontWeight: 900,
              marginBottom: 40,
            }}
          >
            What People{' '}
            <span style={{ color: COLORS.orange }}>Say About Us</span>
          </h2>

          <div
            style={{
              background: COLORS.white,
              borderRadius: 24,
              padding: '44px 36px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
              border: `1px solid ${COLORS.yellow}22`,
              transition: 'all 0.4s ease',
            }}
          >
            <div style={{ fontSize: 64, marginBottom: 12 }}>{reviews[reviewIdx].avatar}</div>
            <div style={{ fontSize: 64, color: COLORS.yellow, lineHeight: 0.8, marginBottom: 14 }}>"</div>
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>
              {reviews[reviewIdx].text}
            </p>
            <StarRating rating={reviews[reviewIdx].rating} />
            <div style={{ fontWeight: 800, fontSize: 15, color: COLORS.dark, marginTop: 12 }}>
              {reviews[reviewIdx].name}
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 22 }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIdx(i)}
                style={{
                  width: i === reviewIdx ? 28 : 10,
                  height: 10,
                  borderRadius: 5,
                  background: i === reviewIdx ? COLORS.orange : '#ddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────── */}
      <section style={{ background: COLORS.dark, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px,4vw,42px)',
                color: COLORS.white,
                fontWeight: 900,
              }}
            >
              Our <span style={{ color: COLORS.yellow }}>Gallery</span>
            </h2>
          </div>
          <div
            className="gallery-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          >
            {galleryEmojis.map((emoji, i) => (
              <div
                key={i}
                style={{
                  background: `${galleryColors[i]}20`,
                  borderRadius: 18,
                  height: i === 0 || i === 4 ? 200 : 148,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 64,
                  border: `1px solid ${galleryColors[i]}44`,
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = `0 10px 30px ${galleryColors[i]}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: COLORS.cream, padding: '80px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(26px,4vw,42px)',
                color: COLORS.dark,
                fontWeight: 900,
              }}
            >
              Frequently Asked{' '}
              <span style={{ color: COLORS.orange }}>Questions</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.white,
                  borderRadius: 16,
                  border: `1px solid ${openFaq === i ? COLORS.yellow : '#eeeeee'}`,
                  overflow: 'hidden',
                  boxShadow: openFaq === i ? `0 4px 24px rgba(255,184,0,0.14)` : 'none',
                  transition: 'all 0.3s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '18px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontWeight: 700, fontSize: 15, color: COLORS.dark }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: COLORS.orange,
                      fontSize: 18,
                      transition: 'transform 0.3s',
                      transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    ▼
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      color: '#666',
                      fontSize: 14,
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
