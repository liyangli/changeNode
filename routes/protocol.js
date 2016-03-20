/**
 * 协议处理的总体入口
 * Created by liyangli on 16/3/20.
 */
var express = require('express');
var protocolCache = require("../protocol/ProtocolCache");
var
var router = express.Router();

router.post("/",function(req,rsp){
   //获取协议中对应内容,根据具体内容进行区分不同处理的类
    var msg = "";
    req.on("data",function(data){
        msg += data;
    });

    req.on("end",function(){
       //表明数据接受完毕.进行试验一下
        //表明接收完毕,需要进行判断验证了..
        //需要进行解析一下
        protocolCache.setCache();
        rsp.send("ok");
        rsp.end();
    });


});

module.exports = router;
