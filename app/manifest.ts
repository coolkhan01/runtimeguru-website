import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Runtime Gurus — YouTube Automation Agency",
    short_name: "Runtime Gurus",
    description: "Done for you YouTube channel growth. Scripts, editing, thumbnails, and full channel management.",
    start_url: "/",
    display: "standalone",
    background_color: "#07070E",
    theme_color: "#7C3AED",
    icons: [
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
