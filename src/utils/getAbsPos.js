function getTransformPos(element) {
  let translate = window.getComputedStyle(element, null).transform
  let translateX
  let translateY
  if (/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, \-?\d+, \-?\d+\)/.exec(translate)) {
    translateX = Number.parseInt(/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+), \-?\d+\)/.exec(translate)[1], 10)
    translateY = Number.parseInt(/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+)\)/.exec(translate)[1], 10)
    return { x: translateX, y: translateY }
  } else {
    return { x: 0, y: 0 }
  }
}

function getElementPos(e) {
  if (!e) {
    return { x: 0, y: 0 }
  }

  let currEle = e
  let translate = getTransformPos(currEle)
  let x = currEle.offsetLeft + translate.x,
    y = currEle.offsetTop + translate.y

  while (currEle.offsetParent) {
    currEle = currEle.offsetParent
    translate = getTransformPos(currEle)
    // console.log(translate)
    x += translate.x + currEle.offsetLeft
    y += translate.y + currEle.offsetTop
  }

  return { x, y }
}

function getElementLeft(element) {
  let actualLeft = element.offsetLeft
  let current = element.offsetParent

  while (current !== null) {
    actualLeft += current.offsetLeft
    current = current.offsetParent
  }

  return actualLeft
}

function getElementTop(element) {
  let actualTop = element.offsetTop
  let current = element.offsetParent

  while (current !== null) {
    actualTop += current.offsetTop
    current = current.offsetParent
  }

  return actualTop
}

export { getElementPos, getElementLeft, getElementTop }