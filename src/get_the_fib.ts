const getTheFib = (num: number): number => {
  let nowAndThen: number[] = [0, 1]
  for (let i = 1; i < num; i++) {
    const now = nowAndThen[1]
    const then = nowAndThen.reduce((a, v) => a + v)
    nowAndThen = [now, then]
  }

  return nowAndThen.reduce((a, v) => a + v)
}

const getTheRecursiveFib = (
  num: number,
  cnt: number = 1,
  thePair: number[] = [0, 1]
): number => {
  if (cnt < num) {
    const now = thePair[1]
    const then = thePair.reduce((a, v) => a + v)
    return getTheRecursiveFib(num, ++cnt, [now, then])
  }

  return thePair.reduce((a, v) => a + v)
}

module.exports = { getTheFib, getTheRecursiveFib }
