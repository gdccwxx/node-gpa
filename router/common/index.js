const Router = require('koa-router');
const student = require('../../lib/gpa');

const common = new Router();
common.get('/common/:xh', async(ctx) => {
    try {
      let msg = await student.gradeAll(ctx.params.xh);
      console.log(msg)
      ctx.body = {
        status: 1,
        msg
      }
    } catch (e) {
      console.log("error" + e);
    }
  })
  // common.post('/common/login', async (ctx)=> {
  // 	let queryMsg = {}
  // 	quer
  // })

module.exports = common;