# Building a Scalable Monorepo with JavaScript and TypeScript

## Monorepos

### Creating package

```sh
# init project
pnpm init
# run all packages in monorepo
pnpm -r run start
```
#### pnpm-workspace.yaml

```yaml
packages:
  - "packages/**"
```

## Configuring  workspaces

Use "type": "module" in package.json
Add dependency