import { COLORS, aboutValues } from "../constants";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 70, minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: COLORS.dark,
          padding: "60px 24px 50px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle at 50% 55%, ${COLORS.yellow}13 0%, transparent 60%)`,
            pointerEvents: "none",
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
          📖 OUR STORY
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px,5vw,54px)",
            color: COLORS.white,
            fontWeight: 900,
            marginBottom: 12,
          }}
        >
          About <span style={{ color: COLORS.yellow }}>Pandit Fast Food</span>
        </h1>
        <p
          style={{
            color: "#888",
            fontSize: 15,
            maxWidth: 500,
            margin: "0 auto",
          }}
        >
          A story of passion, authentic flavor, and community love
        </p>
      </div>

      {/* Story Section */}
      <section style={{ background: COLORS.cream, padding: "80px 24px" }}>
        <div
          className="about-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div>
            <div
              style={{
                color: COLORS.orange,
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 2,
                marginBottom: 14,
              }}
            >
              🏠 A LOCAL TREASURE
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px,3.5vw,40px)",
                color: COLORS.dark,
                fontWeight: 900,
                marginBottom: 20,
              }}
            >
              A Local Treasure on{" "}
              <span style={{ color: COLORS.orange }}>Bilaspur Road</span>
            </h2>
            <p
              style={{
                color: "#666",
                lineHeight: 1.85,
                marginBottom: 16,
                fontSize: 15,
              }}
            >
              Pandit Fast Food began as a humble street food stall with one
              simple dream: to serve the most authentic, freshest, and most
              affordable snacks to the people of Bilaspur. Located at Dudhla
              Adda on Bilaspur Road, we've been a beloved neighborhood landmark
              for over a decade.
            </p>
            <p
              style={{
                color: "#666",
                lineHeight: 1.85,
                marginBottom: 24,
                fontSize: 15,
              }}
            >
              Every morning, we source fresh vegetables and ingredients from
              local markets. Every item is prepared with care, hygiene, and the
              authentic recipe that our customers love and trust. From a crispy
              samosa to a plate of steaming momos — each dish carries our heart
              and soul.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {[
                { icon: "🌿", text: "Fresh ingredients daily" },
                { icon: "🧼", text: "Hygienic preparation" },
                { icon: "💚", text: "Made with love" },
                { icon: "👨‍👩‍👧", text: "Family-friendly space" },
                { icon: "🏆", text: "10+ years of service" },
                { icon: "🥦", text: "100% vegetarian" },
              ].map((f, i) => (
                <div
                  key={i}
                  style={{
                    background: COLORS.white,
                    padding: "14px 16px",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: `1px solid ${COLORS.yellow}22`,
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = `${COLORS.yellow}88`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = `${COLORS.yellow}22`)
                  }
                >
                  <span style={{ fontSize: 22 }}>{f.icon}</span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: COLORS.dark,
                    }}
                  >
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Owner */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                margin: "0 auto 22px",
                background: `linear-gradient(135deg, ${COLORS.yellow}33, ${COLORS.orange}22)`,
                border: `4px solid ${COLORS.yellow}44`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 110,
                boxShadow: `0 24px 60px rgba(255,184,0,0.2)`,
                animation: "pulse 4s ease-in-out infinite",
              }}
            >
              👨‍🍳
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 20,
                color: COLORS.dark,
              }}
            >
              Pandit Ji
            </div>
            <div style={{ color: "#888", fontSize: 14, marginBottom: 6 }}>
              Owner & Head Chef
            </div>
            <div
              style={{ color: COLORS.orange, fontSize: 14, fontWeight: 700 }}
            >
              📞 9068058202
            </div>
            <div
              style={{
                display: "inline-block",
                background: `${COLORS.green}18`,
                border: `1px solid ${COLORS.green}`,
                color: COLORS.green,
                padding: "6px 16px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                marginTop: 12,
              }}
            >
              ✅ Verified Local Business
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ background: COLORS.dark, padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px,4vw,42px)",
              color: COLORS.white,
              fontWeight: 900,
              marginBottom: 44,
            }}
          >
            Our <span style={{ color: COLORS.yellow }}>Core Values</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 22,
            }}
          >
            {aboutValues.map((v, i) => (
              <div
                key={i}
                style={{
                  background: "#2D2D2D",
                  borderRadius: 20,
                  padding: "34px 22px",
                  border: `1px solid ${COLORS.yellow}22`,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${COLORS.yellow}66`;
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 16px 40px rgba(255,184,0,0.14)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${COLORS.yellow}22`;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 42, marginBottom: 14 }}>{v.icon}</div>
                <div
                  style={{
                    fontWeight: 800,
                    color: COLORS.white,
                    marginBottom: 10,
                    fontSize: 16,
                  }}
                >
                  {v.title}
                </div>
                <div style={{ fontSize: 13, color: "#999", lineHeight: 1.65 }}>
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section style={{ background: COLORS.cream, padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 24,
            }}
          >
            {[
              { num: "500+", label: "Happy Customers", icon: "😊" },
              { num: "10+", label: "Years of Service", icon: "🏆" },
              { num: "9+", label: "Unique Menu Items", icon: "🍽️" },
              { num: "100%", label: "Vegetarian Food", icon: "🌿" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.white,
                  borderRadius: 20,
                  padding: "28px 20px",
                  textAlign: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  border: `1px solid ${COLORS.yellow}22`,
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32,
                    fontWeight: 900,
                    color: COLORS.orange,
                  }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
