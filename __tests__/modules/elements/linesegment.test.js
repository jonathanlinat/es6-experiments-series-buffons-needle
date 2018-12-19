import Segment from '../../../src/modules/utils/geometry'
import Drawing from '../../../src/modules/utils/drawing'
import LineSegment from '../../../src/modules/elements/linesegment'

jest.mock('../../../src/modules/utils/geometry')
jest.mock('../../../src/modules/utils/drawing')

beforeEach(() => {
  Segment.mockClear()
  Drawing.mockClear()
})

describe('LineSegment', () => {
  it('should call Segment constructor class', () => {
    new LineSegment()
    expect(Segment).toHaveBeenCalled()
  })

  it('should call Drawing constructor class', () => {
    new LineSegment()
    expect(Drawing).toHaveBeenCalled()
  })

  it('should render a segment', () => {
    new LineSegment().render()
  })
})
