import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '84c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '464'),
    exact: true
  },
  {
    path: '/blog/blog-contribution',
    component: ComponentCreator('/blog/blog-contribution', 'bba'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4cc'),
    exact: true
  },
  {
    path: '/blog/tags/intro',
    component: ComponentCreator('/blog/tags/intro', 'a1d'),
    exact: true
  },
  {
    path: '/blog/tags/rnf-v-0',
    component: ComponentCreator('/blog/tags/rnf-v-0', 'dce'),
    exact: true
  },
  {
    path: '/blog/welcome-rnf-v0',
    component: ComponentCreator('/blog/welcome-rnf-v0', 'bd2'),
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
    component: ComponentCreator('/docs', 'b00'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5d3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '17f'),
            routes: [
              {
                path: '/docs/rnf/core-feature',
                component: ComponentCreator('/docs/rnf/core-feature', 'd79'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/rnf/introduction',
                component: ComponentCreator('/docs/rnf/introduction', '61b'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/rnf/quick-start-category/quick-start-golang',
                component: ComponentCreator('/docs/rnf/quick-start-category/quick-start-golang', '438'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/rnf/quick-start-category/quick-start-java',
                component: ComponentCreator('/docs/rnf/quick-start-category/quick-start-java', '7e2'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/rnf/quick-start-category/quick-start-other',
                component: ComponentCreator('/docs/rnf/quick-start-category/quick-start-other', '755'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/rnf/quick-start-category/version-instruction',
                component: ComponentCreator('/docs/rnf/quick-start-category/version-instruction', 'd61'),
                exact: true,
                sidebar: "mySidebar"
              },
              {
                path: '/docs/rnf/quick-start-doc',
                component: ComponentCreator('/docs/rnf/quick-start-doc', '417'),
                exact: true,
                sidebar: "mySidebar"
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
