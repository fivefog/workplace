// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp = require('request-promise'); //https://github.com/request/request-promise
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return rp(`https://douban.uieee.com/v2/movie/subject/${event.movieid}`)
    .then(function (res) {
      console.log(res);
      return res; //需要return
    })
    .catch(function (err) {
      console.log(err);
    });
}