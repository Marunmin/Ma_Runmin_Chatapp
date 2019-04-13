exports.getNowTime = function(){
  return exports.dateFormat(new Date(),"yyyy-MM-dd hh:mm:ss");
};