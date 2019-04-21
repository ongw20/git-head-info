import path from 'path'
import gitHeadInfo from '../index'
import { changeGitFolder } from '../utils'

const ROOT = process.cwd()
const REPO = path.join(ROOT, 'fixtures')

describe('Get current repo git head info without param', () => {
  beforeAll(() => changeGitFolder('.git'))

  test('can use as promise', () => {
    gitHeadInfo().then(res => {
      expect(res.repo).toBe(ROOT)
    }).catch()
  })

  test('can use in async', async() => {
    const res = await gitHeadInfo()
    expect(res.repo).toBe(ROOT)
  })
})

describe('Get git info should throw an error', () => {
  beforeAll(() => changeGitFolder('.git'))

  test('promise should run into catch', () => {
    gitHeadInfo(REPO).then().catch(err => {
      expect(typeof err).toBe('object')
    })
  })

  test('async should run into catch', async() => {
    try {
      await gitHeadInfo(REPO)
    } catch (err) {
      expect(typeof err).toBe('object')
    }
  })
})

describe('Get git head info should return correct info', () => {
  beforeAll(() => changeGitFolder('dot-git'))

  test('can use as promise', () => {
    gitHeadInfo(REPO).then(res => {
      res.sha = res.sha.slice(0, 8)
      expect(res).toEqual({
        repo: REPO,
        branch: 'master',
        sha: 'f568b0cf'
      })
    }).catch()
  })

  test('can use in async', async() => {
    const res = await gitHeadInfo(REPO)
    res.sha = res.sha.slice(0, 8)
    expect(res).toEqual({
      repo: REPO,
      branch: 'master',
      sha: 'f568b0cf'
    })
  })
})
