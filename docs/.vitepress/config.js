export default {
  base: '/',
  title: 'Loyalty Tiles SDK',
  description:
    'A flexible component library for building customizable loyalty program interfaces',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/white-label-loyalty/wll-react-sdk',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 White Label Loyalty',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components' },
      { text: 'Platform Integration', link: '/platform-integration' },
      {
        text: 'Storybook',
        link: 'https://66c36701bb14ec551f38279c-ueompbfvfq.chromatic.com/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Theme', link: '/guide/theming' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Overview',
          items: [{ text: 'Introduction', link: '/components/' }],
        },
        {
          text: 'Core',
          items: [
            { text: 'WllSdkProvider', link: '/components/wll-sdk-provider' },
            { text: 'Group', link: '/components/group' },
            { text: 'Section', link: '/components/section' },
          ],
        },
        {
          text: 'Tiles',
          items: [
            { text: 'Badge Tile', link: '/components/badge-tile' },
            { text: 'Banner Tile', link: '/components/banner-tile' },
            { text: 'Content Tile', link: '/components/content-tile' },
            { text: 'Points Tile', link: '/components/points-tile' },
            {
              text: 'Reward Category Tile',
              link: '/components/reward-category-tile',
            },
            { text: 'Reward Tile', link: '/components/reward-tile' },
            { text: 'Tier Tile', link: '/components/tier-tile' },
          ],
        },
      ],
      '/platform-integration/': [
        {
          text: 'Platform Integration',
          items: [{ text: 'Overview', link: '/platform-integration/' }],
        },
      ],
    },
  },
};
