const beforePostfix = '_before'
const afterPostfix = '_after'

export const buildBeforeKey = (id: string) => `${id}${beforePostfix}`
export const buildAfterKey = (id: string) => `${id}${afterPostfix}`

export const getKeyFromBeforeKey = (key: string) => key.replace(beforePostfix, '')
export const buildKeyFromAfterKey = (key: string) => key.replace(afterPostfix, '')

export const isKeyDropBefore = (key: string) => key.includes(beforePostfix)
