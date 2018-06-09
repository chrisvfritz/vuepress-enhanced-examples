# VuePress Enhanced Examples

This is an attempt at providing a better experience for documentation authors and consumers, in regards to examples.

## Overview

All examples are in `.vue` files, inside the `.vuepress/examples` directory. These examples can be referenced from documentation with:

```md
@[example](name-of-example-file)
```

By default, this will render:

- An HTML block (if a `template` is provided)
- A JS block (if a `script` is provided)
- A CSS block (if a `style` is provided)
- A button to render the result in an iframe
- A button to open the example in CodePen

The example rendering is even configurable, e.g.:

```md
<!-- Only render the JS block -->

@[example](name-of-example-file, js-only)
```

```md
<!-- Don't render the JS block or result -->

@[example](name-of-example-file, result-disabled js-disabled)
```

```md
<!-- Only render a button to open the example in CodePen -->

@[example](name-of-example-file, playground-only)
```

This 2nd argument is actually a list of props. For complete full list of available props, see the [`vue-example-simple`](https://github.com/chrisvfritz/vuepress-enhanced-examples/blob/master/.vuepress/components/vue-example-simple.vue) component.

## Features

### Consumer experience

- **JS experience scaling**: By default, all JS examples render ES5, but more experienced devs can be toggle to modern JS by clicking on the `js (es5)` label in the top-right corner of JS code blocks.

- **HTML experience scaling**: By default, all HTML examples render `v-bind:` and `v-on:` instead of their shorthands: `:` and `@`, respectively. This can also be toggled by clicking on the `html` label in the top-right corner of HTML code blocks.

- **Selective sandboxing**: All examples can be rendered into individual iframes, so that no code on the page or from other examples can interfere with them. Upon rendering an example, however, we check if the iframe contains a top-level `app` variable with a Vue instance. If it does, we assign the value of `app` to `app1`, `app2`, or whatever the first numbered app variable is in the parent window. Then we display the name of this variable to the user in the top-right corner of the iframe. This way, consumers can still open the console and type `app1.message = 'new message'` to see something work. These results also always use ES5, to ensure browser compatibility.

- **Automatic CodePen generation**: CodePens for all examples are automatically generated, using the code style users have selected and automatically hiding panels when no code for that panel exists.

### Author experience

Since examples are all in `.vue` files, they can receive:

- **Syntax highlighting**: For HTML, CSS, and JS(X).
- **Linting**: ESLint and Stylelint can parse `.vue` files.
- **Formatting**: Prettier can format JS and CSS.

Since examples are processed at build time, we can also use:

- **Advanced JS features**: Write examples in terser ES2015+, with automatic compilation to a readable ES5 alternative.
- **Custom render formatting**: You can write your examples in one format, while displaying them in another, because formatting with Prettier also happens during example compilation, using its own configuration.
- **Automatic result rendering**: No more repetition! Also, since all results are in iframes, we no longer have to manually use `id="app1"`, `id="app2"`, etc. When crafting an example, you don't have to think outside that example.
- **Automatic CodePen generation**: No more maintaining examples under a specific user's account, that only they can update.

And finally, because examples are referenced, rather than embedded directly in markdown, we also get:

- **Dynamically reusability**: When you want to reference an example multiple times, or only show pieces of it at a time, interspersed between other text.

## Demos

Check out some live demos by opening this doc in VuePress with `yarn dev`.
