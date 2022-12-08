
var config={
    serverHost:'http://localhost:8099'
};
//通用模块
var _common_util={
    request: function(param){
        //对this进行缓存
        var _this=this;
        $.ajax({
            type    : param.method || 'GET',
            url     : param.url || '',
            dataType: param.type || 'json',
            data    : param.data || '',
            success:function(res){
                //请求成功，并且服务器返回code为0
                if(0===res.code){
                    typeof param.success === 'function' && param.success(res.data,res.message);
                }
                //请求成功，并且服务器返回code为1，表示错误
                else if(1===res.code){
                    typeof param.error === 'function' && param.error(res.message);
                }
                //请求成功，并且服务器返回code为10，表示参数错误
                else if(10===res.code){
                    typeof param.error === 'function' && param.error(res.message);
                }
                //请求成功，并且服务器返回code为11，表示需要登录
                else if(11===res.code){
                    _this.toLogin();
                }

            },
            //请求失败，服务器返回的HTTP状态码不是200
            error:function(err){
                typeof param.error === 'function' && param.error(err.statusText);
            }


        });
    },
    //跳转到登录界面
    toLogin: function(err){
        window.location.href='./user-login.html?redirect='+encodeURIComponent(window.location.href);
    },
    getServerURL: function(path){
        return config.serverHost+path;
    },
    errorTips: function(msg){
        alert(msg || '出错啦~~~');
    },
    getURLparam: function(name){
        //比如：http://localhost:8099/product/list?keyword=aa&pageSize=1
        /**
         * 我们通过window.location.search获得以上地址的？之后的部分，然后通过subString(1)获得keyword=aa.
         */
        var paramString=window.location.search.substring(1);
        var regExp=new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
        var result=paramString.match(regExp);
        return result ? decodeURIComponent(result[2]):null;//result[2]取的是name的值
    }   
};

//只有输出了，别人才能够引用
module.exports=_common_util;