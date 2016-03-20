/**
 * 单利类
 * 主要进行存放对应协议相关缓存数据
 * Created by liyangli on 16/3/20.
 */

//协议实体bean
var ProtocolBean = function(msgId,content){
    //具体msgId
    this.msgId = msgId;
    //具体内容.含有对应设定整体信息..
    this.content = content;

};
/**
 * 外界真正访问的类.这个就可以只关注对应缓存数据文件了
 * @type {{protocolDatas: Array, setCache: ProtocolCache.setCache, clearCache: ProtocolCache.clearCache, findCache: ProtocolCache.findCache, _replaceData: ProtocolCache._replaceData}}
 */
var ProtocolCache = {
    //缓存数据
    protocolDatas: [],
    //设定缓存数据
    setCache: function(msgId,content){
        //判断当前缓存中对应数据.如果content为正常值直接进行替换
        var self = this;
        var datas = self.protocolDatas;
        if(datas.isEmpty()){
            self.protocolDatas.push(new ProtocolBean(msgId,content));
        }else{
            //表明之前已经存在数据了,需要对历史数据进行判断,存在直接替换
            self._replaceData(msgId,content);
        }
    },
    clearCache: function(msgId){
       //进行清除指定缓存.可能由于没哟匹配上,或者直接获取数据进行处理了.不需要一直在内存中进行匹配
        var self = this;
        var datas = self.protocolDatas;
        //标示是否能够正常匹配上去,如果为false表明没有配上.
        var k ;
        for(var i= 0,len = datas.length;i<len ;i++){
            var data = datas[i];
            if(msgId === data.msgId){
                k = i;
                break;
            }
        }
        if(k){
            //表明需要进行删除
            datas.pop(k);
        }
    },
    findCache: function(msgId){
        //获取数据后就从内存中进行删除
        var self = this;
        var datas = self.protocolDatas;
        //标示是否能够正常匹配上去,如果为false表明没有配上.
        var k ;
        var entity ;
        for(var i= 0,len = datas.length;i<len ;i++){
            var data = datas[i];
            if(msgId === data.msgId){
                k = i;
                entity = data;
                break;
            }
        }
        if(k){
            //表明需要进行删除
            datas.pop(k);
        }
        return entity;
    },
    _replaceData: function(msgId,content){
        var self = this;
        var datas = self.protocolDatas;
        //标示是否能够正常匹配上去,如果为false表明没有配上.
        var flag = false;
        for(var i= 0,len = datas.length;i<len ;i++){
            var data = datas[i];
            if(msgId === data.msgId){
                data.content = content;
                flag = true;
                break;
            }
        }
        if(!flag){
            self.protocolDatas.push(new ProtocolBean(msgId,content));
        }
    }

};
module.exports = ProtocolCache;
