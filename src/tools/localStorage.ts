const LOCAL_STORAGE_KEY = 'favourama-state'

export const loadFromLocalStorage = () => {
  try {
    const state = window.localStorage.getItem(LOCAL_STORAGE_KEY)
    return state ? JSON.parse(state) : undefined
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export const saveToLocalStorage = (state: object) => {
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
  } catch (error) {
    console.error(error)
  }
}
