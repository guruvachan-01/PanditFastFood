import { useState } from "react";
import { COLORS, contactInfo } from "../constants";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 4500);
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: 10,
    border: `2px solid ${hasError ? "#e74c3c" : "#eee"}`,
    outline: "none",
    fontSize: 14,
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
    background: "#fafafa",
  });

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
            backgroundImage: `radial-gradient(circle at 62% 42%, ${COLORS.orange}14 0%, transparent 50%)`,
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
          📞 REACH US
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
          Get In <span style={{ color: COLORS.yellow }}>Touch</span>
        </h1>
        <p style={{ color: "#888", fontSize: 15 }}>
          We'd love to hear from you!
        </p>
      </div>

      {/* Main Content */}
      <section style={{ background: COLORS.cream, padding: "80px 24px" }}>
        <div
          className="contact-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 50,
          }}
        >
          {/* Info Column */}
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 30,
                color: COLORS.dark,
                fontWeight: 900,
                marginBottom: 28,
              }}
            >
              Visit Us <span style={{ color: COLORS.orange }}>Today</span>
            </h2>

            {/* Info Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginBottom: 28,
              }}
            >
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "flex-start",
                    background: COLORS.white,
                    padding: "18px 20px",
                    borderRadius: 14,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
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
                  <div style={{ fontSize: 28, flexShrink: 0 }}>{info.icon}</div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#aaa",
                        fontSize: 10,
                        letterSpacing: 1.5,
                        marginBottom: 5,
                      }}
                    >
                      {info.label.toUpperCase()}
                    </div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: COLORS.dark,
                        fontSize: 15,
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919068058202"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#25D366",
                color: COLORS.white,
                padding: "14px 28px",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 15,
                marginBottom: 24,
                boxShadow: "0 8px 30px rgba(37,211,102,0.4)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.04)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <span style={{ fontSize: 22 }}>💬</span> WhatsApp Us
            </a>

            {/* Map Placeholder */}
            <div
              style={{
                background: COLORS.dark,
                borderRadius: 20,
                height: 190,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: `2px solid ${COLORS.yellow}33`,
                marginBottom: 22,
              }}
            >
              <span style={{ fontSize: 52, marginBottom: 12 }}>🗺️</span>
              <div style={{ color: "#aaa", fontSize: 14, fontWeight: 700 }}>
                Dudhla Adda, Bilaspur Road
              </div>
              <div style={{ color: "#555", fontSize: 12, marginTop: 4 }}>
                Google Maps — Pandit Fast Food
              </div>
            </div>

            {/* Social Media */}
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#888",
                  marginBottom: 12,
                }}
              >
                FOLLOW US
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {[
                  { icon: "📘", label: "Facebook", color: "#1877F2" },
                  { icon: "📸", label: "Instagram", color: "#E1306C" },
                  { icon: "🐦", label: "Twitter", color: "#1DA1F2" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      background: COLORS.dark,
                      color: "#aaa",
                      padding: "10px 16px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                      border: `1px solid ${COLORS.yellow}22`,
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.color = s.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = `${COLORS.yellow}22`;
                      e.currentTarget.style.color = "#aaa";
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{s.icon}</span>
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              background: COLORS.white,
              borderRadius: 24,
              padding: "40px 36px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
              border: `1px solid ${COLORS.yellow}22`,
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 26,
                color: COLORS.dark,
                fontWeight: 900,
                marginBottom: 6,
              }}
            >
              Send a Message
            </h3>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 26 }}>
              We'll get back to you within a few hours!
            </p>

            {/* Success */}
            {submitted && (
              <div
                style={{
                  background: `${COLORS.green}18`,
                  border: `1px solid ${COLORS.green}`,
                  borderRadius: 12,
                  padding: "14px 20px",
                  marginBottom: 22,
                  color: COLORS.green,
                  fontWeight: 700,
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                ✅ Message sent! We'll contact you soon.
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {/* Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: 700,
                    color: "#555",
                    fontSize: 13,
                    marginBottom: 6,
                  }}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle(errors.name)}
                  onFocus={(e) => (e.target.style.borderColor = COLORS.yellow)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.name
                      ? "#e74c3c"
                      : "#eee")
                  }
                />
                {errors.name && (
                  <div style={{ color: "#e74c3c", fontSize: 12, marginTop: 4 }}>
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: 700,
                    color: "#555",
                    fontSize: 13,
                    marginBottom: 6,
                  }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 906805...."
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={inputStyle(false)}
                  onFocus={(e) => (e.target.style.borderColor = COLORS.yellow)}
                  onBlur={(e) => (e.target.style.borderColor = "#eee")}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: 700,
                    color: "#555",
                    fontSize: 13,
                    marginBottom: 6,
                  }}
                >
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle(false)}
                  onFocus={(e) => (e.target.style.borderColor = COLORS.yellow)}
                  onBlur={(e) => (e.target.style.borderColor = "#eee")}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontWeight: 700,
                    color: "#555",
                    fontSize: 13,
                    marginBottom: 6,
                  }}
                >
                  Message *
                </label>
                <textarea
                  placeholder="Your order, inquiry or feedback..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  rows={4}
                  style={{
                    ...inputStyle(errors.message),
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = COLORS.yellow)}
                  onBlur={(e) =>
                    (e.target.style.borderColor = errors.message
                      ? "#e74c3c"
                      : "#eee")
                  }
                />
                {errors.message && (
                  <div style={{ color: "#e74c3c", fontSize: 12, marginTop: 4 }}>
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
                  border: "none",
                  color: COLORS.dark,
                  fontWeight: 800,
                  fontSize: 15,
                  padding: "14px",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  boxShadow: `0 6px 25px rgba(255,184,0,0.4)`,
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                📤 Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
