"use client";
import React, { useMemo, useState } from "react";

const coastal = {
  teal: "#0E9BA4",
  deep: "#0A6D74",
  sea: "#E6F3F3",
  sand: "#F6EFE7",
  navy: "#173A5E",
};

export default function Page() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: `linear-gradient(180deg, ${coastal.sea}, #ffffff)`,
          padding: "64px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: coastal.teal,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Coastal Aesthetic • Worldwide
          </div>
          <h1
            style={{
              color: coastal.navy,
              fontSize: 48,
              marginTop: 16,
            }}
          >
            Coastal Staging Studio
          </h1>
          <p
            style={{
              color: "#334155",
              fontSize: 18,
              maxWidth: 600,
              margin: "12px auto 0",
            }}
          >
            High-quality virtual home staging. Fast 24–48 hour turnaround. Realistic, buyer-ready
            images with a modern coastal touch.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        style={{
          padding: "64px 20px",
          background: coastal.sand,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              color: coastal.teal,
              textTransform: "uppercase",
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: 1,
            }}
          >
            Portfolio
          </div>
          <h2
            style={{
              color: coastal.navy,
              fontSize: 32,
              marginTop: 8,
            }}
          >
            Before & After Showcase
          </h2>
          <p style={{ color: "#475569" }}>Coastal, modern, and airy spaces staged beautifully.</p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Coastal Living Room",
              before: "/portfolio/living1-before.jpg",
              after: "/portfolio/living1-after.jpg",
            },
            {
              title: "Dining Room Refresh",
              before: "/portfolio/dining1-before.jpg",
              after: "/portfolio/dining1-after.jpg",
            },
            {
              title: "Primary Suite",
              before: "/portfolio/bedroom1-before.jpg",
              after: "/portfolio/bedroom1-after.jpg",
            },
            {
              title: "Study Update",
              before: "/portfolio/study1-before.jpg",
              after: "/portfolio/study1-after.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <div style={{ background: "#f1f5f9", padding: 12 }}>
                <div
                  style={{
                    fontSize: 12,
                    color: "#475569",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Before
                </div>
                <img
                  src={item.before}
                  alt={`${item.title} — before`}
                  style={{ width: "100%", display: "block", borderRadius: 8 }}
                  loading="lazy"
                />
              </div>
              <div style={{ background: "#F6EFE7", padding: 12 }}>
                <div
                  style={{
                    fontSize: 12,
                    color: "#475569",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  After
                </div>
                <img
                  src={item.after}
                  alt={`${item.title} — after`}
                  style={{ width: "100%", display: "block", borderRadius: 8 }}
                  loading="lazy"
                />
              </div>
              <div
                style={{
                  padding: 12,
                  textAlign: "center",
                  fontWeight: 700,
                  color: coastal.navy,
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: coastal.navy,
          color: "#fff",
          textAlign: "center",
          padding: "24px 20px",
          marginTop: 40,
        }}
      >
        © {new Date().getFullYear()} Coastal Staging Studio — Virtual Home Staging
      </footer>
    </main>
  );
}

