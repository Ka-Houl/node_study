const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/**引入数据库 */
const db = require("./utils/database");

//从products表里拿数据
db.execute("SELECT * FROM products")
  .then(_res => {
    // console.log(res[0], res[1]);
    console.log(_res[0][0]["imageURL"]);

    const _str = JSON.stringify(_res[0]);
    app.use("/string", (req, res, next) => {
      console.log("在中间件中string...");
      // console.log(db)
      res.send(
        `<h1 style="color: blue; margin-left: 20px">${_str}</h1><img src='${_res[0][0]["imageURL"]}'/>`
      );

      next();
    });
  })
  .catch(err => console.log(err));

const adminRouters = require("./routes/admin");
const shopRouters = require("./routes/shop");

app.use(
  bodyParser.urlencoded({
    extended: false //是否处理非标准的请求
  })
); ///引入这个  可以自动执行中间件

app.use("/home", (req, res, next) => {
  console.log("在中间件中1...");
  // console.log(db)
  res.send('<h1 style="color: red; margin-left: 20px">11111111</h1>');

  next();
});

app.use("/my", (req, res, next) => {
  console.log("在中间件中1...");
  res.send('<h1 style="color: orange; margin-left: 20px">2222</h1>');

  // next();
});

app.use(adminRouters);
// app.use('/add-product',(req,res,next) => {
// 	res.send('<form action="/product" method="POST"><input type="text" name="title"></input> <button tpye="submit">添加产品</button></form>')

// 	// next();
// })

// // app.get('/product',(req,res,next) => {   //get方法，  则只检测get请求
// // app.post('/product',(req,res,next) => {   //改成post方法  则只检测post请求

// app.use('/product',(req,res,next) => {
// 	console.log(req.body)    //引入bodyParser后  这里能拿到body数据了
// 	res.redirect("/")   //重定向
// 	// next();
// })

app.use(shopRouters);

// app.use('/',(req,res,next) => {
// 	console.log('在另一个中间件中...')
// 	res.send('<h1>3333</h1>')
// 	next();

// })

const server = http.createServer(app);
server.listen(3000); //==>app.use(3000)
