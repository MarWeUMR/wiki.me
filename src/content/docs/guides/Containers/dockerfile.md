---
title: Unsoreted Tips Regarding Dockerfiles
description: Tips and tricks for writing Dockerfiles
---

# Dockerfile Tips

## Not every ARG is created equal

When using `ARG` in a Dockerfile, it is important to note that not every `ARG` has the same meaning.
There are two types of `ARG`:

1. **Build-time ARGs**: These are used during the build process and are not available in the final image.
2. **Run-time ARGs**: These are used when the container is started and are available in the final image.

Here is an example of how to use both types:

```Dockerfile

# Build-time ARG
ARG BUILD_VERSION=latest
FROM alpine:${BUILD_VERSION}

# Run-time ARG
ARG RUN_VERSION=latest
CMD echo "Running version: ${RUN_VERSION}"
```

Note that in the example above, the `BUILD_VERSION` is only available to the `FROM` instruction, while the `RUN_VERSION` is available to the `CMD` instruction.
Trying to use `BUILD_VERSION` in the `CMD` instruction will result in nonsense, since its value is not set at runtime and will therefore be empty.
