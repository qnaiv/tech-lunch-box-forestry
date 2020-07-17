module.exports = {
  head: [
    ["link", { rel: "icon", href: "./assets/img/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "./assets/img/apple-touch-icon.png" }],
    ["link", { rel: 'sttylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c' }]
  ],
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        defaultTitle: {
          '/': 'DANGER',
        },
      },
    ],
  ],
  title: 'tech lunch box',
  // base: '/tech-lunch-box-forestry/',
  dest: 'public',
  description: '',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
    authors: [
      {
        name: 'Sal',
        avatar: '/assets/img/sal.jpg',
        link: 'https://wowthemes.net/donate',
        linktext: 'Follow',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/wowthemesnet/mediumish-vuepress-blog-theme',
        },
        {
          type: 'gitlab',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/wowthemesnet',
        },
        {
          type: 'web',
          link: '#',
        },
      ],
      copyright: [
        {
          text: 'Licensed MIT.',
          link: 'https://bootstrapstarter.com/license/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link:
            'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://lunchbox.qnv.pw/',
    },
    comment: {
      service: 'disqus',
      shortname: 'techlunchbox',
    },
    feed: {
      canonical_base:
        'https://lunchbox.qnv.pw/',
    },
    smoothScroll: true,
  },
}
