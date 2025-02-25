---
title: Unsoreted Shell Tips
description: Tips and tricks for using the shell
---

# Shell Tips

## Container/VM Shells with weird cursor behavior

Ever had the situation where you are in a container or VM and the cursor is not behaving as expected?
For instance, deleting a character with backspace results in the cursor moving to the right.

So solve this, set the `TERM` environment variable to `xterm`:

```bash
export TERM=xterm


### References
https://github.com/kubernetes/dashboard/issues/2346
```
