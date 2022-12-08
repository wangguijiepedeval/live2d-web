require('./index.css');
require('../common/index.js');
// require('page/common/nav-top-simple/index.js')
require('page/common/nav-top/index.js');
require('page/common/nav-search/index.js');

// require("../../live2d-widget/autoload.js");
require("../../live2d-widget/waifu.css")
require("../../live2d-widget/live2d.min.js");
require("../../live2d-widget/waifu-tips.js");

var waifu = require("../../live2d-widget/waifu-tips.json")


var _common_util = require('utils/util.js');

// _common_util.request({
//     url:'./abc',
// });


    //test!
    // var formData=new FormData();//使用FormData格式传递
    // var _username=document.getElementById('username').value;
    // var _password=document.getElementById('password').value;

    // formData.append("username", _username);
    // formData.append("password", _password);

    // $("#testId").click(function() {
    //     $.ajax({
    //         type: "POST",
    //         url: "http://localhost:8099/user/login",
    //         data: formData,
    //         contentType: false,
    //         processData :false,
    //         success: function(data) {
    //             console.log(data);
    //             console.log('ajax请求成功');
    //             alert("ajax请求成功！");
    //         },
    //         error: function (data) {//ajax请求失败后触发的方法
    //             console.log('Send Request Fail..');
    //         }
    //     });
    // });

    if (screen.width >= 68) {
        Promise.all([
            console.log(screen.width)
        ]).then(() => {
            // 配置选项的具体用法见 README.md
            initWidget({
                waifuPath: "../../live2d-widget/waifu-tips.json",
                //apiPath: "https://live2d.fghrsh.net/api/",
                cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
                tools: ["hitokoto", "photo", "info", "switch-model", "switch-texture"]
            });
        });
    }

