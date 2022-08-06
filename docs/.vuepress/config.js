module.exports = {
    lang: 'zh-CN',
    title: 'SikaCode',
    description: '让编码更简单',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    head: [
        // 引入自定义js
        ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
    ],
    plugins: [
        ['fulltext-search', true],
        ['@vuepress/active-header-links', true],
        ['@vuepress/back-to-top', true],
        // 看板娘
        ['vuepress-plugin-helper-live2d'],
        // 光标插件
        ['cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }],
        ['vuepress-plugin-code-copy', {
            align: 'bottom',
            color: '#27b1ff',
            backgroundTransition: true,
            backgroundColor: '#0075b8',
            successText: '复制成功'
        }]
    ],
    themeConfig: {
        logo: '/logo.png',
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'ONE',   // 必要的
                        path: '/foo/one',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                    },
                    {
                        title: 'TWO',   // 必要的
                        path: '/foo/two',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                    }
                ],
            },
            {
                title: 'Group 2',
                path: '/bar/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    {
                        title: 'THREE',   // 必要的
                        path: '/bar/three',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                    },
                    {
                        title: 'FOUR',   // 必要的
                        path: '/bar/four',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                    }],
            }
        ],
        nav: [
            {text: 'External', link: 'https://google.com', target: '_self', rel: ''},
            {text: 'Guide', link: '/guide/', target: '_blank'},
            {
                text: 'Languages',
                items: [
                    {
                        text: 'Languages',
                        ariaLabel: 'Language Menu',
                        items: [
                            {text: 'Chinese', link: '/language/chinese/'},
                            {text: 'Japanese', link: '/language/japanese/'}
                        ]
                    }
                ]
            },
            {
                text: '开源地址',
                items: [
                    {text: 'Gitee', link: 'https://gitee.com/sikadai/sika-code', target: '_blank'},
                    {text: 'Github', link: 'https://github.com/sika-code-cloud/sika-code', target: '_blank'}
                ]
            }
        ],
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        lastUpdated: 'Last Updated', // string | boolean

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://gitee.com/sikadai/sika-code-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        //  选项来启用页面滚动效果。
        smoothScroll: true
    }
}