import { GIT_INFO_FOLDER, changeGitFolder } from '../utils'

describe('Can change git folder', () => {
  test('should correctly change GIT_DIR', () => {
    expect(GIT_INFO_FOLDER).toBe('.git')
    changeGitFolder('new/git/dir')
    expect(GIT_INFO_FOLDER).toBe('new/git/dir')
  })
})
