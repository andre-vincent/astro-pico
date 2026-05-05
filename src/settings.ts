// Global data
type Config = {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  og: {
    image: string;
    imageAlt: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
  };
};

export const siteConfig: Config = {
  title: "Astro Pico",
  description: "Un gabarit Astro minimal stylisé avec Pico CSS",
  lang: "fr",
  favicon: "/favicon.svg",
  og: {
    image: "/ogImage.png",
    imageAlt: "Image Open Graph pour le gabarit Astro Pico",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
