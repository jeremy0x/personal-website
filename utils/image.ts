/** wsrv.nl CDN URL in production, original path in development. */
export function getOptimizedImageUrl(src: string, width: number, height?: number): string {
  if (process.env.NODE_ENV === 'development') {
    return src;
  }

  if (typeof window === 'undefined') {
    return src;
  }

  const { origin } = window.location;
  const absoluteUrl = `${origin}${src}`;
  
  let optimizedUrl = `https://wsrv.nl/?url=${encodeURIComponent(absoluteUrl)}&w=${width}`;
  if (height) {
    optimizedUrl += `&h=${height}&fit=cover`;
  }
  optimizedUrl += `&output=webp`;

  return optimizedUrl;
}
