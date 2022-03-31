// 引入express框架
const express = require('express');
// 引入路径处理模块
const path = require('path');
// 引入mongoose模块
const mongoose = require('mongoose');
// 引入body-Parser模块
const bodyParser = require('body-Parser');
// 创建web服务器
const app = express();
// 设置静态资源访问服务功能
app.use(express.static(path.join(__dirname, "public")));
// 设置处理post请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));



// 数据库连接
mongoose.connect("mongodb://todo:todo@localhost:27017/todo", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});



// 导入todo路由案例
const todoRouter = require('./route/todo');
// 当客户端的请求以/todo开头时
app.use("/todo", todoRouter);



// 监听端口
app.listen(3000);
// 控制台提示输出
console.log("node服务器启动成功");