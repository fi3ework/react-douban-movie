function getElementPos(e) {
  if (!e) {
    return { x: 0, y: 0 }
  }

  let currEle = e
  let x = currEle.offsetLeft,
    y = currEle.offsetTop,
    translate = window.getComputedStyle(currEle, null).transform,
    translateX = Number.parseInt(/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+), \-?\d+\)/.exec(translate)[1], 10),
    translateY = Number.parseInt(/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+)\)/.exec(translate)[1], 10)
  x += translateX
  y += translateY

  while (currEle.offsetParent) {
    currEle = currEle.offsetParent
    translate = window.getComputedStyle(currEle, null).transform
    if (/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+), \-?\d+\)/.exec(translate)) {
      x += currEle.offsetLeft + Number.parseInt(/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+), \-?\d+\)/.exec(translate)[1], 10)
    } else {
      x += currEle.offsetLeft
    }

    if (/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+)\)/.exec(translate)) {
      y += currEle.offsetTop + Number.parseInt(/matrix\(\-?\d+, \-?\d+, \-?\d+, \-?\d+, \-?\d+, (\-?\d+)\)/.exec(translate)[1], 10)
    } else {
      y += currEle.offsetTop
    }
  }
  return {
    'x': x,
    'y': y
  }
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