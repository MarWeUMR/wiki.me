---
title: Using Tags with Molecule
description: How to use tags with Molecule to run specific scenarios or test cases
---

# Using Tags with Molecule

## CLI Tags

To provide tags to `molecule` via cli commands, you can you the `--tags` option.
Note however, that you have to pass this option after the `--` separator.

```bash
molecule converge -s <scenario> -- --tags <tag>
```

## Tags via molecule.yml

You can also define tags in the `molecule.yml` file.

```yaml
provisioner:
  name: ansible
  config_options:
    tags:
      run: rebuild
```
