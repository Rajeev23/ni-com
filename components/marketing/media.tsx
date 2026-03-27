"use client"

import { ReactSVG } from "react-svg"

type InlineSvgProps = {
  src: string
  className?: string
  title?: string
}

export function InlineSvg({ src, className, title }: InlineSvgProps) {
  return (
    <ReactSVG
      src={src}
      className={className}
      beforeInjection={(svg) => {
        if (!title) {
          return
        }

        const titleNode = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "title"
        )
        titleNode.textContent = title
        svg.prepend(titleNode)
      }}
    />
  )
}
