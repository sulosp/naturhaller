export function asset(path) {
  if (!path) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base || path.startsWith(`${base}/`) || path.startsWith("data:") || path.startsWith("http")) {
    return path;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
