---
title: Unsorted Tips Regarding Jinja
description: Tips and tricks for working with Jinja
---

# Jinja Tips

## Setting variables from a loop

To set a variable from a loop, you can use the `namespace` object from Jinja.
This is useful when you want to set a variable based on a condition in a loop.

Consider the following `ansible` example:

```yaml
_jupyter_rhel_python_mapping:
  rhel:
    - os_major_version: "8"
      python_version: 3.6.15
    - os_major_version: "9"
      python_version: 3.9.21
```

You could set the `py_version` variable based on the `os_major_version` in the following way:

```jinja
{%- set ns = namespace(py_version = 3.12) %}
{%  for release in _jupyter_rhel_python_mapping.rhel %}
  {% if release.os_major_version == ansible_distribution_major_version %}
    {% set ns.py_version = release.python_version  %}
  {% endif %}
{% endfor -%}
```

## How to get a list of ips from multiple inventory groups

To get a list of IPs from multiple inventory groups, you can use the `union` filter along with `map` and `extract` to gather the IP addresses from the host variables.

```jinja
ips: "{{ groups['cluster'] | union(groups['ecs_nodes']) | map('extract', hostvars) | map(attribute='ansible_default_ipv4.address') | list }}"
```

Explanation of the code:

- `groups['cluster']` and `groups['ecs_nodes']` are the inventory groups you want to combine.
- `union` combines the two groups into a single set.
- `map('extract', hostvars)` extracts the host variables for each host in the combined group.
- `map(attribute='ansible_default_ipv4.address')` retrieves the default IPv4 address for each host.
- `list` converts the result into a list.
