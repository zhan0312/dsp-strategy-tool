export const FUNNEL_CONFIG = {
  Awareness: {
    KPI: 'eCPM',
    Frequency: '1 per 1 day',
    audiences: {
      IM: {
        label: 'IM',
        strategy: 'IM - [XX]',
        detail: '近期搜索、浏览过[类目]的高意向人群',
        lineItem: 'ONSITE + OFFSITE'
      },
      LS: {
        label: 'LS',
        strategy: 'LS - [XX]',
        detail: '近期关注[类目]相关内容的兴趣人群',
        lineItem: 'ONSITE + OFFSITE'
      }
    }
  },
  Consideration: {
    KPI: 'Total ROAS',
    Frequency: '2 per 8 hours',
    audiences: {
      'P+': {
        label: 'P+',
        strategy: 'Prospecting 拉新',
        detail: 'Amazon AI 高潜力相似人群',
        lineItem: 'ONSITE + OFFSITE'
      },
      'CMP XXD': {
        label: 'CMP XXD',
        strategy: 'CMP 竞品回溯 [XX]D',
        detail: '竞品浏览未购人群',
        lineItem: 'ONSITE + OFFSITE'
      }
    }
  },
  Conversion: {
    KPI: 'Total ROAS',
    Frequency: '2 per 12 hours',
    audiences: {
      'OWN ASIN XXD': {
        label: 'OWN ASIN XXD',
        strategy: 'OWN ASIN [XX]D 再营销',
        detail: '本品浏览再营销人群',
        lineItem: 'ONSITE + OFFSITE'
      },
      'P+': {
        label: 'P+',
        strategy: 'Remarketing 再营销',
        detail: '高意向回溯人群',
        lineItem: 'ONSITE + OFFSITE'
      }
    }
  }
}
