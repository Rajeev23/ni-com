import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 600,
}

export const contentType = "image/png"

export default function TwitterImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background:
          "radial-gradient(circle at top right, #1d4ed8 0%, #0f172a 45%, #020617 100%)",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "52px",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#93c5fd",
          display: "flex",
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        Neverinstall
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <p
          style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.12, margin: 0 }}
        >
          Sovereign Enterprise Platform
        </p>
        <p
          style={{
            color: "#dbeafe",
            fontSize: 28,
            lineHeight: 1.3,
            margin: 0,
            maxWidth: 930,
          }}
        >
          Secure Browser, DaaS, and Sovereign HCI across one control plane.
        </p>
      </div>
    </div>,
    size
  )
}
