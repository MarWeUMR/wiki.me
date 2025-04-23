---
title: Unsorted Ansible Stuff
---

## Dump config details

Sometimes you may want to dump the configuration details of your Ansible environment.
You can do this using the `ansible-config` command.
If you are only interested in the connection-related configuration that is not default, you can use the `-t connection` and `changed-only` flags.

```bash
ansible-config dump -f json -t connection --changed-only
```

## References

- [Good Practices](https://redhat-cop.github.io/automation-good-practices/#_roles_good_practices_for_ansible)
