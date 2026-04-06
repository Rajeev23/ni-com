import Script from "next/script"

const MDB_PIXEL_ID = process.env.NEXT_PUBLIC_MDB_PIXEL_ID

export function MdbPixel() {
  if (!MDB_PIXEL_ID) return null

  return (
    <Script
      src={`https://p.mdb.tools/v1/${MDB_PIXEL_ID}?options=${encodeURIComponent('{"domain":"neverinstall.com"}')}`}
      strategy="afterInteractive"
    />
  )
}
