const { expect } = require('chai')
const fibs = require('../src/get_the_fib')

describe('git_the_fib.ts', () => {
  context('getTheFib', () => {
    const subject = fibs.getTheFib
    it('returns 1 when it recieves a value of 1', () => {
      expect(subject(1)).to.equal(1)
    })

    it('returns 2 when it recieves a value of 2', () => {
      expect(subject(2)).to.equal(2)
    })

    it('returns 4 when it recieves a value of 5', () => {
      expect(subject(4)).to.equal(5)
    })

    it('returns 5 when it recieves a value of 8', () => {
      expect(subject(5)).to.equal(8)
    })

    it('returns 10 when it recieves a value of 89', () => {
      expect(subject(10)).to.equal(89)
    })

    it('returns 31 when it recieves a value of 2178309', () => {
      expect(subject(31)).to.equal(2178309)
    })
  })

  context('getTheRecursiveFib', () => {
    const subject = fibs.getTheRecursiveFib
    it('returns 1 when it recieves a value of 1', () => {
      expect(subject(1)).to.equal(1)
    })

    it('returns 2 when it recieves a value of 2', () => {
      expect(subject(2)).to.equal(2)
    })

    it('returns 4 when it recieves a value of 5', () => {
      expect(subject(4)).to.equal(5)
    })

    it('returns 5 when it recieves a value of 8', () => {
      expect(subject(5)).to.equal(8)
    })

    it('returns 10 when it recieves a value of 89', () => {
      expect(subject(10)).to.equal(89)
    })

    it('returns 31 when it recieves a value of 2178309', () => {
      expect(subject(31)).to.equal(2178309)
    })
  })
})
