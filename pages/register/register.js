// pages/register/register.js
var app = getApp();
Page({

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    // this.phoneNum = getApp().globalData.phoneNum, 
    // this.validation = getApp().globalData.validation,

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
  /**
   * 页面的初始数据
   */
  data: {
    phoneNum: '',
    validation: '',
    codename: '获取验证码',
    disabled: false,
    isShow: true
  },
  login:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },
  inputNum: function(e) {
    this.setData({
      phoneNum: e.detail.value
    })
    console.log("phone:"+e.detail.value)
  },
  inputValid: function(e) {
    this.setData({
      validation: e.detail.value
    })
    console.log("valid:"+e.detail.value)
  },
   /*
    发送验证码：要求有正确的手机号码
    设置了 num 表示发送周期，成功发送之后会进入冷却时间
    暂还未添加请求操作
  */
  getData: function() {
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;

    if (this.data.phoneNum.trim() == ''||!myreg.test(this.data.phoneNum.trim())) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return 0;
    }
    var that = this;
    var num = app.globalData.sendMail;
    wx.showLoading({
      title: '加载中',
    }, setTimeout(function() {
      var _this = that
      wx.hideLoading()
      wx.showToast({
        title: '发送成功',
        icon: 'success',
        duration: 1000,
        success: function() {
          _this.setData({
            disabled: true,
            codename: num + "s后重新获取"
          })
        }
      })

      var timer = setInterval(function() {
        num--;
        if (num <= 0) {
          clearInterval(timer);
          _this.setData({
            codename: '重新获取',
            disabled: false
          })
        } else {
          _this.setData({
            codename: num + "s后重新获取",
            disabled: true
          })
        }
      }, 1000)
    }, 1000))
  },

  /*
    注册信息：要求有正确的手机号码和正确的验证码
    暂还未添加请求操作
  */
  register: function() {
    let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    let n = /^\d{6}$/;
    if (this.data.phoneNum.trim() == ''||!myreg.test(this.data.phoneNum.trim())) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.validation.trim() == '' || !n.test(this.data.validation.trim())) {
      wx.showToast({
        title: '请输入正确的验证码',
        icon: 'none',
        duration: 1000
      })
      return 0;
    }else {
      getApp().globalData.phoneNum = this.data.phoneNum.trim();
      getApp().globalData.validation = this.data.validation.trim();
      getApp().globalData.setTime =  new Date().getTime();
      wx.showToast({
        title: '注册成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(function(){
        wx.switchTab({
          url: '../index/index',
        })
      },1000)
    }
  }
})