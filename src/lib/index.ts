import fs from 'fs-extra'
import path from 'path'
import { GIT_INFO_FOLDER } from './utils'

interface GitInfo {
  repo: string
  sha: string
  branch?: string
}
/**
 * @param {path} repo the git repo to get HEAD info
 * @returns {Promise<GitInfo>}
 */
export default async function gitHeadInfo(repo: string = process.cwd()): Promise<GitInfo> {
  try {
    const gitHead = (await fs.readFile(path.join(repo, GIT_INFO_FOLDER, 'HEAD'), 'utf-8')).trim()
    let sha, branch
    if (gitHead.includes(':')) {
      const fullBranch = gitHead.split(': ')[1]
      branch = fullBranch.replace('refs/heads/', '')
      sha = (await fs.readFile(path.join(repo, GIT_INFO_FOLDER, fullBranch), 'utf-8')).trim()
    } else {
      sha = gitHead
    }
    return {
      repo,
      sha,
      branch
    }
  } catch (err) {
    return Promise.reject(err)
  }
}
