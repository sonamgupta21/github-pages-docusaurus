import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/github-pages-docusaurus/markdown-page',
    component: ComponentCreator('/github-pages-docusaurus/markdown-page', 'fe7'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/',
    component: ComponentCreator('/github-pages-docusaurus/', '332'),
    routes: [
      {
        path: '/github-pages-docusaurus/',
        component: ComponentCreator('/github-pages-docusaurus/', 'c1b'),
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
