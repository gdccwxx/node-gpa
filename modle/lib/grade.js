const mongoose = require('mongoose');

const grade = new mongoose.Schema({
  XH: { type: String, required: true },
  XM: { type: String, required: true },
  KCBH: { type: String },
  KCMC: { type: String },
  XQMC: { type: String },
  ZCJ: { type: String },
  ZXS: { type: String },
  XF: { type: String },
  BJMC: { type: String },
  KCXZMC: { type: String },
  KCLBMC: { type: String },
  KSXZMC: { type: String },
  DQSZJ: { type: String },
  DJFSMC: { type: String },
  CJXS: { type: String },
})
grade.index({ XH: 1 }, { unique: true })
module.exports = mongoose.model('course', grade);