---
title: "Git: Ignore without ignoring"
sidebar_label: Ignore file contents without using .gitignore
sidebar_position: 1
---

# Ignoring File Changes Without .gitignore

Sometimes, you might find yourself in a situation where you need a file to be tracked by Git, but want to ignore local changes to it.
For example when dealing with files that contain secrets or environment-specific configurations.
Instead of using `.gitignore`, which ignores the file entirely, you can use the `--skip-worktree` cli-flag.
This approach allows the file to remain in the repository with default contents while enabling you to modify it locally without those changes popping up in `git status`.

## Utilizing `--skip-worktree`

### Marking a File to Skip

To prevent `Git` from tracking changes to a file (without ignoring it completely), you can use the `--skip-worktree` flag.
This is particularly useful for configuration files that you don't want to accidentally commit after making local changes.

```bash
git update-index --skip-worktree <FILE_NAME>
```

This command tells `Git` to ignore changes to the specified file, keeping your `git status` clean without removing the file from the repository.

### Reverting the Skip

If you decide later that you want `Git` to start tracking changes to the file again, you can reverse the operation with the `--no-skip-worktree` flag.

```bash
git update-index --no-skip-worktree <FILE_NAME>
```

This command reverts the file back to its default behavior, allowing any local changes to be recognized by `Git`.

## TL;DR

By leveraging the `--skip-worktree` flag, you can effectively manage files that need to be tracked by `Git` but should not have their local changes committed, thus maintaining a clean and manageable repository.

## Source

https://compiledsuccessfully.dev/git-skip-worktree/
