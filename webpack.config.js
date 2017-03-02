var webpack = require("webpack");
module.exports = {
  entry:__dirname + "/component/app.js",
  output:{
    filename:"bundle.js",
    path:__dirname + "/public"
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
         test:/\.css$/,
         use:[
           {loader:"style-loader"},
           {loader:"css-loader"}
         ]
       }
    ]
  },
  devServer:{
    contentBase:__dirname + "/public",
    inline:true,
    port:5000
  },
  plugins:[
     new webpack.HotModuleReplacementPlugin()
  ]
};
