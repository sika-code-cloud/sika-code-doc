---
home: true
heroImage: /img/logo.png
heroText: SikaCode
tagline: 🚀简单，优雅，稳定的基础框架
actionText: 🧩开始使用 ->
actionLink: /pages/5816c5/
bannerBg: none # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
features: # 可选的
  - title: 🍀轻巧强大
    details: 小身躯蕴藏着大能量，简单的学习成本，几分钟就能上手，并且快速开发出企业级要求的项目。
  - title: 🌸简单优雅
    details: 拥有独特的设计理念，将DDD【领域驱动设计】与MVC结合，去其糟粕、取其精华，让编码更简单。
  - title: 🌼支持丰富
    details: 基于SpringBoot生态体系，通过逆向工程定义及固化开发标准，集成通用组件-极大提升开发效率。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
notices: # 可选的
  - id: SikaCode 3.1.0
    title: ✨ SikaCode 3.1.0 新版本发布！
    content: '<div><p>2022-09-01</p><ul><li>[新增]支持缓存组件</li><li>[新增]支持批处理内核</li></ul></div><p style="text-align: right;"><a href="/pages/liteflowx/">查看详情</a></p>'
    isHtmlContent: true
---

<Notice :data="$frontmatter.notices"/>

## 🍬特性
* **组件轻量：** 所有的逻辑都是组件，为所有的逻辑提供统一化的组件实现方式，小身材，大能量。
* **定义开发标准：** 你可以让你的任意类秒变组件。
* **固化开发规范：** 你可以让你的任意类秒变组件。
* **分钟级完成新功能：** 基于规则文件来编排流程，学习规则入门只需要5分钟，一看既懂。
* **完整的企业示例项目：** 规则支持xml、json、yml三种规则文件写法方式，喜欢哪种用哪个。
* **JDK支持：** 从JDK8到JDK17，统统支持。无需担心JDK版本。
* **上下文设计机制：** 可靠的上下文隔离机制，你无需担心高并发情况下的数据串流。
* **稳定可靠：** 历时2年多的迭代，在各大公司的核心系统上稳定运行。
* **性能卓越：** 框架本身几乎不消耗额外性能，性能取决你的组件执行效率。
* **自带简单监控：** 框架内自带一个命令行的监控，能够知道每个组件的运行耗时排行。

<br/>

## ✨最新版本

``` xml
<dependency>
    <groupId>io.github.sika-code-cloud</groupId>
    <artifactId>sika-code-core</artifactId>
    <version>${io.github.sika-code.version}</version>
</dependency>
```

:::tip 新版本稳定吗？

我们每一次发布版本，都会补充大量的测试用例。截止到目前，SikaCode一共有880多个测试用例，几乎覆盖到每一个已有功能的细节点。

并且我们会跑超大量的并发压力测试，以上所有的通过后，我们才会谨慎的提交代码覆盖主分支进行发版。

你大可不必担心新版本不稳定的情况，况且，我们有良好的社区群。基本上有问必答，如出现bug，基本上隔天必解决。

所以，请放心的使用！
:::

<br/>

## 🎉致谢

SikaCode自从2020年开源以来，获得大量同学的肯定和支持，让我们更加坚信开源让编码更简单的宗旨

<br/>

## 🏡代码托管

<a href='https://gitee.com/sikadai/sika-code' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/sika-code-cloud/sika-code" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/><br/>

## 💪🏻参与开发

欢迎各路好汉一起来参与完善 SikaCode，我们期待你的 PR！

如果想贡献，请先查看[参与开发](/pages/ae4dd5/)。

<br/>

## 🍭架构图

<img :src="$withBase('/img/arch.png')" style="zoom: 120%" class="no-zoom">

<br/>

## 🐳Dromara组织成员
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/TLog" target="_blank">
        <img :src="$withBase('/img/dromara/tlog-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/liteFlow" target="_blank">
        <img :src="$withBase('/img/dromara/liteflow-logo.png')" class="no-zoom" style="height:40px;max-width:180px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hutool" target="_blank">
        <img :src="$withBase('/img/dromara/hutool-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sa-token" target="_blank">
        <img :src="$withBase('/img/dromara/satoken-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hmily" target="_blank">
        <img :src="$withBase('/img/dromara/hmily-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/Raincat" target="_blank">
        <img :src="$withBase('/img/dromara/raincat-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/myth" target="_blank">
        <img :src="$withBase('/img/dromara/myth-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/cubic" target="_blank">
        <img :src="$withBase('/img/dromara/cubic-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/forest" target="_blank">
        <img :src="$withBase('/img/dromara/forest-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://jpom.top" target="_blank">
        <img :src="$withBase('/img/dromara/jpom-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/sureness" target="_blank">
        <img :src="$withBase('/img/dromara/sureness-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/easy-es" target="_blank">
        <img :src="$withBase('/img/dromara/ee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/northstar" target="_blank">
        <img :src="$withBase('/img/dromara/northstar-logo.png')" class="no-zoom" style="height:40px;max-width:180px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/hertzbeat" target="_blank">
        <img :src="$withBase('/img/dromara/hertzbeat-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/dynamic-tp" target="_blank">
        <img :src="$withBase('/img/dromara/dynamictp-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/mendmix" target="_blank">
        <img :src="$withBase('/img/dromara/mendmix-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/koalas-rpc" target="_blank">
        <img :src="$withBase('/img/dromara/koalas-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/MaxKey" target="_blank">
        <img :src="$withBase('/img/dromara/maxkey-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/gobrs-async" target="_blank">
        <img :src="$withBase('/img/dromara/gobrsasync-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/fast-request" target="_blank">
        <img :src="$withBase('/img/dromara/fastrequest-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/x-easypdf" target="_blank">
        <img :src="$withBase('/img/dromara/xeasypdf-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/image-combiner" target="_blank">
        <img :src="$withBase('/img/dromara/imagecombiner-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dromara/dante-cloud" target="_blank">
        <img :src="$withBase('/img/dromara/dantecloud-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<br/>

## 🧲友情链接
<span style="width: 150px;flex:1;text-align: left">
    <a href="https://gitee.com" target="_blank">
        <img :src="$withBase('/img/link/gitee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://www.oschina.net" target="_blank">
        <img :src="$withBase('/img/link/oschina-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="http://www.layui-vue.com/zh-CN/index" target="_blank">
        <img :src="$withBase('/img/link/layui-vue.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="http://www.pearadmin.com/" target="_blank">
        <img :src="$withBase('/img/link/pearAdmin-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>
<span style="width: 150px;text-align: left">
    <a href="https://gitee.com/dotnetchina" target="_blank">
        <img :src="$withBase('/img/link/dotnet-china-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
    </a>
</span>

<br/>

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="129"></div>
<style>
  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }
</style>
