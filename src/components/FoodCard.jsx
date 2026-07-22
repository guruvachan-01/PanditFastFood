import { useState } from "react";
import { COLORS } from "../constants";
import StarRating from "./StarRating";

export default function FoodCard({ item }) {
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.white,
        borderRadius: 20,
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.14)"
          : "0 4px 20px rgba(0,0,0,0.07)",
        border: `1px solid ${hovered ? COLORS.yellow + "55" : COLORS.yellow + "22"}`,
        overflow: "hidden",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
    >
      {/* Image / Emoji area */}
      <div
        style={{
          height: 150,
          background: hovered
            ? `linear-gradient(135deg, #2a2a2a, ${COLORS.darkGray})`
            : `linear-gradient(135deg, ${COLORS.dark}, #2a2a2a)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 80,
          position: "relative",
          transition: "background 0.3s",
        }}
      >
        <span
          style={{
            transform: hovered ? "scale(1.15)" : "scale(1)",
            transition: "transform 0.3s ease",
            display: "inline-block",
          }}
        >
          {item.emoji}
        </span>

        {/* Price Badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: `linear-gradient(135deg, ${COLORS.yellow}, ${COLORS.orange})`,
            color: COLORS.dark,
            padding: "4px 12px",
            borderRadius: 20,
            fontWeight: 800,
            fontSize: 13,
            boxShadow: `0 4px 12px rgba(255,184,0,0.4)`,
          }}
        >
          ₹{item.price}
        </div>

        {/* Veg Badge */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: `${COLORS.green}22`,
            border: `1px solid ${COLORS.green}`,
            color: COLORS.green,
            padding: "3px 10px",
            borderRadius: 20,
            fontWeight: 600,
            fontSize: 11,
          }}
        >
          Veg 🌿
        </div>
      </div>

      {/* Card Body */}
      <div style={{ padding: "18px 20px" }}>
        <div
          style={{
            fontWeight: 800,
            fontSize: 16,
            color: COLORS.dark,
            marginBottom: 6,
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {item.name}
        </div>
        <p
          style={{
            fontSize: 12,
            color: "#888",
            marginBottom: 12,
            lineHeight: 1.6,
          }}
        >
          {item.desc}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <StarRating rating={item.rating} />
          <span
            style={{
              fontSize: 11,
              color: "#aaa",
              background: "#f5f5f5",
              padding: "2px 8px",
              borderRadius: 10,
            }}
          >
            per {item.unit}
          </span>
        </div>

        {/* Add to Cart Button */}
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
          💬 Order Now
        </a>
      </div>
    </div>
  );
}
