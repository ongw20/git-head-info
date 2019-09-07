# git-head-info &middot; ![GitHub](https://img.shields.io/github/license/ongw20/git-head-info.svg) ![npm](https://img.shields.io/npm/v/git-head-info.svg) ![CircleCI branch](https://img.shields.io/circleci/project/github/ongw20/git-head-info/master.svg)
Retrieve current sha and branch name from a git repo.

### Install
```sh
npm i git-head-info
```

### Usage
```js
import gitHeadInfo from 'git-head-info' /* or */ const gitHeadInfo = require('git-head-info')

/**
 * @param {path | void} repo: the git repo to get HEAD info, default is current working dir
 * @returns ({
 *  repo: the repo used to get git info
 *  sha: HEAD sha
 *  branch: HEAD branch | undefined(if in `detached HEAD` state)
 * })
 */

// promise
gitHeadInfo(repo?).then(res => {
  ...
}).catch()

// async
async function foo() {
  try {
    const res = await gitHeadInfo(repo?)
    ...
  } catch() {}
}
```
