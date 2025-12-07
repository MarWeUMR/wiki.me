import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const isProd = process.env.NODE_ENV === "production";
// https://astro.build/config
export default defineConfig({
  site: isProd
    ? "https://marweumr.github.io/wiki.me/"
    : "http://localhost:4321",
  base: isProd ? "/wiki.me/" : "/",
  // site: "https://marweumr.github.io",
  // base: "/wiki.me",
  integrations: [
    starlight({
      title: "All the Things I SHOULD Know",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
