import Segment, { Vect } from '../../../src/modules/utils/geometry'

describe('Vect', () => {
  it('should create a new instance', () => {
    const vectInstance = new Vect()
    expect(vectInstance).toBeInstanceOf(Vect)
  })
})

describe('Segment', () => {
  it('should create a new instance', () => {
    const segmentInstance = new Segment()
    expect(segmentInstance).toBeInstanceOf(Segment)
  })
})
