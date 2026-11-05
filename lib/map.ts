import { site } from "@/lib/data";
export const mapSrc = (d = 0.25) => { const { lat, lon } = site.map; return `https://www.openstreetmap.org/export/embed.html?bbox=${lon - d},${lat - d / 2},${lon + d},${lat + d / 2}&layer=mapnik&marker=${lat},${lon}`; };
