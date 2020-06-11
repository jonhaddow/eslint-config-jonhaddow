# eslint-config-jonhaddow

:heavy_check_mark: - ESLint configuration for use across my projects

## Install

```
npm install --save-dev eslint-config-jonhaddow
```

## Usage

Add the `extends` property to your `.eslintrc.js`:

```javascript
module.exports = {
  extends: ['jonhaddow']
}
```

Additional configurations can be added to the `extends` array (in additional to the base), dependent on the project:

- For React projects (with Jest tests): `jonhaddow/react`
- For TypeScript projects: `jonhaddow/typescript`