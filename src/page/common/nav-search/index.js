require('./index.css');
var _common_util = require('utils/util.js');
//定义一个对象
var nav_search={
    init: function(){
        this.binEvents();
        this.loadKeyword();
        //返回nav_search自身
        return this;
    },
    //事件绑定函数
    binEvents: function(){
        var _this=this;
        $('#search-button').click(function(){
            _this.searchSubmit();
        });
        $('#search-input').keyup(function(e){
            //判断只有按回车键时才会跳转，其它键盘按键无效
            if(e.keyCode===13){
                _this.searchSubmit();
            }
            
        })
    },
    loadKeyword: function(){
        var keyword=_common_util.getURLparam('keyword');
        if(keyword){
            $('#search-input').val(keyword);
        }

    },
    searchSubmit: function(){
        var keyword=$.trim($('#search-input').val());
        if(keyword){
            window.location.href='./product-list.html?keyword='+keyword;
        }else{
            window.location.href='./index.html';
        }
    }
};

//输出对象-初始化函数，但是为了保证最终过的输出对象仍然有模块nav_top本身，所以需要在init函数中添加返回return。
module.exports=nav_search.init();