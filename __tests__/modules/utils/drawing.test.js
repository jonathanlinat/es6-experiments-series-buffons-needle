import Drawing from '../../../src/modules/utils/drawing'

describe('Drawing', () => {
  it('should create a new instance', () => {
    const drawingInstance = new Drawing()
    expect(drawingInstance).toBeInstanceOf(Drawing)
  })
})
