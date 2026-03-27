import Image, { type ImageProps } from "next/image"

type CloudflareImageProps = Omit<ImageProps, "src"> & {
  imageId: string
  variant?: string
  accountHash?: string
}

const defaultImageVariant =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGE_VARIANT ?? "public"
const defaultCloudflareHash =
  process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH ?? ""
const defaultCloudflareBaseUrl =
  process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGE_BASE_URL ?? ""

export function isCloudflareImageConfigured() {
  return Boolean(defaultCloudflareBaseUrl || defaultCloudflareHash)
}

function resolveCloudflareImageSrc({
  imageId,
  variant,
  accountHash,
}: {
  imageId: string
  variant?: string
  accountHash?: string
}) {
  if (defaultCloudflareBaseUrl) {
    return `${defaultCloudflareBaseUrl.replace(/\/$/, "")}/${imageId}/${variant ?? defaultImageVariant}`
  }

  const hash = accountHash ?? defaultCloudflareHash
  if (!hash) {
    throw new Error(
      "Missing Cloudflare image config. Set NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH or NEXT_PUBLIC_CLOUDFLARE_IMAGE_BASE_URL."
    )
  }

  return `https://imagedelivery.net/${hash}/${imageId}/${variant ?? defaultImageVariant}`
}

export function CloudflareImage({
  imageId,
  variant,
  accountHash,
  alt,
  ...props
}: CloudflareImageProps) {
  if (!isCloudflareImageConfigured()) {
    throw new Error(
      "Cloudflare image config is not available. Set NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH or NEXT_PUBLIC_CLOUDFLARE_IMAGE_BASE_URL."
    )
  }

  const src = resolveCloudflareImageSrc({ imageId, variant, accountHash })
  return <Image src={src} alt={alt} {...props} />
}
