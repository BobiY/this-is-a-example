var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:__dirname + "/demo/react_LifeCycle/test.js",
  output:{
    filename:"bundle.js",
    path:__dirname + "/demo/react_LifeCycle"
  },
  module:{
    rules:[
       {
          test:/\.js$/,
          loader:"babel-loader",
          options: {
           presets: ["es2015","react"]
          }
       },
       {
         test: /\.css$/,
         use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use: "css-loader"
         })
       },
       {
         test: /\.(png|jpg)$/,
　　　　　loader: 'url-loader?limit=10000&name=[sha512:hash:base64:7].[ext]'
       }
    ]
  },
  devServer:{
    contentBase:__dirname + "/public",
    inline:true,
    port:5000
  },
  plugins:[
     new webpack.HotModuleReplacementPlugin(),
     new ExtractTextPlugin('[name].css')
  ]
};
