---
title: "Include vs Import in Ansible"
description: What is the difference between include and import in Ansible?
---

# Understanding the difference between `include` and `import` in Ansible

:::note[TL;DR]

- **import\***: Statically brings tasks or handlers into the playbook before execution starts, making them immediately recognizable.
- **include\***: Dynamically brings tasks or handlers into the playbook as it runs, making them only known at runtime when needed.

:::

When writing Ansible playbooks, you can reuse code by pulling in external files of tasks or handlers.
This can be done with two main directives: `include` and `import`.
Although they might seem similar at first glance, each behaves differently, and the choice between them can affect how and when tasks and handlers become available to your playbook.

**Key Concept**:

- **Static import (`import_tasks`, `import_playbook`):**
  The external file’s contents are loaded and interpreted at the time the playbook is parsed.
  This means that Ansible knows about all imported tasks, handlers, and variables before it starts executing anything.
  After parsing, the original file name is “forgotten” — the imported tasks or handlers become part of the main playbook.
- **Dynamic include (`include_tasks`, `include_playbook`):**
  The external file’s contents are not fully parsed until the moment they’re actually called during the play.
  This makes the tasks or handlers defined within them invisible to the playbook until execution reaches the corresponding `include`.
  At that point, Ansible reads them in and executes them as needed.

## Practical Example

To illustrate, consider a file containing handlers:

```yaml
# restarts.yml
- name: Restart apache
  ansible.builtin.service:
    name: apache
    state: restarted

- name: Restart mysql
  ansible.builtin.service:
    name: mysql
    state: restarted
```

### Using include (Dynamic)

When using include (such as include_tasks) for handlers, the playbook does not know about the individual handler names (Restart apache and Restart mysql) before runtime. Instead, it only knows about the higher-level label you used to include them.

```yaml
- name: Trigger an included (dynamic) handler
  hosts: localhost
  handlers:
    - name: Restart services
      include_tasks: restarts.yml
  tasks:
    - command: "true"
      notify: Restart services
```

In this case, you cannot directly notify Restart apache or Restart mysql.
Since the handlers are not statically known at parse time, Ansible treats them as being wrapped by Restart services.
You must notify the included block as a whole, not the individual handlers within it.

### Using import (Static)

When using import (such as import_tasks) for handlers, Ansible reads the external file at parse time.
The handlers inside restarts.yml become first-class citizens in the playbook, just as if you had written them directly in the file.

```yaml
- name: Trigger an imported (static) handler
  hosts: localhost
  handlers:
    - name: Restart services
      import_tasks: restarts.yml
  tasks:
    - command: "true"
      notify: Restart apache
    - command: "true"
      notify: Restart mysql
```

With `import_tasks`, the handlers Restart apache and Restart mysql are directly available, and you can notify them by name.
Notice that Restart services is now solely the import name, not a handler name you can notify.

## Source

[Ansible Docs](https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_includes.html#include-vs-import)
