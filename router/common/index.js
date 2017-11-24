const Router = require('koa-router');
const student = require('../../lib/gpa');

const common = new Router();
common.get('/common/:xh', async(ctx) => {
  try {
    let msg = await student.gradeAll(ctx.params.xh);
    let count = await student.countSemester(ctx.params.xh);
    // 第一个学期count[0]._id
    console.log(count[0]._id);
    // 学期数
    console.log(count.length);
    ctx.body = {
      status: 1,
      msg
    }
  } catch (e) {
    console.log("error" + e);
  }
})


module.exports = common;