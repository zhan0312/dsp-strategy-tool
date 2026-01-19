import { useState } from 'react'
import { generateStrategies } from './strategy'
import { generateSummary } from './summary'
import { generatePPTText } from './ppt'

export default function App() {
  const [asinInput, setAsinInput] = useState('')
  const [budget, setBudget] = useState(100)
  const [type, setType] = useState('normal')
  const [result, setResult] = useState([])

  const asins = asinInput.split(/[\n,]/).map(a => a.trim()).filter(Boolean)

  const generate = () => {
    const all = []
    asins.forEach(asin => {
      generateStrategies({ type, dailyBudget: budget })
        .forEach(r => all.push({ asin, ...r }))
    })
    setResult(all)
  }

  const copyExcel = () => {
    const header = Object.keys(result[0] || {})
    const rows = result.map(r => header.map(h => r[h]))
    navigator.clipboard.writeText(
      [header, ...rows].map(r => r.join('\t')).join('\n')
    )
    alert('已复制到 Excel')
  }

  const grouped = {}
  result.forEach(r => {
    grouped[r.asin] = grouped[r.asin] || []
    grouped[r.asin].push(r)
  })

  return (
    <div className="container">
      <h1>DSP 策略一键生成工具</h1>

      <textarea
        rows={4}
        placeholder="输入 ASIN（支持多行或逗号）"
        value={asinInput}
        onChange={e => setAsinInput(e.target.value)}
      />

      <div className="form">
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="normal">常规策略</option>
          <option value="P+">P+策略</option>
        </select>

        <input
          type="number"
          value={budget}
          onChange={e => setBudget(e.target.value)}
        />

        <button onClick={generate}>生成策略</button>
        <button onClick={copyExcel}>复制 Excel</button>
      </div>

      {Object.entries(grouped).map(([asin, rows]) => (
        <div key={asin}>
          <h3>{asin}</h3>
          <pre>{generateSummary(asin, rows, type)}</pre>
          <pre>{generatePPTText(asin, rows, type)}</pre>
        </div>
      ))}
    </div>
  )
}
