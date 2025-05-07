---
title: Unsoreted Shell Tips
description: Tips and tricks for using the shell
---

# Shell Tips

## Grepping config files without showing comments and whitespace

This command strips away the noisy parts of config files.
Sometimes you may just want to know the actually non-default values and that information is hard to find when 90% of the file is comments.

```bash
cat <FILE> | egrep -v "^\s*(#|$)"
```

## Container/VM Shells with weird cursor behavior

Ever had the situation where you are in a container or VM and the cursor is not behaving as expected?
For instance, deleting a character with backspace results in the cursor moving to the right.

To solve this, set the `TERM` environment variable to `xterm`:

```bash
export TERM=xterm
# or
export TERM=xterm-256color
```

### References

<https://github.com/kubernetes/dashboard/issues/2346>

## Debug Shell Scripts

To debug shell scripts, you can use the `-x` option to print each command before executing it:

```bash
bash -x script.sh
```

Alternatively, you can add `set -x` to the script itself:

```bash
#!/bin/bash
set -x
echo "Hello World"
```

Optionally, you can also add the `-v` option to print the shell input lines as they are read:

```bash
bash -xv script.sh
```

The above can be a lot of help when debugging shell scripts.
For example, you can see the exact command that is being executed and the output of each command.
You can also see the values of variables and how they are being expanded.
