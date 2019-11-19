const express = require('express');

const router = express.Router()


router.use('/add-product',(req,res,next) => {
	res.send('<form action="/product" method="POST"><input type="text" name="title"></input> <button tpye="submit">添加产品</button></form>')

	// next();	
})



router.use('/product',(req,res,next) => {
	console.log('Router文件中---------------',req.body)    
	res.redirect("/")   //重定向
	// next();	
})


module.exports = router