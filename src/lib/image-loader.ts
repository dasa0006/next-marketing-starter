"use client"; // needed because process.env.NEXT_PUBLIC_* is accessed

export default function customImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    // Default Next.js image optimization when no Cloudinary is configured
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality ?? 75}`;
  }

  // Cloudinary fetch URL with automatic format, limited dimensions, and quality
  const params = [`f_auto`, `c_limit`, `w_${width}`, `q_${quality ?? "auto"}`];
  return `https://res.cloudinary.com/${cloudName}/image/upload/${params.join(",")}/${src}`;
}
