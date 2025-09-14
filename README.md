# Welcome to Blossom DS!

## What is Blossom DS?

Blossom is a Design System package made with TailwindCSS and Nativewind with the purpose of using a single component code to run both on React Native and React apps, using the magic of React Native Web

## How to use

Make sure to install the package and add the necessary constants to your project's TailwindCSS configuration, like so:

```js
/** @type {import('tailwindcss').Config} */
const { COLORS, EXTRA_FONT_SIZES, EXTRA_SPACING } = require('@azzyew/blossom-ds/src/tokens.json');

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      spacing: {
        ...EXTRA_SPACING,
      },
      fontSize: {
        ...EXTRA_FONT_SIZES
      }
    },
  },
  plugins: [],
}
```

**TIP:** You can change the theme values to better serve your needs, the current default values are:

```js
const COLORS = {
  background: '#CFD4C5',
  foreground: '#262626',
  border: '#262626',
  primary: '#A6C5BA',
  'primary-foreground': '#226F54',
  secondary: '#ACA09A',
  'secondary-foreground': '#594236',
  'danger': '#F59999',
  'danger-foreground': '#B80000',
  'success': '#99CC99',
  'success-foreground': '#007300',
};

const EXTRA_FONT_SIZES = {
  '2xs': 10,
}

const EXTRA_SPACING = {
  '13': 52,
  '18': 74,
}
```

After that, you only need to import the Blossom object and you already have access to all Blossom DS components!!

```jsx
<Blossom.Button.Base variant='solid' action='secondary' size='sm' loading={loading}>
    <Blossom.Button.Text variant='solid' action='secondary' size='sm'>
        Some Text Here
    </Blossom.Button.Text>
</Blossom.Button.Base>
```
