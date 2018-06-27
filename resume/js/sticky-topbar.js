!function () {

  var view = View('#topNavBar')

  var controller = {
    view: null,
    init: function (view) {
      this.view = view
      this.bindEvents()
    },
    bindEvents: function (view) {
      var view=this.view
      window.addEventListener('scroll',  (x) =>{//打印用户滚动了多少像素 console.log(window.scrollY)
        if (window.scrollY > 0) {
          this.active()
        }
        else {
          this.deactive()
        }
      })//如果用户滚到超过0像素 class上添加sticky 否则删除sticky) 
    },
    active:function(){
      this.view.classList.add('sticky')
    },
    deactive:function(){
      this.view.     classList.remove('sticky')
    }
  }

  controller.init(view)
}
  .call()

