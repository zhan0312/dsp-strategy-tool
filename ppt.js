export function generatePPTText(asin, rows, type) {
  const total = rows.reduce((s, r) => s + r.daily, 0)
  const sum = f =>
    rows.filter(r => r.funnel === f).reduce((s, r) => s + r.daily, 0)

  const pct = f => Math.round((sum(f) / total) * 100)

  let text = `DSP 投放策略说明（ASIN：${asin}）\n\n`
  text += `【投放目标】\n提升整体 ROAS，放大中后端转化效率。\n\n`
  text += `【策略结构】\n`

  if (type === 'P+') {
    text += `采用 P+ 人群策略，AI 拉新与再营销并行。\n`
  } else {
    if (sum('Awareness') > 0)
      text += `- Awareness（${pct('Awareness')}%）：前端拉新\n`
    text +=
      `- Consideration（${pct('Consideration')}%）：核心投放\n` +
      `- Conversion（${pct('Conversion')}%）：转化承接\n`
  }

  text += `\n【优化逻辑】\n人群分层 + 预算倾斜，提升整体投放效率。`
  return text
}


