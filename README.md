# git-repo-head &middot; ![GitHub](https://img.shields.io/github/license/ongw20/git-head-info.svg) ![npm](https://img.shields.io/npm/v/git-head-info.svg) ![CircleCI branch](https://img.shields.io/circleci/project/github/ongw20/git-head-info/master.svg)
Retrieve current sha and branch name from a git repo.

### Install
```sh
npm install git-head-info
```

### Usage
```js
import gitHeadInfo from 'git-head-info' /* or */ const gitHeadInfo = require('git-head-info')

// promise
gitHeadInfo().then(res => {
  ...
}).catch()

// async
async function foo() {
  try {
    const res = await gitHeadInfo()
    ...
  } catch() {}
}
```
