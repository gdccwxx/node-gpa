const shouldCalculateGPA = (score) => {
  // 非正常考试的：补考
  if (score.exam_type !== '正常考试') {
    return false
  }
  if (score.lesson_type === '必修') {
    return true
  }
  // 选修分二类通识和专业选修
  if (score.course_type === '专业选修课') {
    return true
  }
  return false
}

export default function calculateGPA(scores) {
  if (!Array.isArray(scores)) return '加载中'
  if (scores.length === 0) return '加载中'
  scores = scores.filter(shouldCalculateGPA)

  const GPSum = scores.reduce((prev, curr) => {
    const AP = calculateAP(parseFloat(curr.score))
    const GP = AP * parseFloat(curr.credit)
    return prev + GP
  }, 0)
  const creditSum = scores.reduce((prev, curr) => {
    return prev + parseFloat(curr.credit)
  }, 0)

  const GPA = GPSum / creditSum
  return GPA.toFixed(3)
}

function calculateAP(score) {
  if (score >= 90) return 4
  if (score >= 85) return 3.7
  if (score >= 82) return 3.3
  if (score >= 78) return 3
  if (score >= 75) return 2.7
  if (score >= 71) return 2.3
  if (score >= 66) return 2
  if (score >= 62) return 1.7
  if (score >= 60) return 1.3
  return 0
}