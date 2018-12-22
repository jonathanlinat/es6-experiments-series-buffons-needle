import LineSegment from '../../src/modules/elements/linesegment'

describe('LineSegment', () => {
  it('should create a new instance', () => {
    const lineSegmentInstance = new LineSegment()
    expect(lineSegmentInstance).toBeInstanceOf(LineSegment)
  })
})
