 //导入express模块
const express=require('express');

//利用express模块创建Web服务器实例对象
const app=express();

//创建请求地址为'/'的GET请求方式的路由
app.get('/',(req,res)=>{
    res.send('<h1>天才就是我！</h1>');
});

//监听8080端口
app.listen(8080,()=>{
    console.log('服务器已启动');
}); 

