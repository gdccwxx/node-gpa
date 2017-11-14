const Router = require("koa-router");
const common = require('./common');
const api = new Router();

api.use('/api', common.routes());

module.exports = api;