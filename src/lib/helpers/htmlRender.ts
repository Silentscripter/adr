export function htmlRender (tocHtml: string, contentHtml: string) {
  return `
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>ADR Documents</title>

<style type="text/css">
html {
  color: #333;
  background: #fff;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-rendering: optimizelegibility;
}

/* 如果你的项目仅支持 IE9+ | Chrome | Firefox 等，推荐在 <html> 中添加 .borderbox 这个 class */
html.borderbox *, html.borderbox *:before, html.borderbox *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* 内外边距通常让各个浏览器样式的表现位置不同 */
body, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td, hr, button, article, aside, details, figcaption, figure, footer, header, menu, nav, section {
  margin: 0;
  padding: 0;
}

/* 重设 HTML5 标签, IE 需要在 js 中 createElement(TAG) */
article, aside, details, figcaption, figure, footer, header, menu, nav, section {
  display: block;
}

/* HTML5 媒体文件跟 img 保持一致 */
audio, canvas, video {
  display: inline-block;
}

/* 要注意表单元素并不继承父级 font 的问题 */
body, button, input, select, textarea {
  font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}

/* 去掉各Table cell 的边距并让其边重合 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* 去除默认边框 */
fieldset, img {
  border: 0;
}

/* 块/段落引用 */
blockquote {
  position: relative;
  color: #999;
  font-weight: 400;
  border-left: 1px solid #1abc9c;
  padding-left: 1em;
  margin: 1em 3em 1em 2em;
}

@media only screen and ( max-width: 640px ) {
  blockquote {
    margin: 1em 0;
  }
}

/* Firefox 以外，元素没有下划线，需添加 */
acronym, abbr {
  border-bottom: 1px dotted;
  font-variant: normal;
}

/* 添加鼠标问号，进一步确保应用的语义是正确的（要知道，交互他们也有洁癖，如果你不去掉，那得多花点口舌） */
abbr {
  cursor: help;
}

/* 一致的 del 样式 */
del {
  text-decoration: line-through;
}

address, caption, cite, code, dfn, em, th, var {
  font-style: normal;
  font-weight: 400;
}

/* 去掉列表前的标识, li 会继承，大部分网站通常用列表来很多内容，所以应该当去 */
ul, ol {
  list-style: none;
}

/* 对齐是排版最重要的因素, 别让什么都居中 */
caption, th {
  text-align: left;
}

q:before, q:after {
  content: '';
}

/* 统一上标和下标 */
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
}

:root sub, :root sup {
  vertical-align: baseline; /* for ie9 and other modern browsers */
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

/* 让链接在 hover 状态下显示下划线 */
a {
  color: #1abc9c;
}

a:hover {
  text-decoration: underline;
}

.typo a {
  border-bottom: 1px solid #1abc9c;
}

.typo a:hover {
  border-bottom-color: #555;
  color: #555;
  text-decoration: none;
}

/* 默认不显示下划线，保持页面简洁 */
ins, a {
  text-decoration: none;
}

/* 专名号：虽然 u 已经重回 html5 Draft，但在所有浏览器中都是可以使用的，
 * 要做到更好，向后兼容的话，添加 class="typo-u" 来显示专名号
 * 关于 <u> 标签：http://www.whatwg.org/specs/web-apps/current-work/multipage/text-level-semantics.html#the-u-element
 * 被放弃的是 4，之前一直搞错 http://www.w3.org/TR/html401/appendix/changes.html#idx-deprecated
 * 一篇关于 <u> 标签的很好文章：http://html5doctor.com/u-element/
 */
u, .typo-u {
  text-decoration: underline;
}

/* 标记，类似于手写的荧光笔的作用 */
mark {
  background: #fffdd1;
  border-bottom: 1px solid #ffedce;
  padding: 2px;
  margin: 0 5px;
}

/* 代码片断 */
pre, code, pre tt {
  font-family: Courier, 'Courier New', monospace;
}

pre {
  background: #f8f8f8;
  border: 1px solid #ddd;
  padding: 1em 1.5em;
  display: block;
  -webkit-overflow-scrolling: touch;
}

/* 一致化 horizontal rule */
hr {
  border: none;
  border-bottom: 1px solid #cfcfcf;
  margin-bottom: 0.8em;
  height: 10px;
}

/* 底部印刷体、版本等标记 */
small, .typo-small,
  /* 图片说明 */
figcaption {
  font-size: 0.9em;
  color: #888;
}

strong, b {
  font-weight: bold;
  color: #000;
}

/* 可拖动文件添加拖动手势 */
[draggable] {
  cursor: move;
}

.clearfix:before, .clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  zoom: 1;
}

/* 强制文本换行 */
.textwrap, .textwrap td, .textwrap th {
  word-wrap: break-word;
  word-break: break-all;
}

.textwrap-table {
  table-layout: fixed;
}

/* 提供 serif 版本的字体设置: iOS 下中文自动 fallback 到 sans-serif */
.serif {
  font-family: Palatino, Optima, Georgia, serif;
}

/* 保证块/段落之间的空白隔行 */
.typo p, .typo pre, .typo ul, .typo ol, .typo dl, .typo form, .typo hr, .typo table,
.typo-p, .typo-pre, .typo-ul, .typo-ol, .typo-dl, .typo-form, .typo-hr, .typo-table, blockquote {
  margin-bottom: 1.2em
}

h1, h2, h3, h4, h5, h6 {
  font-family: PingFang SC, Verdana, Helvetica Neue, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  font-weight: 100;
  color: #000;
  line-height: 1.35;
}

/* 标题应该更贴紧内容，并与其他块区分，margin 值要相应做优化 */
.typo h1, .typo h2, .typo h3, .typo h4, .typo h5, .typo h6,
.typo-h1, .typo-h2, .typo-h3, .typo-h4, .typo-h5, .typo-h6 {
  margin-top: 1.2em;
  margin-bottom: 0.6em;
  line-height: 1.35;
}

.typo h1, .typo-h1 {
  font-size: 2em;
}

.typo h2, .typo-h2 {
  font-size: 1.8em;
}

.typo h3, .typo-h3 {
  font-size: 1.6em;
}

.typo h4, .typo-h4 {
  font-size: 1.4em;
}

.typo h5, .typo h6, .typo-h5, .typo-h6 {
  font-size: 1.2em;
}

/* 在文章中，应该还原 ul 和 ol 的样式 */
.typo ul, .typo-ul {
  margin-left: 1.3em;
  list-style: disc;
}

.typo ol, .typo-ol {
  list-style: decimal;
  margin-left: 1.9em;
}

.typo li ul, .typo li ol, .typo-ul ul, .typo-ul ol, .typo-ol ul, .typo-ol ol {
  margin-bottom: 0.8em;
  margin-left: 2em;
}

.typo li ul, .typo-ul ul, .typo-ol ul {
  list-style: circle;
}

/* 同 ul/ol，在文章中应用 table 基本格式 */
.typo table th, .typo table td, .typo-table th, .typo-table td, .typo table caption {
  border: 1px solid #ddd;
  padding: 0.5em 1em;
  color: #666;
}

.typo table th, .typo-table th {
  background: #fbfbfb;
}

.typo table thead th, .typo-table thead th {
  background: #f1f1f1;
}

.typo table caption {
  border-bottom: none;
}

/* 去除 webkit 中 input 和 textarea 的默认样式  */
.typo-input, .typo-textarea {
  -webkit-appearance: none;
  border-radius: 0;
}

.typo-em, .typo em, legend, caption {
  color: #000;
  font-weight: inherit;
}

/* 着重号，只能在少量（少于100个字符）且全是全角字符的情况下使用 */
.typo-em {
  position: relative;
}

.typo-em:after {
  position: absolute;
  top: 0.65em;
  left: 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  content: "・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・";
}

/* Responsive images */
.typo img {
  max-width: 100%;
}

header {
    position: fixed;
    z-index: 2;
    z-index: 1024;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0,0,0,0.5);
    text-transform: uppercase;
    font-size: 20px
}

header .logo {
    display: inline-block;
    padding-left: 37px;
    float: left;
    text-decoration: none;
    color: #333;
    line-height: 60px;
    background-repeat: no-repeat;
    background-position: left center
}

header nav {
    text-align: right;
    font-size: 0
}

header nav ul {
    display: inline-block;
    padding: 0;
    list-style: none
}

header nav li {
    display: inline
}

header nav a {
    display: inline-block;
    padding: 0 15px;
    color: #333;
    text-decoration: none;
    font-size: 20px;
    line-height: 60px;
    transition: opacity .2s
}

header nav a.current {
    color: #9600ff
}

header nav a:hover {
    opacity: .75
}
.content {
  padding-top: 100px;
}

#toc {
  width: 30%;
  max-width: 420px;
  max-height: 85%;
  float: left;
  margin: 25px 0px 20px 0px;
  position: fixed !important;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  box-sizing: border-box;
  z-index: 1;
  left: 0;
  top: 40px;
  bottom: 0;
  padding: 20px;
}

#toc > ul {
  list-style: none;
  padding: 20px 40px 0 40px;
  margin: 0;
  border-bottom: 1px solid #eee
}

#toc > ul > li > ul {
  padding-left: 40px;
}

#toc a {
    display: block;
    padding: 10px 0;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #eee;
    transition: opacity .2s
}

#toc a.current {
    color: #9600ff
}

#toc a:hover {
    opacity: .75
}

.main {
  width: 70%;
  max-width: 980px;
  float: left;
  padding-left: 30%;
  padding-top: 160px;
}
</style>
</head>
<body>
<header>
    <div class="container">
        <a href="https://github.com/phodal/adr" class="logo">ADR</a>
        <nav>
            <ul>
                <li><a href="https://github.com/phodal/adr">GitHub</a></li>
            </ul>
        </nav>
    </div>
</header>
<div class="content">
  <div id="toc" class="tocify">
    ${tocHtml}
  </div>
  <div class="main typo">
    ${contentHtml}
  </div>
</div>
</body>
</html>
`
}
