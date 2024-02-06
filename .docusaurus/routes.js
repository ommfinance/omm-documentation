import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '173'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a6c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '382'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'dae'),
            routes: [
              {
                path: '/category/reference',
                component: ComponentCreator('/category/reference', '1b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/icx-delegation-script',
                component: ComponentCreator('/icx-delegation-script', '8fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/liquid-staking-pivot',
                component: ComponentCreator('/liquid-staking-pivot', 'dc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/lock-omm',
                component: ComponentCreator('/lock-omm', '676'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/manage-validator',
                component: ComponentCreator('/manage-validator', 'bad'),
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
                path: '/protocol-details',
                component: ComponentCreator('/protocol-details', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/smart-contracts',
                component: ComponentCreator('/smart-contracts', '5bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/stake-unstake',
                component: ComponentCreator('/stake-unstake', '38e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/testnet',
                component: ComponentCreator('/testnet', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/validator-incentives',
                component: ComponentCreator('/validator-incentives', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/vote-validators',
                component: ComponentCreator('/vote-validators', '7ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'a24'),
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
