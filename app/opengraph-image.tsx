import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LIQUE Miami — News & Stories";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #021B2D 0%, #0A2540 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "2px",
            background: "#B98D4B",
            marginBottom: "32px",
          }}
        />
        <div
          style={{
            color: "#B98D4B",
            fontSize: "96px",
            fontFamily: "serif",
            fontWeight: 300,
            letterSpacing: "0.15em",
          }}
        >
          LIQUE
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "28px",
            letterSpacing: "0.3em",
            marginTop: "8px",
            fontWeight: 300,
          }}
        >
          NEWS &amp; STORIES
        </div>
        <div
          style={{
            width: "120px",
            height: "2px",
            background: "#B98D4B",
            marginTop: "32px",
          }}
        />
        <div
          style={{
            color: "#B98D4B",
            fontSize: "18px",
            marginTop: "32px",
            opacity: 0.7,
            letterSpacing: "0.1em",
          }}
        >
          Miami&apos;s Premier Waterfront Restaurant &amp; Nightlife Lounge
        </div>
      </div>
    ),
    { ...size }
  );
}
