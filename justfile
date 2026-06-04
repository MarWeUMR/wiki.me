# List available recipes by default.
default:
    @just --list

# Install project dependencies using the locked dependency graph.
bootstrap:
    pnpm install --frozen-lockfile

# Start the Astro/Starlight development server for local development.
dev:
    NODE_ENV=development pnpm dev

# Build the static site into ./dist/.
build:
    NODE_ENV=production pnpm build

# Preview the production build locally.
preview:
    NODE_ENV=production pnpm preview

# Run dependency vulnerability checks.
audit:
    pnpm audit --audit-level low

# Show outdated dependencies allowed by the current pnpm policy.
outdated:
    pnpm outdated
