import gitHeadInfo from '../index'

describe('Get git info function should be correctly exported', () => {
  test('gitInfo should be function type', () => {
    expect(typeof gitHeadInfo).toBe('function')
  })
})
