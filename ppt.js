export function generateSummary(asin, rows, type) {
  const total = rows.reduce((s, r) => s + r.daily, 0)
  const sum = f =>
    rows.filter(r => r.funnel === f).reduce((s, r) => s + r.daily, 0)

  let text = `ASIN：${asin}\n`

  if (type === 'P+') {
    text +=
      `本次 DSP 投放采用 P+ 策略结构，聚焦中后端转化效率。\n` +
      `通过 Amazon AI 模型进行拉新与再营销并行投放。\n`
  } else {
    text += `本次 DSP 投放采用常规漏斗策略结构。\n`
    if (sum('Awareness') > 0)
      text += `- Awareness 占比 ${Math.round(sum('Awareness') / total * 100)}%\n`
    text +=
      `- Consideration 占比 ${Math.round(sum('Consideration') / total * 100)}%\n` +
      `- Conversion 占比 ${Math.round(sum('Conversion') / total * 100)}%\n`
  }

  text += `整体策略以 ROAS 为核心优化目标。`
  return text
}
