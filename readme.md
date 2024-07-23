# Mobile Component Library

Combining Vant/CLI to quickly build a mobile component library

## Usage

Install dependencies

```bash
pnpm i
```

develop

```bash
pnpm dev
```

build

```bash
pnpm build
```

## Other commands

1、Create a new component, and the component page navigation will be updated by default after completion

```bash
pnpm component demo-table
```

After execution, the generated file directory is as follows:

```
project
├─ src
│   ├─ demo-table
            ├─  index.vue           # Component. vue
            ├─  README.md           # Component documentation
            ├─  demo
                ├─ index.vue        # Component demo display
            ├─  test
                ├─ index.spec.js    # Component unit testing culture
```

2、Update component routing navigation

```bash
pnpm update-nav
```

## LICENSE

Vant is [MIT](https://github.com/youzan/vant/blob/main/LICENSE) licensed.
