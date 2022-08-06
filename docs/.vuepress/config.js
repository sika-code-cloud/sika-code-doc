module.exports = {
    lang: 'zh-CN',
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    head: [
        // 引入自定义js
        ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
    ],
    plugins: {
        'fulltext-search': true, // disabled.
        '@vuepress/back-to-top': true, // disabled.
        '@vuepress/nprogress': true // disabled.
    },
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
            }
        ],
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        lastUpdated: 'Last Updated', // string | boolean

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://gitee.com/sikadai/sika-code',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

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