/**
 * Helper function to get image paths that work with Next.js basePath in production
 */
export function getImagePath(imagePath: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/almo' : '';
  // Remove leading slash if present, then add basePath
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return basePath + '/' + cleanPath;
}