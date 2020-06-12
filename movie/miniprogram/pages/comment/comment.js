// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieid:'',
    detail:'',
    content:'', //评价内容
    score:5,  //评价分数
  },
  getDetail:function(id){
    wx.showLoading({
      title: '加载中...',
      
    })
    let _this = this;
    wx.cloud.callFunction({
      name:'getDetail',
      data:{
        movieid:id
      }
      
    }).then(res=>{
      wx.hideLoading();
      this.setData({detail:JSON.parse(res.result)})
    }).catch(err=>{
      console.error(err);
      wx.hideLoading();
    })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log()
    this.setData({
      movieid:options.movieid
    })

    this.getDetail(options.movieid);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})