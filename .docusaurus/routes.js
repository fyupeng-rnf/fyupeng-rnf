import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/docs',
    component: ComponentCreator('/docs', 'a30'),
    routes: [
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', '1ef'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', 'bce'),
            routes: [
              {
                path: '/docs/next/category/rpc-netty-framework-20',
                component: ComponentCreator('/docs/next/category/rpc-netty-framework-20', '68a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/rpc-netty-framework-30',
                component: ComponentCreator('/docs/next/category/rpc-netty-framework-30', 'a6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
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
                path: '/docs/next/rpc-netty-framework-2.0/congratulations',
                component: ComponentCreator('/docs/next/rpc-netty-framework-2.0/congratulations', 'ebe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-2.0/create-a-blog-post',
                component: ComponentCreator('/docs/next/rpc-netty-framework-2.0/create-a-blog-post', '5ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-2.0/create-a-document',
                component: ComponentCreator('/docs/next/rpc-netty-framework-2.0/create-a-document', '164'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-2.0/create-a-page',
                component: ComponentCreator('/docs/next/rpc-netty-framework-2.0/create-a-page', '0f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-2.0/deploy-your-site',
                component: ComponentCreator('/docs/next/rpc-netty-framework-2.0/deploy-your-site', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-2.0/markdown-features',
                component: ComponentCreator('/docs/next/rpc-netty-framework-2.0/markdown-features', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-3.0/congratulations',
                component: ComponentCreator('/docs/next/rpc-netty-framework-3.0/congratulations', '816'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-3.0/create-a-blog-post',
                component: ComponentCreator('/docs/next/rpc-netty-framework-3.0/create-a-blog-post', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-3.0/create-a-document',
                component: ComponentCreator('/docs/next/rpc-netty-framework-3.0/create-a-document', '14d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-3.0/create-a-page',
                component: ComponentCreator('/docs/next/rpc-netty-framework-3.0/create-a-page', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-3.0/deploy-your-site',
                component: ComponentCreator('/docs/next/rpc-netty-framework-3.0/deploy-your-site', '126'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/rpc-netty-framework-3.0/markdown-features',
                component: ComponentCreator('/docs/next/rpc-netty-framework-3.0/markdown-features', '1ca'),
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
        component: ComponentCreator('/docs', '49d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3c5'),
            routes: [
              {
                path: '/docs/category/rpc-netty-framework-20',
                component: ComponentCreator('/docs/category/rpc-netty-framework-20', '032'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/rpc-netty-framework-30',
                component: ComponentCreator('/docs/category/rpc-netty-framework-30', 'e3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '4a2'),
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
                path: '/docs/rpc-netty-framework-2.0/congratulations',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/congratulations', '1d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-2.0/create-a-blog-post',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/create-a-blog-post', '24d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-2.0/create-a-document',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/create-a-document', 'cb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-2.0/create-a-page',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/create-a-page', '1cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-2.0/deploy-your-site',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/deploy-your-site', 'e05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-2.0/markdown-features',
                component: ComponentCreator('/docs/rpc-netty-framework-2.0/markdown-features', '1ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-3.0/congratulations',
                component: ComponentCreator('/docs/rpc-netty-framework-3.0/congratulations', 'c22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-3.0/create-a-blog-post',
                component: ComponentCreator('/docs/rpc-netty-framework-3.0/create-a-blog-post', 'd6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-3.0/create-a-document',
                component: ComponentCreator('/docs/rpc-netty-framework-3.0/create-a-document', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-3.0/create-a-page',
                component: ComponentCreator('/docs/rpc-netty-framework-3.0/create-a-page', '6f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-3.0/deploy-your-site',
                component: ComponentCreator('/docs/rpc-netty-framework-3.0/deploy-your-site', '5dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/rpc-netty-framework-3.0/markdown-features',
                component: ComponentCreator('/docs/rpc-netty-framework-3.0/markdown-features', '65b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'a0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'baa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'a78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '82e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '720'),
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
