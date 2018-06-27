window.Model = function (options) {
  let resourceName = options.resourceName
  return {
    init: function () {
      var APP_ID = 'f8irXf31uPkCpOCX1qiV3gDK-gzGzoHsz'
      var APP_KEY = 'IQwV43BLkHT8yJeemUasdRLR'
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    fetch: function () {
      var query = new AV.Query(resourceName)
      return query.find()
    },
    save: function (object) {
      let X = AV.Object.extend(resourceName);
      let x = new X()
      return x.save(object)
    }
  }
}