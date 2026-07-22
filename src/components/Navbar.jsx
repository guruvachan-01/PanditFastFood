import { useState, useEffect } from 'react';
import { COLORS, navPages } from '../constants';

export default function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on page change
  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? 'rgba(26,26,26,0.97)'
          : 'rgba(26,26,26,0.88)',
        backdropFilter: 'blur(14px)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5)' : 'none',
        borderBottom: scrolled
          ? `2px solid ${COLORS.yellow}`
          : '2px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Main bar */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70,
        }}
      >
        {/* Logo */}
        <div
          onClick={() => navigate('Home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              boxShadow: `0 4px 18px rgba(255,184,0,0.5)`,
              flexShrink: 0,
            }}
          >
            🥟
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 20,
                color: COLORS.white,
                lineHeight: 1.1,
              }}
            >
              Pandit{' '}
              <span style={{ color: COLORS.yellow }}>Fast Food</span>
            </div>
            <div style={{ fontSize: 9, color: '#888', letterSpacing: 2.5 }}>
              BILASPUR ROAD
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          className="desktop-nav"
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
        >
          {navPages.map((p) => (
            <button
              key={p}
              onClick={() => navigate(p)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: activePage === p ? COLORS.yellow : '#ccc',
                fontWeight: activePage === p ? 700 : 500,
                fontSize: 14,
                padding: '8px 14px',
                borderRadius: 6,
                borderBottom: activePage === p
                  ? `2px solid ${COLORS.yellow}`
                  : '2px solid transparent',
                transition: 'all 0.2s',
                letterSpacing: 0.4,
                fontFamily: 'inherit',
              }}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => navigate('Menu')}
            style={{
              background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
              border: 'none',
              cursor: 'pointer',
              color: COLORS.dark,
              fontWeight: 800,
              fontSize: 13,
              padding: '10px 22px',
              borderRadius: 25,
              marginLeft: 8,
              boxShadow: `0 4px 20px rgba(255,184,0,0.45)`,
              transition: 'all 0.2s',
              fontFamily: 'inherit',
              letterSpacing: 0.4,
            }}
          >
            🛍️ Order Now
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: COLORS.white,
            fontSize: 28,
            padding: '4px 8px',
            lineHeight: 1,
            fontFamily: 'inherit',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            background: COLORS.dark,
            padding: '12px 20px 24px',
            borderTop: `1px solid ${COLORS.yellow}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            animation: 'slideIn 0.2s ease',
          }}
        >
          {navPages.map((p) => (
            <button
              key={p}
              onClick={() => navigate(p)}
              style={{
                background: activePage === p ? `${COLORS.yellow}18` : 'none',
                border: 'none',
                cursor: 'pointer',
                color: activePage === p ? COLORS.yellow : '#ccc',
                fontWeight: activePage === p ? 700 : 500,
                fontSize: 16,
                padding: '12px 16px',
                borderRadius: 10,
                textAlign: 'left',
                fontFamily: 'inherit',
                borderLeft: activePage === p ? `3px solid ${COLORS.yellow}` : '3px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => navigate('Menu')}
            style={{
              background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
              border: 'none',
              cursor: 'pointer',
              color: COLORS.dark,
              fontWeight: 800,
              fontSize: 14,
              padding: '13px 22px',
              borderRadius: 25,
              marginTop: 10,
              fontFamily: 'inherit',
            }}
          >
            🛍️ Order Now
          </button>
        </div>
      )}
    </nav>
  );
}
