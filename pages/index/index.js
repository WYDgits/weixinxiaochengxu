//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    idnum: '191905010101',//191905010101
    password: '123456',//123456,
    pswname : '上网密码',
    idname:'上网账号',
    deadline:'2019年10月10日12：30',
    tobeknow:{
      header:'上网使用须知：',
      first:'1.首先连接上iHNUST的校园网',
      second:'2.根据给出的登陆账号和登录密码进行登录',
      third1:'3.本账号有效期至',
      third2: '，失效后需要重新注册'
    }
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