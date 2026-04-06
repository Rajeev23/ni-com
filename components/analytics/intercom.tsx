"use client"

import { useEffect } from "react"

const INTERCOM_APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Intercom bootstrap requires window mutation
type IntercomWindow = Window & typeof globalThis & { [key: string]: any }

export function Intercom() {
  useEffect(() => {
    if (!INTERCOM_APP_ID || typeof window === "undefined") return

    const w = window as IntercomWindow
    if (typeof w.Intercom === "function") {
      w.Intercom("reattach_activator")
      w.Intercom("update", w.intercomSettings)
      return
    }

    w.Intercom = function (...args: unknown[]) {
      w.Intercom.q = w.Intercom.q || []
      w.Intercom.q.push(args)
    }

    w.intercomSettings = { app_id: INTERCOM_APP_ID }
    w.Intercom("boot", { app_id: INTERCOM_APP_ID })

    const script = document.createElement("script")
    script.src = `https://widget.intercom.io/widget/${INTERCOM_APP_ID}`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null
}
