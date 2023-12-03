import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ff2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a17'),
    exact: true
  },
  {
    path: '/blog/blog-intro',
    component: ComponentCreator('/blog/blog-intro', '521'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '27b'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', '88a'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '66c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '892'),
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
    component: ComponentCreator('/', '377'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
