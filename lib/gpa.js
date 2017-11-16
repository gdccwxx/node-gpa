const grade = require('../modle/').course;

exports.gradeAll = (xh) => grade.find({ "XH": xh }).sort({ "XQMC": 1 });