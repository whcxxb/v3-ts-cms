export function setCache(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value))
}
export function getCache(key: string): any {
  const value = localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
}
export function removeCache(key: string): void {
  localStorage.removeItem(key)
}
export function clearCache(): void {
  localStorage.clear()
}
