import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/github-pages-docusaurus/__docusaurus/debug',
    component: ComponentCreator('/github-pages-docusaurus/__docusaurus/debug', '0db'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/__docusaurus/debug/config',
    component: ComponentCreator('/github-pages-docusaurus/__docusaurus/debug/config', '9ce'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/__docusaurus/debug/content',
    component: ComponentCreator('/github-pages-docusaurus/__docusaurus/debug/content', 'ff7'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/__docusaurus/debug/globalData',
    component: ComponentCreator('/github-pages-docusaurus/__docusaurus/debug/globalData', '379'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/__docusaurus/debug/metadata',
    component: ComponentCreator('/github-pages-docusaurus/__docusaurus/debug/metadata', '43d'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/__docusaurus/debug/registry',
    component: ComponentCreator('/github-pages-docusaurus/__docusaurus/debug/registry', '0bf'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/__docusaurus/debug/routes',
    component: ComponentCreator('/github-pages-docusaurus/__docusaurus/debug/routes', '2ce'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/markdown-page',
    component: ComponentCreator('/github-pages-docusaurus/markdown-page', 'fe7'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/',
    component: ComponentCreator('/github-pages-docusaurus/', 'e64'),
    routes: [
      {
        path: '/github-pages-docusaurus/',
        component: ComponentCreator('/github-pages-docusaurus/', '3c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/data-management',
        component: ComponentCreator('/github-pages-docusaurus/data-management', 'f90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/faq',
        component: ComponentCreator('/github-pages-docusaurus/faq', 'd05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/ingestion',
        component: ComponentCreator('/github-pages-docusaurus/ingestion', 'a1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/integrations',
        component: ComponentCreator('/github-pages-docusaurus/integrations', '433'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/query',
        component: ComponentCreator('/github-pages-docusaurus/query', '341'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
