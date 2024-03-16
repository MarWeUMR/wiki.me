import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wiki.me/blog',
    component: ComponentCreator('/wiki.me/blog', 'f76'),
    exact: true
  },
  {
    path: '/wiki.me/blog/archive',
    component: ComponentCreator('/wiki.me/blog/archive', '36e'),
    exact: true
  },
  {
    path: '/wiki.me/blog/first-blog-post',
    component: ComponentCreator('/wiki.me/blog/first-blog-post', 'bfe'),
    exact: true
  },
  {
    path: '/wiki.me/blog/long-blog-post',
    component: ComponentCreator('/wiki.me/blog/long-blog-post', '5b4'),
    exact: true
  },
  {
    path: '/wiki.me/blog/mdx-blog-post',
    component: ComponentCreator('/wiki.me/blog/mdx-blog-post', '4f4'),
    exact: true
  },
  {
    path: '/wiki.me/blog/tags',
    component: ComponentCreator('/wiki.me/blog/tags', 'eba'),
    exact: true
  },
  {
    path: '/wiki.me/blog/tags/docusaurus',
    component: ComponentCreator('/wiki.me/blog/tags/docusaurus', '9e5'),
    exact: true
  },
  {
    path: '/wiki.me/blog/tags/facebook',
    component: ComponentCreator('/wiki.me/blog/tags/facebook', '529'),
    exact: true
  },
  {
    path: '/wiki.me/blog/tags/hello',
    component: ComponentCreator('/wiki.me/blog/tags/hello', '5bc'),
    exact: true
  },
  {
    path: '/wiki.me/blog/tags/hola',
    component: ComponentCreator('/wiki.me/blog/tags/hola', 'd28'),
    exact: true
  },
  {
    path: '/wiki.me/blog/welcome',
    component: ComponentCreator('/wiki.me/blog/welcome', '6e3'),
    exact: true
  },
  {
    path: '/wiki.me/markdown-page',
    component: ComponentCreator('/wiki.me/markdown-page', '0e3'),
    exact: true
  },
  {
    path: '/wiki.me/docs',
    component: ComponentCreator('/wiki.me/docs', '66f'),
    routes: [
      {
        path: '/wiki.me/docs',
        component: ComponentCreator('/wiki.me/docs', '32b'),
        routes: [
          {
            path: '/wiki.me/docs',
            component: ComponentCreator('/wiki.me/docs', 'ae0'),
            routes: [
              {
                path: '/wiki.me/docs/category/tutorial---basics',
                component: ComponentCreator('/wiki.me/docs/category/tutorial---basics', '4a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/category/tutorial---extras',
                component: ComponentCreator('/wiki.me/docs/category/tutorial---extras', '558'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/intro',
                component: ComponentCreator('/wiki.me/docs/intro', 'ce8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/wiki.me/docs/tutorial-basics/congratulations', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/wiki.me/docs/tutorial-basics/create-a-blog-post', 'a2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/wiki.me/docs/tutorial-basics/create-a-document', 'e77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/wiki.me/docs/tutorial-basics/create-a-page', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/wiki.me/docs/tutorial-basics/deploy-your-site', '3d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/wiki.me/docs/tutorial-basics/markdown-features', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/wiki.me/docs/tutorial-extras/manage-docs-versions', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wiki.me/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/wiki.me/docs/tutorial-extras/translate-your-site', 'f1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/wiki.me/',
    component: ComponentCreator('/wiki.me/', '7eb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
