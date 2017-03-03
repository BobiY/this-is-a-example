const http = require("http");
const urlLib = require("url");
const fs = require("fs");
var users = {};
const server = http.createServer(function(req,res){
      if(req.url.indexOf("favicon") === -1){
         const obj = urlLib.parse(req.url,true);
         const query = obj.query;
         const pathname = obj.pathname;
         const filePath = __dirname + "/www" + pathname
         if(pathname === "/user"){
            if(query.act === "zhu"){
               if(users[query.text]){
                  res.write('{"ok":"true","msg":"用户名已被占用"}');
               }else {
                 users[query.text] = query.pass;
                 res.write('{"ok":"true","msg":"注册成功"}');
               }
            }else{
              if(users[query.text] && users[query.text] === query.pass){
                res.write('{"ok":"true","msg":"登录成功"}');
              }else{
                res.write('{"ok":"true","msg":"用户名或者密码错误"}');
              }
            }
            res.end();
         }else{
           fs.readFile(filePath, (err,data) => {
             if (err) {
               res.write("<h1>404</h1>");
               res.end()
             }else{
               res.write(data);
               res.end()
             }
           })
        }
       }
})

server.listen(3000)
