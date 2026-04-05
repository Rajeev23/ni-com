"use client"

import Image from "next/image"
import DottedMap from "dotted-map"

const BERNARD_AVATAR = "https://avatars.githubusercontent.com/u/31113941?v=4"
const THEO_AVATAR = "https://avatars.githubusercontent.com/u/68236786?v=4"
const GLODIE_AVATAR = "https://avatars.githubusercontent.com/u/99137927?v=4"

export const MapIllustration = () => (
  <div
    aria-hidden
    className="relative min-w-lg [--color-background:transparent]"
  >
    <div className="absolute inset-6">
      <div className="absolute top-1/2 left-1/3 z-10 size-8 -translate-x-full rotate-45 rounded-t-full rounded-l-full bg-white p-0.5 shadow-md shadow-black/15">
        <div className="relative size-7 -rotate-45 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
          <Image
            className="aspect-square rounded-full object-cover"
            src={GLODIE_AVATAR}
            alt="Glodie"
            height="100"
            width="100"
          />
        </div>
      </div>
      <div className="absolute top-1/2 right-1/2 z-10 translate-x-full -translate-y-full rotate-45 rounded-t-full rounded-l-full bg-white p-0.5 shadow-md ring-1 shadow-black/15 ring-border-illustration">
        <div className="relative size-7 -rotate-45 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
          <Image
            className="aspect-square rounded-full object-cover"
            src={THEO_AVATAR}
            alt="Theo"
            height="100"
            width="100"
          />
        </div>
      </div>
      <div className="absolute top-1/6 right-1/4 z-10 size-8 translate-x-full -translate-y-full rotate-45 rounded-t-full rounded-l-full bg-white p-0.5 shadow-md shadow-black/15">
        <div className="relative size-7 -rotate-45 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border before:border-foreground/20">
          <Image
            className="aspect-square rounded-full object-cover"
            src={BERNARD_AVATAR}
            alt="Bernard"
            height="100"
            width="100"
          />
        </div>
      </div>
    </div>
    <div className="mask-radial-from-40%">
      <Map />
    </div>
  </div>
)

const map = new DottedMap({ height: 55, grid: "vertical" })
const points = map.getPoints()

const svgOptions = {
  backgroundColor: "var(--color-background)",
  color: "currentColor",
  radius: 0.15,
}

export const Map = () => {
  const viewBox = `0 0 120 60`
  return (
    <svg
      viewBox={viewBox}
      style={{ background: svgOptions.backgroundColor }}
      className="opacity-75"
    >
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r={svgOptions.radius}
          fill={svgOptions.color}
        />
      ))}
    </svg>
  )
}
