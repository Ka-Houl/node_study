const express = require('express');

const router = express.Router()


//get方法会完全匹配路径
router.get('/',(req,res,next) => {
	console.log('在另一个中间件中...')	
	res.send('<h1>3333</h1>')
	next();	

})

module.exports = router