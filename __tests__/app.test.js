import App from '../src/app'

describe('App', () => {
  it('should create a new instance', () => {
    const appInstance = new App()
    expect(appInstance).toBeInstanceOf(App)
  })
})
