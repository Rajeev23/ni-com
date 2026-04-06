import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const cloudflareImageHost = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGE_HOSTNAME

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.r2.dev",
        pathname: "/**",
      },
      ...(cloudflareImageHost
        ? [
            {
              protocol: "https",
              hostname: cloudflareImageHost,
              pathname: "/**",
            },
          ]
        : []),
    ],
  },
  async redirects() {
    return [
      {
        source: "/browser",
        destination: "/products/secure-browser",
        permanent: true,
      },
      { source: "/daas", destination: "/products/daas", permanent: true },
      {
        source: "/hci",
        destination: "/products/sovereign-hci",
        permanent: true,
      },
      {
        source: "/ai",
        destination: "/products/sovereign-hci",
        permanent: true,
      },
      {
        source: "/gpu",
        destination: "/solutions/use-case/ai-inference-platform",
        permanent: true,
      },
      { source: "/tco", destination: "/tco-calculator", permanent: true },
      {
        source: "/nvidia",
        destination: "/compare/vs-nvidia-ai-enterprise",
        permanent: true,
      },
      {
        source: "/nutanix",
        destination: "/compare/vs-nutanix-gpt-in-a-box",
        permanent: true,
      },
      { source: "/tech", destination: "/platform", permanent: true },
      {
        source: "/government",
        destination: "/solutions/industry/government-defense",
        permanent: true,
      },
      { source: "/demo", destination: "/get-demo", permanent: true },
      {
        source: "/privacy",
        destination: "/security/privacy-data-protection",
        permanent: true,
      },
      {
        source: "/cookie-policy",
        destination: "/security/cookie-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/security/terms-conditions",
        permanent: true,
      },
      {
        source: "/toc",
        destination: "/security/terms-conditions",
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig)
