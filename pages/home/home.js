const api = require('../../api/api.js');

Page({
  data: {
    types:[] // 存储所有分类
  },
  onReady: function () {
    // this.loadHotFilms();
    // 只是为了模拟效果
    // setTimeout(() => {
      this.loadHomeData();
    // },3000);
  },
  /* loadHotFilms(){
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items',
      data:{
        start:0,
        count:6
      },
      success: res => {
        let type = {
          title:res.data.subject_collection.name,
          list:res.data.subject_collection_items
        }
        this.setData({
          'types[0]':type
        });
      }
    })
  }, */
  loadHomeData(){
    // 加载影院热映
    api.loadHotFilms({
      start:0,
      count:6
    }).then(data => {
      let type = {
        title:data.subject_collection.name,
        list:data.subject_collection_items,
        method:data.method
      }
      this.setData({
        'types[0]':type
      });
    }).catch(api.showError);

    // 加载近期热门
    api.loadLatestFilms({
      start:0,
      count:6
    }).then(data => {
      let type = {
        title:data.subject_collection.name,
        list:data.subject_collection_items,
        method:data.method
      }
      this.setData({
        'types[1]':type
      });
    }).catch(api.showError);


    // 加载免费在线
    api.loadFreeFilms({
      start:0,
      count:6
    }).then(data => {
      let type = {
        title:data.subject_collection.name,
        list:data.subject_collection_items,
        method:data.method
      }
      this.setData({
        'types[2]':type
      });
    }).catch(api.showError);

  }

})