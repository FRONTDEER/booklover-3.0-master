// pages/copy/wxmp.js
const PCB = require('../../utils/common');
const API = require('../../utils/api')
const app = getApp()

Component({
  behaviors: [PCB],
  properties: {
    // 接受页面参数
    websrc: String,
  },
  /**
   * 页面的初始数据
   */
  data: {



  },
  attached: function (options) {

  },

  methods: {
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        websrc:options.websrc
      })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
      
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

    },

    
  }
})
