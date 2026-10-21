import type { NextConfig } from "next";

function moved(source: string, destination: string) {
  return { source, destination, statusCode: 301 as const };
}

function movedBoth(path: string, destination: string) {
  const base = path.endsWith("/") ? path.slice(0, -1) : path;
  return [moved(base, destination), moved(`${base}/`, destination)];
}

const toFinnish = [
  "/fi",
  "/fi/etusivu",
  "/index.php",
  "/fi/palvelut",
  "/fi/majoitus",
  "/fi/yhteystiedot",
  "/pages",
  "/feed",
  "/comments/feed",
  "/fi/feed",
  "/fi/comments/feed",
  "/wp-json",
].flatMap((path) => movedBoth(path, "/"));

const toEnglish = [
  "/en/home",
  "/en/services",
  "/en/accommodation",
  "/en/contact",
  "/en/feed",
  "/en/comments/feed",
].flatMap((path) => movedBoth(path, "/en"));

const childPaths = [
  ["/fi/etusivu/:path*", "/"],
  ["/fi/palvelut/:path*", "/"],
  ["/fi/majoitus/:path*", "/"],
  ["/fi/yhteystiedot/:path*", "/"],
  ["/fi/feed/:path*", "/"],
  ["/pages/:path*", "/"],
  ["/feed/:path*", "/"],
  ["/comments/:path*", "/"],
  ["/wp-json/:path*", "/"],
  ["/en/home/:path*", "/en"],
  ["/en/services/:path*", "/en"],
  ["/en/accommodation/:path*", "/en"],
  ["/en/contact/:path*", "/en"],
  ["/en/feed/:path*", "/en"],
] as const;

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      moved("/en/", "/en"),
      ...toFinnish,
      ...toEnglish,
      ...childPaths.map(([source, destination]) => moved(source, destination)),
    ];
  },
};

export default nextConfig;
