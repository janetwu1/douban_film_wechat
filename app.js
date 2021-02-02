App({
  userInfo:null,
  onLaunch(){
  /**
   * 当应用启动时获取用户信息
   */ 
  wx.getSetting({
    success:res => {
      // 判断是否授权用户信息
      if(res.authSetting['scope.userInfo']){
        wx.getUserInfo({
          success: res => {
            // console.log(res.userInfo);
            this.userInfo = res.userInfo;

            if(this.userInfoReadyCallback){
              this.userInfoReadyCallback(res);
            }
          }
        })
      }
    }
  })
 }
})