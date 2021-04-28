module.exports = {
  // base: '/123',
  title: 'Hello VuePress',
  description: 'Just playing around',
  lastUpdated: true,
  lastUpdated: 'Last Updated',
  themeConfig: {
    nav: [
      { text: 'External', link: 'https://www.baidu.com', target: '_self', rel: '', target: '_blank' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      '/',
      '/guide/'
    ]
  }
}