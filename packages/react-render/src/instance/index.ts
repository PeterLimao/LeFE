const currentInstance = Object.create(null)

export function getCurrentInstance() {
  return currentInstance
}
