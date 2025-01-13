---
title: "Changing the Author of a Commit"
description: Ways to change the author of a commit in Git
---

# how to change the author of commits retrospectively

Start a rebase with:

```bash
git rebase -i --rebase-merges {commit-hash ONE BEFORE the first commit to change}
```

- rebase-merges: not strictly necessary, but makes life a lot easier, because it avoids having to deal with merge conflicts
- in the git commit editor: change `pick` to `edit` for all normal commits that should be changed.
- in the git commit editor: add `break` in the line below of the merge commit

That way allows to change normal and merge commits without to much effort.

Afterwards, use this to proceed:

```bash
git commit --amend --reset-author {{OPTINAL: --no-edit}}
  # ... save file
git rebase --continue
```

**NOTE:** this changes the commit date!

- `--no-edit`: if you don't want to change the commit message. This prevents the editor from opening.

### Ain't nobody got time for that

The above approach is nice, but it is a lot of work. Especially if you have a lot of commits to change. This is a shortcut that does the same thing, but automatically.

```bash
git rebase --onto HEAD~{{ NUMBER_OF_COMMITS_BACKWARDS }} --exec 'GIT_COMMITTER_DATE="$(git log -n 1 --format=%aD)" git commit --amend --reset-author --no-edit --date="$(git log -n 1 --format=%aD)"' HEAD~{{ NUMBER_OF_COMMITS_BACKWARDS }}
```

- `HEAD~{{ NUMBER_OF_COMMITS_BACKWARDS }}`: the commit hash of the commit before the first commit to change. Alternatively, you can use the commit hash of the ... commit. TODO
- `GIT_COMMITTER_DATE`: sets the date of the commit to the date of the original commit. This is done using an environment variable, because otherwise the date would be set to the current date (order of execution).
