const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: {
        'index':'./src/page/index/index.js',
        'user-login':'./src/page/user-login/index.js',
  },
  output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'resources/[name][ext][query]'
    },
  plugins: [
    new MiniCssExtractPlugin({filename:'css/[name].css'}),
    new HtmlWebpackPlugin({
      template :'./src/view/index.html',
      filename :'view/index.html',
      //自动注入
      inject   :true,
      //生成hash码，方便以后维护,用于显示js文件的当前版本
      hash     :true,
      //声明要注入的对象
      chunks   :['util','index'],
    }),
  ],
  module: {
      rules: [
         {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
         },
         {
            test: /\.htm$/i,
            use: {
              loader :'html-loader',
              options:{
                  esModule:false
              }
            }
         },
         {
          test : /\.(woff|woff2|eot|ttf|otf)$/i,
          type : 'asset/resource',
         }
      ],
  },
  optimization: {
    //优化webpack-dev-server
      runtimeChunk: 'single',
    //提取公共模块
      splitChunks: {
          cacheGroups:{
            commons:{
              //提取出的公共模块名
              name     :'util',
              //所有（all）的模块都会被监测
              chunks   :'all',
              //当有两个或者两个以上接口时就会对该模块进行管理
              minChunks:2,
              //
              minSize  :0

            }
          }
      },
  },
  resolve: {
    //设置别名——注意路径问题
      alias : {
            node_modules:  path.resolve(__dirname, './node_modules'),
            page        :  path.resolve(__dirname, './src/page'),
            utils       :  path.resolve(__dirname, './src/utils'),
            view        :  path.resolve(__dirname, './src/view'),
            service     :  path.resolve(__dirname, './src/service'),
            live2d_path     :  path.resolve(__dirname, './src/live2d-widget'),
      }    
  },
 
  //搭建本地服务器：与Tomcat、8080的效果是一样的
  devServer: {
      static: './dist',
  },
  mode: 'development',
};
module.exports = config;

