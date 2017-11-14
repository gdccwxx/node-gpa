const Router = require('koa-router');
const student = require('../../lib/gpa');

const common = new Router();
common.get('/common/:xh', async(ctx) => {
    // console.log('hello world');
    console.log(ctx.params.xh);
    let msg = await student.grade(ctx.params.xh);
    console.log(msg);
    ctx.body = {
      status: 1,
      msg
    }
  })
  // common.post('/common/login', async (ctx)=> {
  // 	let queryMsg = {}
  // 	quer
  // })

module.exports = common;