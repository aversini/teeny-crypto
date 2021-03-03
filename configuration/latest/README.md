# conventional-changelog angular

This is an almost exact copy of Angular configuration for conventional-changelog, but with the only change that it removes the main header (the version).
See the original version here: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular

This command:

```sh
npx conventional-changelog -i CHANGELOG.md -s -p angular
```

will prepend this to CHANGELOG.md:

```md
## [1.1.2](https://github.com/aversini/teeny-js-utilities/compare/v1.1.1...v1.1.2) (2021-02-01)

### Bug Fixes

- trying to fix the auto-release ([66ec439](https://github.com/aversini/teeny-js-utilities/commit/66ec439d16100d0bb622c419e390276aba1ed4e8))
```

But this command:

```sh
rimraf RELEASE.md && conventional-changelog -o RELEASE.md -n \"./configuration/release/config.js\"
```

Will remove LATEST.md and populate it from scratch with:

```md
### Bug Fixes

- trying to fix the auto-release ([66ec439](https://github.com/aversini/teeny-js-utilities/commit/66ec439d16100d0bb622c419e390276aba1ed4e8))
```

This file can then be used to generated the body of each and every individual GitHub releases (see create-release.yml).
