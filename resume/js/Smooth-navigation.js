
!function () {
  var view = View('nav.menu')

  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.initNavbar()
      this.initAnimation()
      this.bindEvents()
    },
    initNavbar: function () {
      let liTags = view.querySelectorAll('nav.menu > ul > li')/*返回与指定的选择器组匹配的文档中的元素列表*/
      for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (x) {/*每当鼠标经过时*/
          x.currentTarget.classList.add('active')/*用户鼠标经过得是监听的哪一个li 给哪个li添加active*/
        }
        liTags[i].onmouseleave = function (x) {/*当鼠标移出*/
          x.currentTarget.classList.remove('active')
        }
      }
    },
    initAnimation: function () {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate)//告诉浏览器多长时间动一次（请求动画帧率）
    },
    scrollToElement: function (element) {
      let top = element.offsetTop
      let currentTop = window.scrollY
      let targetTop = top - 80
      let s = targetTop - currentTop // 路程
      var coords = { y: currentTop }; // 起始位置
      var t = Math.abs((s / 100) * 300) // 时间
      if (t > 1000) { t = 1000 }
      var tween = new TWEEN.Tween(coords) // 起始位置
        .to({ y: targetTop }, t) // 结束位置 和 时间
        .easing(TWEEN.Easing.Back.Out) // 缓动类型
        .onUpdate(function () {
          // coords.y 已经变了
          window.scrollTo(0, coords.y) // 如何更新界面
        })
        .start(); // 开始缓动
    },
    bindEvents: function () {
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = (x) => {
          x.preventDefault()
          let a = x.currentTarget
          let href = a.getAttribute('href') //'#siteAbout'
          let element = document.querySelector(href)
          this.scrollToElement(element)
        }
      }
    },

  }

  controller.init(view)
}.call()

