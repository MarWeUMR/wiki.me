---
title: "Git: Structured Bare Repository with Worktrees"
sidebar_label: Bare Repo with Worktrees
sidebar_position: 2
---

# Initializing a Bare Git Repository with Worktrees

When managing complex projects, it's often beneficial to maintain a clean separation between your `Git technical directory` (meaning the stuff under `.git`) and your working directories.
This can be achieved by initializing a _bare Git repository_ and then adding `worktrees` for different branches or features.
This setup allows for a more organized project structure, especially when working on multiple features or fixes simultaneously.

## Starting with a Bare Repository

### Cloning Your Remote as Bare

Begin by creating a directory for your project and clone the remote repository as a `bare repository` within it.
This will contain all the Git technical files but none of the working directory files.

```bash
mkdir my-awesome-project
cd my-awesome-project
git clone --bare git@github.com:myname/my-awesome-project.git .bare
echo "gitdir: ./.bare" > .git
```

This setup points your project's `.git` _file_ to the `.bare` _directory_, effectively treating it as the Git technical directory.

### Adding Worktrees

With the `bare repository` in place, you can now add `worktrees` for different branches or features.
Each `worktree` acts as a linked working directory for a specific branch, allowing you to work on multiple branches without switching contexts in a single directory.

```bash
git worktree add new-feature
git worktree add hotfix master
```

After adding the `worktrees`, your project directory structure will look like this:

```
- my-awesome-project
  - .bare
  - .git
  - new-feature
  - hotfix
```

This structure keeps your project organized, with the `.bare` directory holding the Git internals and separate directories for each `worktree`.

## TL;DR

By initializing a _bare Git repository_ and utilizing `worktrees`, you can maintain a clean and structured project directory.
This approach is particularly useful for managing multiple features or fixes simultaneously, without the clutter of traditional branch switching.

## Source

https://compiledsuccessfully.dev/git-skip-worktree/
