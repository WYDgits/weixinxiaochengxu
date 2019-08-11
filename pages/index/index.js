//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    phoneNum: '',//191905010101
    password: '',//123456,
    pswname : '上网密码',
    idname:'上网账号',
    Y:'',
    M:'',
    D:'',
    H:'',
    F:'',
    S:'',
    deadline: '',//2019年10月10日12：30
    tobeknow:{
      header:'上网使用须知：',
      first:'1.首先连接上iHNUST的校园网',
      second:'2.根据给出的登陆账号和登录密码进行登录',
      third1:'3.本账号有效期至',
      third2: '，失效后需要重新注册'
    }
  },
  onShow:function(){
    this.setData({
      phoneNum: app.globalData.phoneNum,
      password: app.globalData.password,
      Y: new Date(app.globalData.setTime * 1 + app.globalData.clearSto * 1).getFullYear(),
      M: new Date(app.globalData.setTime * 1 + app.globalData.clearSto * 1).getMonth()+1,
      D: new Date(app.globalData.setTime * 1 + app.globalData.clearSto * 1).getDate(),
      H: new Date(app.globalData.setTime * 1 + app.globalData.clearSto * 1).getHours(),
      F: new Date(app.globalData.setTime * 1 + app.globalData.clearSto * 1).getMinutes(),
      S: new Date(app.globalData.setTime * 1 + app.globalData.clearSto * 1).getSeconds()
    })
  },
  onReady: function() {
    // if (this.idnum.length<=0 || this.password.length<=0) {
    //   new Promise((resolve, reject) => {
    //     wx.showToast({
    //       title: '请先登录注册',
    //       icon: 'loading',
    //       duration: 1000
    //     }),
    //     resolve()
    //   }).then(() => {
    //     setTimeout(function(){
    //       wx.redirectTo({
    //         url: '../register/register',
    //       })
    //     }, 1000)
    //   })
    // }else{

    // }
  },
  //事件处理函数
  goto: function() {

  },
  show: () => {
    wx.showTabBar({

    })
  },
  hide: () => {
    wx.hideTabBar({

    })
  }


})