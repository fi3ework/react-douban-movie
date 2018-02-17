let caches = {}

const cacheMiddleware = store => next => action => {
  if (typeof action.cacheKey === 'undefined') {
    next(action)
  }
  let cacheIndex = Object.keys(caches).indexOf(action.cacheKey)
  if (cacheIndex < 0) {
    caches[action.cacheKey] = action.cacheValue
  }
  console.log(caches)
  next(action)
}

const getCache = (cacheKey) => {
  console.log(caches)
  return caches[cacheKey]
}

const isCached = (cacheKey, cacheCompare = () => {
  let cacheIndex = Object.keys(caches).indexOf(cacheKey)
  return cacheIndex < 0 ? false : true
}) => {
  return cacheCompare(cacheKey)
}

export { cacheMiddleware, isCached, getCache }
