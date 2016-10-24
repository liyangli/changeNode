/**
 * 内存处理类
 * 操作步骤：
 * 1、根据不同系统设定不同的操作命令；
 * 2、根据不同操作命令进行解析相关处理
 * 3、存储的数据只记录最后十次数据。其他均有页面进行记录；
 * 4、页面通过线形图展示对应数据
 */
var child_procs = require('child_process');
const os = require('os');

/**
 * 操作系统基础对象
 */
var OS = function() {}
  /**
   * 执行的动作命令
   * @return 需要执行的命令
   */
OS.prototype.__cmd = function() {
    return "";
  }
  /**
   * 需要解析的内容
   * @type {[type]}
   */
OS.prototype.parseContent = function(content) {
  console.info(content);
}


/**
 * linux类型系统
 */
var Linux = function() {

}
Linux.prototype = new OS();
Linux.constructor = OS.constructor;
Linux.prototype.__cmd = function() {
    return "";
  }
  /**
   * win类型对象
   */
var Win = function() {

}
Win.prototype = new OS();
Win.constructor = OS.constructor;
Win.prototype.__cmd = function() {
    return "";
  }
  /**
   * mac 系统
   */
const Mac = function() {

}
Mac.constructor = OS.constructor;
Mac.prototype = new OS();
Mac.prototype.__cmd = function() {
  return "";
}

var platform = os.platform();
var plantSys = null;
if (platform === 'darwin') {
  plantSys = new Mac();
} else if (platform === 'win') {
  plantSys = new Win();
} else {
  plantSys = new Linux();
}
var cmdStr = plantSys.cmd();
var url = plantSys.parseContent();
child_procs.exec(url, function(e, stdout, stderr) {
  if (!e) {
    console.info(stdout);
    rl.close();
  }
});
