import Canvas from '../../../src/modules/utils/canvas'

describe('Canvas', () => {
  it('should create a new instance', () => {
    const canvasInstance = new Canvas()
    expect(canvasInstance).toBeInstanceOf(Canvas)
  })
})
