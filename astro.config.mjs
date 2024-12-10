import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const isProd = process.env.NODE_ENV === "production";
// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://marweumr.github.io/wiki.me" : "http://localhost:4321",
  base: isProd ? "/wiki.me" : "/",
  // site: "https://marweumr.github.io",
  // base: "/wiki.me",
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
              label: "Ansible",
              items: [
                {
                  label: "Include vs Import",
                  slug: "guides/ansible/include_vs_import",
                },
              ],
            },
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
