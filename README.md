# eslint-config-jonhaddow

:heavy_check_mark: - ESLint configuration for use across my projects

## Install

```
npm install --save-dev eslint-config-jonhaddow
```

## Usage

Then add the extends to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['jonhaddow']
}
```

Additional configurations can be added to the `extends` array, dependent on the project:

- For React projects (with Jest tests): `jonhaddow/react`
- For TypeScript projects: `jonhaddow/typescript`