//https://segmentfault.com/a/1190000017055963

module.exports = {
    title: '开发手册',
    description: '练习文档',
    //base: "/",
    head: [
        ['link', {
            rel: 'icon',
            href: `/img/favicon.ico`
        }]
    ],
    theme: 'antdocs',
    themeConfig: {
        //sidebar:'auto'
    },
    plugins: ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'

    },
        'vuepress-plugin-auto-sidebar', {}
    ]

}