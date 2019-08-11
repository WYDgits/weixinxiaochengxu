// pages/modify_psw/modify_psw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    password1:'',
    password2:''
  },
  new1:function(event){
    this.setData({password1:event.detail.value})
  },
  new2: function (event) {
    this.setData({ password2: event.detail.value })
  },
  confirm:function(){
    if(this.data.password1.trim()!=''&&this.data.password2.trim()!=''){
      if (this.data.password1.trim() == this.data.password2.trim()){
        getApp().globalData.password = this.data.password1 
        wx.showToast({
          title: '修改成功',
          icon:'success',
          success:function(){
            wx.navigateBack()
          }
        })
      }else{
        wx.showToast({
          title: '密码输入不一致',
          image: '../../images/error.png'
        })
      }
    }else{
      wx.showToast({
        title: '输入不能为空',
        image:'../../images/error.png'
      })
    }
  },
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