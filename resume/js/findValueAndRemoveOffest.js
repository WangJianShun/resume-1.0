
!function () {
  setTimeout(function () {
    findValueAndRemoveOffest()
  }, 1000)

  window.addEventListener('scroll', function () {
    findValueAndRemoveOffest()
  })



  /**helper**/
  function findValueAndRemoveOffest() {
    let specialTags = document.querySelectorAll('[data-x]')//在文档中选择出含有[data-x]的元素
    minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }//哪个specialTags与window.scrollY的绝对值差最小,minIndex的值就是对应的哪一个specialTags
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode //a元素的父元素
    let brotherAndme = li.parentNode.children
    for (i = 0; i < brotherAndme.length; i++) {
      brotherAndme[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}.call()


