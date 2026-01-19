import { buildRow } from './utils'

export function generateStrategies({ type, dailyBudget }) {
  const budget = Number(dailyBudget)
  const rows = []

  if (type === 'P+') {
    const half = Math.floor(budget / 2 / 5) * 5
    rows.push(buildRow('Consideration', 'P+', half, budget))
    rows.push(buildRow('Conversion', 'P+', budget - half, budget))
  } else {
    const awareness = budget >= 100 ? Math.floor(budget * 0.1 / 5) * 5 : 0
    const consideration = Math.floor(budget * 0.6 / 5) * 5
    const conversion = budget - awareness - consideration

    if (awareness > 0)
      rows.push(buildRow('Awareness', 'IM', awareness, budget))

    rows.push(buildRow('Consideration', 'P+', consideration, budget))
    rows.push(buildRow('Conversion', 'OWN ASIN XXD', conversion, budget))
  }

  return rows
}


