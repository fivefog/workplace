// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[]
  },
  toComment(e){  //去评价
    wx:wx.navigateTo({
      url: `../comment/comment?movieid=${e.target.dataset.movieid}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getMovielist(){
    wx.showLoading({
      title: '加载中...',
    })
    wx.cloud.callFunction({
      name: 'movielist',
      start: this.data.movieList.length,
      count: 10
    }).then(res => {
      wx.hideLoading();
      this.setData({
        movieList: this.data.movieList.concat(JSON.parse(res.result).subjects)
      })
      console.log(this.data.movieList)

    }).catch(err => {
      console.error(err);
      wx.hideLoading();

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取电影列表
    this.getMovielist();
    
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
    this.getMovielist();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})