import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            {
              label: "Git",
              items: [
                { label: "Intro", slug: "guides/git/intro" },
                {
                  label: "Bare Repo with Worktrees",
                  slug: "guides/git/worktrees",
                },
                {
                  label: "Ignore without using .gitignore",
                  slug: "guides/git/ignoring",
                },
              ],
            },
            {
              label: "Nvim",
              items: [],
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
