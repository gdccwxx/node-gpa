const grade = require('../modle/').course;

exports.gradeAll = (xh) => grade.find({ "XH": xh }).sort({ "XQMC": 1 });
exports.countSemester = (xh) => grade.aggregate([{ $match: { XH: xh } }, { $group: { _id: "$XQMC", examNum: { $sum: 1 } } }, { $sort: { _id: 1 } }]);