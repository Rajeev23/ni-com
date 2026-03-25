/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
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
    ]
  },
}

export default nextConfig
