const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const gzip = require("koa-gzip");
const convert = require('koa-convert')
const apiRouter = require('./router');

let app = new Koa();

app.use(bodyParser());
app.use(convert(gzip()));
app.use(apiRouter.routes())
app.listen(8023);