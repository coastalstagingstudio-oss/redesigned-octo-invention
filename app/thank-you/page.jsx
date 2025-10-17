
export const metadata = { title: "Thank You — Coastal Staging Studio" };

export default function ThankYouPage() {
  const navy = "#173A5E";
  const teal = "#0E9BA4";
  const sea = "#E6F3F3";

  return (
    <main>
      <section
        style={{
          minHeight: "60vh",
          padding: "64px 20px",
          background: `linear-gradient(180deg, ${sea}, #ffffff)`,
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ color: navy, fontSize: 40, marginBottom: 12 }}>
            Thank You for Your Payment!
          </h1>
          <p style={{ color: "#334155", fontSize: 18 }}>
            We’ve received your order. Please reply to your confirmation email
            with your room photos (or share a folder link). We’ll deliver your
            staged images within <b>24–48 hours</b>.
          </p>

          <div style={{ marginTop: 28 }}>
            <a
              href="/"
              style={{
                display: "inline-block",
                background: teal,
                color: "white",
                padding: "12px 18px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Back to Home
            </a>
          </div>

          <p style={{ color: "#64748b", marginTop: 20, fontSize: 14 }}>
            Questions? Email us at{" "}
            <a href="mailto:usseryken@gmail.com">usseryken@gmail.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
