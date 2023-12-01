import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '73d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '34e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3f3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '989'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5de'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'da0'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'aa4'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '464'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '346'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9cf'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '470'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4cc'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '557'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b68'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '0cd'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '5e5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c6e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c00'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'cc4'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', 'f98'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7f9'),
    routes: [
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', 'e28'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', '267'),
            routes: [
              {
                path: '/docs/next/category/tutorial---basics',
                component: ComponentCreator('/docs/next/category/tutorial---basics', 'aad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/tutorial---extras',
                component: ComponentCreator('/docs/next/category/tutorial---extras', '591'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/intro',
                component: ComponentCreator('/docs/next/intro', '8d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rnf-intro',
                component: ComponentCreator('/docs/next/rnf-intro', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/next/tutorial-basics/congratulations', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-blog-post', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-document', '32a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/next/tutorial-basics/create-a-page', '24b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/next/tutorial-basics/deploy-your-site', '49e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/next/tutorial-basics/markdown-features', 'bca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/next/tutorial-extras/manage-docs-versions', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/next/tutorial-extras/translate-your-site', '84b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', '48f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '193'),
            routes: [
              {
                path: '/docs/category/rpc-netty-framework-20',
                component: ComponentCreator('/docs/category/rpc-netty-framework-20', '032'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rnf-intro',
                component: ComponentCreator('/docs/rnf-intro', '1ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-2.0/introduction',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/introduction', 'fd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-2.0/quick-start',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/quick-start', 'e14'),
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
    path: '/',
    component: ComponentCreator('/', '09a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
