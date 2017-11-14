const grade = require('../modle/').grade;

exports.grade = (xh) => grade.find({ "XH": xh });