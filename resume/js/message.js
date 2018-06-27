!function () {

  var model = Model({ resourceName: 'Message' })
  var view = View('section.message')

  var controller = Controller({
    init: function (view, model) {
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('#postMessage')
      this.loadMessages()
    },
    loadMessages: function () {
      this.model.fetch().then((messages) => {
        let array = messages.map((item) => item.attributes)
        array.forEach(function (item) {
          let li = document.createElement('li')
          let messageList = document.querySelector('#messageList')
          li.innerText = `${item.name}:${item.content}`
          this.messageList.append(li)
        });

        return AV.Object.saveAll(messages);
      }).then(function (messages) {
        // 更新成功
      }, function (error) {
        // 异常处理
      });
    },
    bindEvents: function () {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault()
        this.saveMessages()
      })
    },
    saveMessages: function () {
      let myform = this.form
      let content = myform.querySelector('input[name="content"]').value
      let name = myform.querySelector('input[name="name"]').value
      this.model.save({ 'name': name, 'content': content }).then(function (object) {
        let li = document.createElement('li')
        let messageList = document.querySelector('#messageList')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        messageList.append(li)
        content = myform.querySelector('input[name="content"]').value = ''
      })
    },
  })
  controller.init(view, model)
}
  .call()





