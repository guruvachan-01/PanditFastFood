import { COLORS, combos, shopOffers } from '../constants';

export default function ShopPage() {
  return (
    <div style={{ paddingTop: 70, minHeight: '100vh', background: COLORS.cream }}>
      {/* Banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.dark}, #261500)`,
          padding: '60px 24px 50px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 72% 42%, ${COLORS.yellow}14 0%, transparent 50%)`,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            display: 'inline-block',
            background: `${COLORS.orange}22`,
            border: `1px solid ${COLORS.orange}`,
            padding: '8px 22px',
            borderRadius: 20,
            color: COLORS.orange,
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: 1.5,
            marginBottom: 18,
          }}
        >
          🔥 HOT DEALS
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(30px,5vw,54px)',
            color: COLORS.white,
            fontWeight: 900,
            marginBottom: 10,
          }}
        >
          Hot & Fresh Snacks{' '}
          <span style={{ color: COLORS.yellow }}>Everyday</span>
        </h1>
        <p style={{ color: '#999', fontSize: 15 }}>
          Amazing combos at unbeatable prices — only at Pandit Fast Food!
        </p>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '50px 24px 70px' }}>
        {/* Offer Banners */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 22,
            marginBottom: 60,
          }}
        >
          {shopOffers.map((o, i) => (
            <div
              key={i}
              style={{
                background: `linear-gradient(135deg, ${o.bg}, ${o.bg}99)`,
                borderRadius: 20,
                padding: '30px 28px',
                boxShadow: `0 10px 35px ${o.bg}44`,
                color: COLORS.white,
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>
                {o.title}
              </div>
              <div style={{ fontSize: 13, opacity: 0.85 }}>{o.sub}</div>
            </div>
          ))}
        </div>

        {/* Combo Section */}
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              color: COLORS.orange,
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 2,
              marginBottom: 8,
            }}
          >
            🍱 COMBO PACKS
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(24px,3vw,38px)',
              color: COLORS.dark,
              fontWeight: 900,
              marginBottom: 8,
            }}
          >
            Featured <span style={{ color: COLORS.orange }}>Combos</span>
          </h2>
          <p style={{ color: '#888', fontSize: 14 }}>
            Best value combo packs — great savings!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
            gap: 22,
          }}
        >
          {combos.map((c, i) => (
            <div
              key={i}
              style={{
                background: COLORS.white,
                borderRadius: 20,
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
                border: `1px solid ${COLORS.yellow}22`,
                padding: '26px 22px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 18px 44px rgba(0,0,0,0.12)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 18,
                }}
              >
                <div style={{ fontSize: 50 }}>{c.emoji}</div>
                <div
                  style={{
                    background: `${COLORS.yellow}20`,
                    border: `1px solid ${COLORS.yellow}`,
                    color: COLORS.orange,
                    padding: '4px 12px',
                    borderRadius: 20,
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {c.tag}
                </div>
              </div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 17,
                  color: COLORS.dark,
                  marginBottom: 6,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {c.name}
              </div>
              <div style={{ fontSize: 13, color: '#888', marginBottom: 18 }}>{c.items}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 900,
                    color: COLORS.orange,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {c.price}
                </div>
                <button
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
                    border: 'none',
                    color: COLORS.dark,
                    fontWeight: 800,
                    fontSize: 12,
                    padding: '9px 20px',
                    borderRadius: 20,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: `0 4px 14px rgba(255,184,0,0.35)`,
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  Order Combo
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div
          style={{
            marginTop: 60,
            background: COLORS.dark,
            borderRadius: 24,
            padding: '40px 32px',
            textAlign: 'center',
            border: `1px solid ${COLORS.yellow}22`,
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 14 }}>💬</div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 26,
              color: COLORS.white,
              fontWeight: 900,
              marginBottom: 10,
            }}
          >
            Place Your Order on <span style={{ color: '#25D366' }}>WhatsApp</span>
          </h3>
          <p style={{ color: '#888', fontSize: 14, marginBottom: 24 }}>
            Message us directly for custom orders, bulk packs, or event catering!
          </p>
          <a
            href="https://wa.me/919627285781"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#25D366',
              color: COLORS.white,
              padding: '14px 32px',
              borderRadius: 30,
              textDecoration: 'none',
              fontWeight: 800,
              fontSize: 15,
              boxShadow: '0 8px 30px rgba(37,211,102,0.4)',
            }}
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
