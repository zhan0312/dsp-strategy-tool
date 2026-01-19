import { FUNNEL_CONFIG } from './config'

export function applyVars(text, vars) {
  return text
    .replace(/\[XX\]/g, vars.xx || '[XX]')
    .replace(/\[类目\]/g, vars.category || '[类目]')
}

export function buildRow(funnel, audienceKey, daily, total, vars = {}) {
  const cfg = FUNNEL_CONFIG[funnel]
  const aud = cfg.audiences[audienceKey]
  const isP = audienceKey === 'P+'

  return {
    funnel,
    audience: aud.label,
    audienceStrategy: applyVars(aud.strategy, vars),
    audienceDetail: applyVars(aud.detail, vars),
    KPI: cfg.KPI,
    frequency: cfg.Frequency,
    lineItem: aud.lineItem,
    excludedAudience: isP ? '/' : 'OWN & CMP-365D Purchases',
    daily,
    monthly: daily * 30,
    percent: ((daily / total) * 100).toFixed(1) + '%'
  }
}
