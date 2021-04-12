const prefix = `hihuMarket`

export const createOne = (key, value) => {
    const vKey = `${prefix}.${key}`
    const vValue = JSON.stringify(value)

    localStorage.setItem(vKey, vValue)
}

export const getOne = (key) => {
    const vKey = `${prefix}.${key}`
    const value = localStorage.getItem(vKey)

    return value ? JSON.parse(value) : null
}

export const updateOne = (key, value) => {
    const vKey = `${prefix}.${key}`
    const vValue = JSON.stringify(value)

    localStorage.setItem(vKey, vValue)
}

export const getAll = (searchString = '') => {
    return Object.keys(localStorage).reduce((obj, k) => {
        return { ...obj, [k]: localStorage.getItem(k) }
    }, {})
}
