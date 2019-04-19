# git-repo-head
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
