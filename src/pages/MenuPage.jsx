import { useState } from 'react';
import { COLORS, menuItems, menuCategories } from '../constants';
import FoodCard from '../components/FoodCard';

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  return (
    <div style={{ paddingTop: 70, minHeight: '100vh', background: COLORS.cream }}>
      {/* Header Banner */}
      <div
        style={{
          background: COLORS.dark,
          padding: '60px 24px 44px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 30% 55%, ${COLORS.orange}14 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            color: COLORS.yellow,
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: 12,
            marginBottom: 12,
          }}
        >
          🍽️ WHAT WE SERVE
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(32px,5vw,54px)',
            color: COLORS.white,
            fontWeight: 900,
            marginBottom: 10,
          }}
        >
          Our <span style={{ color: COLORS.yellow }}>Menu</span>
        </h1>
        <p style={{ color: '#888', fontSize: 15 }}>
          Handcrafted with love, served with pride
        </p>
      </div>

      {/* Filter Bar */}
      <div
        style={{
          background: COLORS.white,
          padding: '18px 24px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          position: 'sticky',
          top: 70,
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background:
                  activeFilter === cat
                    ? `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`
                    : 'transparent',
                border: `2px solid ${activeFilter === cat ? COLORS.yellow : '#ddd'}`,
                color: activeFilter === cat ? COLORS.dark : '#666',
                fontWeight: 700,
                fontSize: 13,
                padding: '8px 22px',
                borderRadius: 25,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                boxShadow:
                  activeFilter === cat ? `0 4px 14px rgba(255,184,0,0.3)` : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Food Cards */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 70px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 80, color: '#aaa', fontSize: 16 }}>
            No items in this category yet. Check back soon! 🍽️
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
