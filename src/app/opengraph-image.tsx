import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Al Nile Fish — Premium Fresh Seafood Import & Export from UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050B14 0%, #0A1628 40%, #12233D 70%, #1B6B93 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(197, 165, 114, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "1px solid rgba(27, 107, 147, 0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            border: "1px solid rgba(197, 165, 114, 0.06)",
            display: "flex",
          }}
        />

        {/* Top gold line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #C5A572, transparent)",
            display: "flex",
          }}
        />

        {/* Fish logo */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 80 80"
          fill="none"
          style={{ marginBottom: "24px" }}
        >
          <circle cx="40" cy="40" r="36" stroke="#C5A572" strokeWidth="1.5" />
          <path
            d="M22 40C22 40 30 28 46 28C54 28 58 34 58 40C58 46 54 52 46 52C30 52 22 40 22 40Z"
            fill="#C5A572"
          />
          <path
            d="M18 32C18 32 22 40 18 48C22 44 26 40 22 40C26 40 22 36 18 32Z"
            fill="#C5A572"
          />
          <circle cx="50" cy="39" r="2.5" fill="#050B14" />
        </svg>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "2px",
              display: "flex",
            }}
          >
            Al Nile Fish
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#C5A572",
              letterSpacing: "8px",
              textTransform: "uppercase" as const,
              display: "flex",
            }}
          >
            Premium Fresh Seafood
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #C5A572, transparent)",
            margin: "28px 0",
            display: "flex",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Import & Export — Umm Al Quwain, UAE Since 1981
        </div>

        {/* Certification badges */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "32px",
          }}
        >
          {["HACCP", "ISO 22000", "EU Approved", "GMP"].map((cert) => (
            <div
              key={cert}
              style={{
                padding: "8px 20px",
                border: "1px solid rgba(197, 165, 114, 0.3)",
                borderRadius: "20px",
                color: "#C5A572",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "2px",
                display: "flex",
              }}
            >
              {cert}
            </div>
          ))}
        </div>

        {/* Bottom gold line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #C5A572, transparent)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
