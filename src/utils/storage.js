export const STORAGE_KEYS = {
  entries: 'learnlog_entries',
  notes: 'learnlog_notes',
  goals: 'learnlog_goals',
  journey: 'learnlog_journey'
}

export function readStored(key) {
  try {
    const value = window.localStorage.getItem(key)
    return value ? JSON.parse(value) : []
  } catch {
    return []
  }
}

export function writeStored(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const todayISO = () => new Date().toISOString().slice(0, 10)

export function formatDate(date, options = { month: 'short', day: 'numeric', year: 'numeric' }) {
  if (!date) return ''
  return new Intl.DateTimeFormat(undefined, options).format(new Date(`${date}T12:00:00`))
}

export function greeting(hour = new Date().getHours()) {
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}
