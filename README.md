# Vize custom block reproduction

A standalone Vue app comparing custom SFC block handling in
`@vitejs/plugin-vue` 6.0.10 and `@vizejs/vite-plugin` 0.682.0.
It uses ordinary Vite and a small custom-block transform plugin.

The `<message>` block exports a function that sets `component.customMessage`.
The template displays that option or `CUSTOM BLOCK MISSING` if it was not set.
Only the Vue compiler plugin changes between the two modes.

## Run

```sh
npm ci
npm run dev:vue
```

Open the local URL printed by Vite. The page displays `Hello from custom block`.
Stop the server and run:

```sh
npm run dev:vize
```

The page displays `CUSTOM BLOCK MISSING`.

## Expected contract

Vue documents custom blocks as imports that a separate Vite plugin can transform.
The standard plugin's example returns a function that receives the component:

- [Vue: SFC custom block integrations](https://vuejs.org/guide/scaling-up/tooling.html#sfc-custom-block-integrations)
- [@vitejs/plugin-vue: transforming custom blocks](https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md#example-for-transforming-custom-blocks)
