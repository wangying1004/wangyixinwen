(function(){
  var xiala=document.getElementById("xiala");
  var daohang_list=document.getElementById("daohang_list")
  xiala.onclick=function(){
    if(daohang_list.style.display=='block'){
      console.log('hhhh');
      daohang_list.style.display="none";
      xiala.style.transform = 'rotate(90deg)'
    }else {
      daohang_list.style.display="block";
      xiala.style.transform = 'rotate(270deg)'
    }
  }
  function  init(){
    $.ajax({
      url:'http://apis.baidu.com/txapi/world/world',
      type:"GET",
      data:{
        'num':40,
        'page':1
      },
      headers:{
        'apikey':'b53b6efee90a5cf9012bf34a39cb4c6c'
      },
      success:function(data){
        console.log(data);
        var ul=document.getElementById("ul");
        for (var i=0;i<data.newslist.length;i++){
          var li=document.createElement("li");
          ul.appendChild(li)
          li.innerHTML='<a class="img_href"><img class="img" src = "" style = "width: 335px;height:220px;left: -5px;top: 10px;"></a> ' +
            '<a class="text_href"><p class="text" style = "top: -30px;left: 345px;font-size: 3em;width: 550px"></p></a> ' +
            '<p class="time" style = "top: 120px; left: 360px;font-size: 2.5em;width: 500px"></p> ' +
            '<hr style = "top: 255px; left: -10px;;width: 890px">';
        }
        for (var j=0;j<data.newslist.length;j++){
          var img = document.getElementsByClassName('img');
          var text = document.getElementsByClassName('text');
          var time = document.getElementsByClassName('time');
          var img_href = document.getElementsByClassName('img_href');
          var text_href = document.getElementsByClassName('text_href');
          img[j].src = data.newslist[j].picUrl;
          text[j].innerHTML = data.newslist[j].title;
          time[j].innerHTML = data.newslist[j].ctime;
          img_href[j].href=data.newslist[j].url;
          text_href[j].href=data.newslist[j].url;
        }(j)
      },
      error:function(err){
        alert(err.Msg)
      }
    });
  }
  init();

  var obj=[
    {title: '推荐', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '新闻', url: 'http://apis.baidu.com/txapi/world/world'},
    {title: '娱乐', url: 'http://apis.baidu.com/txapi/huabian/newtop'},
    {title: '体育', url: 'http://apis.baidu.com/txapi/tiyu/tiyu'},
    {title: '图片', url: 'http://apis.baidu.com/txapi/mvtp/meinv'},
    {title: '财经', url: 'http://apis.baidu.com/txapi/health/health'},
    {title: '汽车', url: 'http://apis.baidu.com/txapi/huabian/newtop'},
    {title: '军事', url: 'http://apis.baidu.com/txapi/huabian/newtop'},
    {title: '直播', url: 'http://apis.baidu.com/txapi/tiyu/tiyu'},
    {title: '视频', url: 'http://apis.baidu.com/txapi/world/world'},
    {title: '段子', url: 'http://apis.baidu.com/txapi/huabian/newtop'},
    {title: '时尚', url: 'http://apis.baidu.com/txapi/tiyu/tiyu'},
    {title: '本地', url: 'http://apis.baidu.com/txapi/mvtp/meinv'},
    {title: '网易号', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '手机', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '公开课', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '科技', url: 'http://apis.baidu.com/txapi/keji/keji'},
    {title: '跟贴', url: 'http://apis.baidu.com/txapi/world/world'},
    {title: '游戏', url: 'http://apis.baidu.com/txapi/huabian/newtop'},
    {title: '数码', url: 'http://apis.baidu.com/txapi/tiyu/tiyu'},
    {title: '教育', url: 'http://apis.baidu.com/txapi/mvtp/meinv'},
    {title: '健康', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '独家', url: 'http://apis.baidu.com/txapi/huabian/newtop'},
    {title: '航空', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '旅游', url: 'http://apis.baidu.com/txapi/tiyu/tiyu'},
    {title: '亲子', url: 'http://apis.baidu.com/txapi/apple/apple'},
    {title: '酒香', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '彩票', url: 'http://apis.baidu.com/txapi/world/world'},
    {title: '星闻', url: 'http://apis.baidu.com/txapi/huabian/newtop'},
    {title: '房产', url: 'http://apis.baidu.com/txapi/tiyu/tiyu'},
    {title: '家居', url: 'http://apis.baidu.com/txapi/mvtp/meinv'},
    {title: '小说', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
    {title: '漫画', url: 'http://apis.baidu.com/txapi/apple/apple'},
    {title: 'BoBo', url: 'http://apis.baidu.com/txapi/qiwen/qiwen'},
   ]

   var title=document.getElementsByClassName("title");
   for(var a=0;a<title.length;a++){
     (function(a){
       title[a].onclick=function(){
         if (this.innerHTML == obj[a].title) {
           for(var m=0;m<40;m++){
             var ul=document.getElementById('ul');
             var li = document.getElementsByTagName('li')[0];
             ul.removeChild(li);
           }
           var url = obj[a].url;
           $.ajax({
             url: url,
             type: "GET",
             data: {
               'num': 40,
               'page': 1
             },

             headers: {
               'apikey': 'b53b6efee90a5cf9012bf34a39cb4c6c'
             },
             success: function (data) {
               console.log(data);
               var ul = document.getElementById('ul');
               for (var i = 0; i < data.newslist.length; i++) {
                 var li = document.createElement("li");
                 ul.appendChild(li);
                 li.innerHTML =
                   '<a class="img_href"><img class="img" src = "" style = "width: 335px;height:220px;left: -5px;top: 10px;"></a> ' +
                   '<a class="text_href"><p class="text" style = "top: -30px;left: 345px;font-size: 3em;width: 555px"></p></a> ' +
                   '<p class="time" style = "top: 140px; left: 360px;font-size: 2.5em;width: 500px"></p> ' +
                   '<hr style = "top: 255px; left: -10px;;width: 890px">';
               }
               for (var j = 0; j < data.newslist.length; j++) {
                 (function (j) {
                   var img = document.getElementsByClassName('img');
                   var text = document.getElementsByClassName('text');
                   var time = document.getElementsByClassName('time');
                   var img_href = document.getElementsByClassName('img_href');
                   var text_href = document.getElementsByClassName('text_href');
                   img[j].src = data.newslist[j].picUrl;
                   text[j].innerHTML = data.newslist[j].title;
                   time[j].innerHTML = data.newslist[j].ctime;
                   img_href[j].href = data.newslist[j].url;
                   text_href[j].href = data.newslist[j].url;
                 })(j)
               }
             },
             error: function (err) {
               console.log(err.Msg)
             }
           });
         }
       }
     })(a)
   }
})()
