import { COLORS, navPages, openingHours } from "../constants";

export default function Footer({ setActivePage }) {
  return (
    <footer
      style={{
        background: "#111111",
        padding: "60px 24px 28px",
        color: "#888",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                }}
              >
                🥟
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: 18,
                    color: "#fff",
                  }}
                >
                  Pandit <span style={{ color: COLORS.yellow }}>Fast Food</span>
                </div>
                <div style={{ fontSize: 9, color: "#555", letterSpacing: 2.5 }}>
                  BILASPUR ROAD
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: "#666",
                marginBottom: 20,
              }}
            >
              Your favorite street food destination. Fresh, tasty, and
              affordable snacks made with love every single day.
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "#1e1e1e",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 17,
                    cursor: "pointer",
                    border: `1px solid ${COLORS.yellow}22`,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${COLORS.yellow}22`;
                    e.currentTarget.style.border = `1px solid ${COLORS.yellow}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#1e1e1e";
                    e.currentTarget.style.border = `1px solid ${COLORS.yellow}22`;
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              style={{
                fontWeight: 800,
                color: "#fff",
                fontSize: 15,
                marginBottom: 18,
                paddingBottom: 10,
                borderBottom: `2px solid ${COLORS.yellow}33`,
              }}
            >
              Quick Links
            </div>
            {navPages.map((p) => (
              <button
                key={p}
                onClick={() => setActivePage(p)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  color: "#777",
                  cursor: "pointer",
                  fontSize: 14,
                  padding: "7px 0",
                  textAlign: "left",
                  fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = COLORS.yellow)}
                onMouseLeave={(e) => (e.target.style.color = "#777")}
              >
                → {p}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                fontWeight: 800,
                color: "#fff",
                fontSize: 15,
                marginBottom: 18,
                paddingBottom: 10,
                borderBottom: `2px solid ${COLORS.yellow}33`,
              }}
            >
              Contact Us
            </div>
            {[
              { icon: "📍", text: "Dudhla Adda, Bilaspur Road" },
              { icon: "📞", text: "9627285771" },
              { icon: "📧", text: "Shivang9627285781@gmail.com" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 14,
                  fontSize: 13,
                }}
              >
                <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                <span style={{ color: "#666", lineHeight: 1.55 }}>
                  {item.text}
                </span>
              </div>
            ))}
            {/* WhatsApp */}
            <a
              href="https://wa.me/919068058202"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#25D366",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: 25,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
                marginTop: 6,
                boxShadow: "0 4px 15px rgba(37,211,102,0.35)",
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Hours */}
          <div>
            <div
              style={{
                fontWeight: 800,
                color: "#fff",
                fontSize: 15,
                marginBottom: 18,
                paddingBottom: 10,
                borderBottom: `2px solid ${COLORS.yellow}33`,
              }}
            >
              Opening Hours
            </div>
            {openingHours.map(([day, hrs], i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 12,
                  fontSize: 13,
                  borderBottom: "1px solid #1e1e1e",
                  paddingBottom: 10,
                }}
              >
                <span style={{ color: "#888" }}>{day}</span>
                <span style={{ color: COLORS.yellow, fontWeight: 700 }}>
                  {hrs}
                </span>
              </div>
            ))}
            <div style={{ marginTop: 16 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: `${COLORS.green}18`,
                  border: `1px solid ${COLORS.green}`,
                  borderRadius: 20,
                  padding: "7px 16px",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS.green,
                    display: "inline-block",
                    boxShadow: `0 0 8px ${COLORS.green}`,
                  }}
                />
                <span
                  style={{ color: COLORS.green, fontWeight: 700, fontSize: 12 }}
                >
                  Open Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1e1e1e",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "#444" }}>
            © {new Date().getFullYear()} Pandit Fast Food. All rights reserved.
          </div>
          <div style={{ fontSize: 12, color: "#444" }}>
            Made with ❤️ for Bilaspur
          </div>
        </div>
      </div>
    </footer>
  );
}
