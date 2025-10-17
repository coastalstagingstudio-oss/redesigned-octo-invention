
export const metadata = {
  title: "Coastal Staging Studio",
  description: "Virtual Home Staging — Worldwide",
};

export default function RootLayout({ children }) {
  const teal = "#0E9BA4";
  const navy = "#173A5E";
  const seafoam = "#E6F3F3";

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "ui-sans-serif, system-ui, Arial" }}>
        {/* Sticky brand header */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: `1px solid ${seafoam}`,
            background: `linear-gradient(180deg, ${seafoam}, #ffffff)`,
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <img
              src="/coastal_logo.png"
              alt="Coastal Staging Studio"
              style={{ height: 56, width: "auto", display: "block" }}
            />
            <div style={{ color: navy, fontWeight: 800 }}>
              Coastal Staging Studio
              <div
                style={{
                  fontSize: 12,
                  color: teal,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Virtual Home Staging — Worldwide
              </div>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
