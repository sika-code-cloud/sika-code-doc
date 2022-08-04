module.exports = {
    lang: 'zh-CN',
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        logo: '/logo.png',
        sidebar: [
            {
                title: 'Group 1',   // 必要的
                path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: 'ONE',   // 必要的
                        path: '/foo/one',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                    },
                    {
                        title: 'TWO',   // 必要的
                        path: '/foo/two',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                    }
                ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            },
            {
                title: 'Group 2',
                path: '/bar/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                children: [
                    {
                        title: 'THREE',   // 必要的
                        path: '/bar/three',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                    },
                    {
                        title: 'FOUR',   // 必要的
                        path: '/bar/four',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children: [],
                        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
                    }],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ],
        nav: [
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
        markdown: {
            lineNumbers: true // 代码块显示行号
        },
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        lastUpdated: 'Last Updated', // string | boolean
    }
}