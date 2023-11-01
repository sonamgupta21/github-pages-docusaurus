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
    path: '/github-pages-docusaurus/blog',
    component: ComponentCreator('/github-pages-docusaurus/blog', 'c90'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/archive',
    component: ComponentCreator('/github-pages-docusaurus/blog/archive', '727'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/first-blog-post',
    component: ComponentCreator('/github-pages-docusaurus/blog/first-blog-post', '9ea'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/long-blog-post',
    component: ComponentCreator('/github-pages-docusaurus/blog/long-blog-post', '294'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/mdx-blog-post',
    component: ComponentCreator('/github-pages-docusaurus/blog/mdx-blog-post', 'f15'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/tags',
    component: ComponentCreator('/github-pages-docusaurus/blog/tags', 'd88'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/tags/docusaurus',
    component: ComponentCreator('/github-pages-docusaurus/blog/tags/docusaurus', '76c'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/tags/facebook',
    component: ComponentCreator('/github-pages-docusaurus/blog/tags/facebook', '1d6'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/tags/hello',
    component: ComponentCreator('/github-pages-docusaurus/blog/tags/hello', '52a'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/tags/hola',
    component: ComponentCreator('/github-pages-docusaurus/blog/tags/hola', 'e5f'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/blog/welcome',
    component: ComponentCreator('/github-pages-docusaurus/blog/welcome', '5dd'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/markdown-page',
    component: ComponentCreator('/github-pages-docusaurus/markdown-page', 'fe7'),
    exact: true
  },
  {
    path: '/github-pages-docusaurus/docs',
    component: ComponentCreator('/github-pages-docusaurus/docs', 'e93'),
    routes: [
      {
        path: '/github-pages-docusaurus/docs/category/tutorial---basics',
        component: ComponentCreator('/github-pages-docusaurus/docs/category/tutorial---basics', '70a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/category/tutorial---extras',
        component: ComponentCreator('/github-pages-docusaurus/docs/category/tutorial---extras', '19c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/intro',
        component: ComponentCreator('/github-pages-docusaurus/docs/intro', 'f0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-basics/congratulations', 'c45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-basics/create-a-blog-post', 'e27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-basics/create-a-document', '98d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-basics/create-a-page', '2d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-basics/deploy-your-site', '8ff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-basics/markdown-features', '534'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-extras/manage-docs-versions', '8da'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/github-pages-docusaurus/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/github-pages-docusaurus/docs/tutorial-extras/translate-your-site', 'd7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/github-pages-docusaurus/',
    component: ComponentCreator('/github-pages-docusaurus/', '7dc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
