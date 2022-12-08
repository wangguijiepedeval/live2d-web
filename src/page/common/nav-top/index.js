require('./index.css');
var _common_util = require('utils/util.js');

var _user_service= require('service/user-service.js');
var _cart_service= require('service/cart-service.js');

//定义一个对象
var nav_top={
    init: function(){
        this.binEvents();
        this.loadUserInfo();
        this.loadCartCount();
        //返回nav_top自身
        return this;
    },
    binEvents: function(){
        //同构类作为标识来访问以下方法
        $('.js-login').click(function(){
            _common_util.toLogin();
        });
        $('.js-register').click(function(){
            window.location.href='./user-register.html';
        });
        $('.js-logout').click(function(){
            _user_service.logout(
                //登出成功
                function(res){
                    window.location.reload();
                },
                //登出失败
                function(errorMsg){
                    _common_util.errorTips(errorMsg);
                }
            );
        });

    },
    loadUserInfo: function(){
        _user_service.getUserDetail(
            //成功
            function(res){
                $('.user.not-login').hide().siblings('.user.login').show().find('.username').text(res.username);
            },
            //失败
            function(errorMsg){
                //不用处理
            }
        );

    },
    loadCartCount: function(){
        _cart_service.getCartCount(
            //成功
            function(res){
                $('.cart-count').text(res ||0);
            },
            //失败
            function(errorMsg){
                $('.cart-count').text(0);
            }
        );
    }
};

//输出对象-初始化函数，但是为了保证最终过的输出对象仍然有模块nav_top本身，所以需要在init函数中添加返回return。
module.exports=nav_top.init();