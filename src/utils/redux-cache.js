const caches = {}

const hasCachedKey = (cacheKey) => {
  return Object.keys(caches).indexOf(cacheKey) >= 0
}

const cacheMiddleware = store => next => action => {
  if (typeof action.cacheKey === 'undefined' ||
    typeof action.cacheValue === 'undefined') {
    next(action)
    return
  }

  if (!hasCachedKey(action.cacheKey)) {
    caches[action.cacheKey] = action.cacheValue
  }
  next(action)
}

const getCache = (cacheKey) => {
  if (hasCachedKey) {
    return caches[cacheKey]
  }
}

const isCached = (cacheKey, cacheDetector = hasCachedKey) => {
  return hasCachedKey(cacheKey)
}

export { cacheMiddleware, isCached, getCache }
