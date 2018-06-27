

!function(){
  
  setTimeout(function () {
  siteWelcome.classList.remove('active')
}, 1000)
let specialTags = document.querySelectorAll('[data-x]')//在文档中选择出含有[data-x]的元素
for (let i = 0; i < specialTags.length; i++) {
  specialTags[i].classList.add('offset')
}
}.call()
