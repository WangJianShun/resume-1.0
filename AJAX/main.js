
window.jQuery = function () { }

window.jQuery.ajax = function (option) {
    return new Promise(function (resolve, reject) {
        let { method, url, headers } = option//析构赋值
        let request = new XMLHttpRequest()
        request.open(method, url)
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {

                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }//请求过程返回值为4时，根据状态码打印内容
        }
        request.send()
    })
}

function success(text){console.log(text)}
function fail(request){console.log(request)}

myButton.addEventListener('click', () => {
     window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
     .then(success,fail
            //(text) => { console.log(text) },//这是一个回调函数
            //(reject) => { console.log(reject) }
        )

})
/*window.promise=function(fn){
    ....
    return{
        then:function(){}
    }
}
promise的基本形式
*/
