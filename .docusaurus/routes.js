import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '775'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fd9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '85b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '119'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'c1e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '906'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '173'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '25b'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'fc9'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '13b'),
            routes: [
              {
                path: '/borrow-bnusd',
                component: ComponentCreator('/borrow-bnusd', '3c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/technical-docs',
                component: ComponentCreator('/category/technical-docs', '5d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/claim-rewards',
                component: ComponentCreator('/claim-rewards', '3bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/incentivise-liquidity',
                component: ComponentCreator('/incentivise-liquidity', '165'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/liquidation-bot',
                component: ComponentCreator('/liquidation-bot', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lock-baln',
                component: ComponentCreator('/lock-baln', '8bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manage-assets',
                component: ComponentCreator('/manage-assets', '6d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/participate-governance',
                component: ComponentCreator('/participate-governance', '510'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/security',
                component: ComponentCreator('/security', '4c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts',
                component: ComponentCreator('/smart-contracts', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/supply-liquidity',
                component: ComponentCreator('/supply-liquidity', 'fac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/swap-assets',
                component: ComponentCreator('/swap-assets', '5c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/transfer-cross-chain',
                component: ComponentCreator('/transfer-cross-chain', 'd7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshooting',
                component: ComponentCreator('/troubleshooting', '7c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/white-paper',
                component: ComponentCreator('/white-paper', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '0d0'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
