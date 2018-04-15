function getAbsPos(e) {
  const x = window.pageXOffset + e.getBoundingClientRect().left
  const y = window.pageYOffset + e.getBoundingClientRect().top
  return { x, y }
}

export { getAbsPos }