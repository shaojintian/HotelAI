Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  sub: function (e) {
    console.log(e.detail.value)
  }
  ,
  roomControl:function(e){

    wx.navigateTo({
      url: '/pages/FormM/FormM',
    })
  }

})