# eslint-config-jonhaddow

:heavy_check_mark: - ESLint configuration for use across my projects

## Install

```
npm install --save-dev eslint-config-jonhaddow
```

## Usage

Add the `extends` property to your `eslint.config.js`:

```javascript
const config = require('eslint-config-jonhaddow')

module.exports = {
  ...config.base,
  ...config.react, // This can be omitted if you're not using React
  { 
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  }
};
```

## Publishing

Run `npm version [major|minor|patch]` and push that corresponding commit.

Create a Github release and associate with the pushed tag. This will trigger an Github Action to publish the npm package.
