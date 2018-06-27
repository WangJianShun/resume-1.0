!function () {

  var view = document.querySelector('#mySlides')
  var controller = {
    swiper: null,
    swiperOption: {

      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    init: function (view) {
      this.view = view
      this.initSwiper()
    },
    initSwiper: function () {
      this.swiper = new Swiper(view.querySelector('.swiper-container'),
        this.swiperOption
      )
    }
  }


  controller.init(view)
}
  .call()

