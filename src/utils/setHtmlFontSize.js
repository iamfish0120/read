// 基准大小
const baseSize = 100
// 设计稿宽度
const designSize = 375

function setHtmlFontSize() {
    const scale = document.documentElement.clientWidth / designSize
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setHtmlFontSize()
// 改变窗口大小时重新设置 fontSize
window.onresize = function() {
    setHtmlFontSize()
}
