import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background:
          "linear-gradient(130deg, #04070d 0%, #0a1220 45%, #11213f 100%)",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "56px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(148, 163, 184, 0.45)",
          borderRadius: "999px",
          color: "#cbd5e1",
          fontSize: 26,
          letterSpacing: 2,
          padding: "8px 20px",
          textTransform: "uppercase",
        }}
      >
        Neverinstall
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <p
          style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, margin: 0 }}
        >
          Secure Enterprise AI Workspaces
        </p>
        <p
          style={{
            color: "#cbd5e1",
            fontSize: 30,
            lineHeight: 1.35,
            margin: 0,
            maxWidth: 980,
          }}
        >
          Secure enterprise desktops and browsers. One platform, two work modes,
          any deployment.
        </p>
      </div>
    </div>,
    size
  )
}
