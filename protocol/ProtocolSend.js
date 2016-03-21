/**
 * 协议发送类进行处理.组装需要发送的内容.并且真正进行操作发送功能
 * 发送时主要根据不同类型进行组装不同数据即可..
 *
 * 例如发送类型alarmInfoSet
 * var alarmInfoSet = function(){};
 *
 * Created by liyangli on 16/3/20.
 */
var http = require('http');

var Send = (function(){

    /**
     * 发送的xml内容,
     * 此类类似适配器.主要根据具体内容进行自动组装需要进行发送的数据.
     * @constructor
     */
    var SendXml = function(){}
    SendXml.prototype = {
        _init: function(){},
        _makeHeader: function(){
            //获取对应头信息
        },
        _makeBoot: function(){
            //设置对应底部信息
        },
        content: function(content){
            //获取需要发送的内容
            return content;
        }
    },

    return {
      asysend: function(content){
          //需要进行发送的内容,异步发送,不用等待对应数据返回.直接进行相应
      },
      sendUrl: '',
      send: function(){
          //同步发送,等待对应响应,如果长时间没有响应就直接抛出超时.
          var req = http.request(options,function(res){
                res.setEncoding('utf8');
                res.on('data',function(chunk){
                   console.log(`BODY: ${chunk}`);
                });
              res.on('end',function(){
                  console.log("end");
              })
          });
          req.on('error',function(e){
              console.info(`problem with ${e}`);
          });
          req.write(content);
          req.end();
      }
    };

})();

module.exports = Send;
