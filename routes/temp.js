/**
 * 模板引擎处理类
 * Created by liyangli on 16/3/2.
 */

var express = require('express');

var fs = require('fs');
var app = express();


app.set('views','./views');
app.set('view engine','jade');
var router = express.Router();
router.get("/",function(req,rsp){
    console.info("i am in temp");
   rsp.render("temp",{title:'title',message:'Hi message'})
});


module.exports = router;

