/**
 * Helper function to get image paths that work with Next.js static export
 */
export function getImagePath(imagePath: string): string {
  // For GitHub Pages static hosting, just return the path as-is
  return imagePath;
}