# Cấu hình prettier

- VSCode Extensions:

  - Prettier
  - Eslint

- Thêm cấu hình vào .vscode

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2 // để nó giống với trong prettierrc.js
}
```

- Thêm cấu hình .prettierrc.js

```js
// .prettierrc.js
module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: "all",
  arrowParens: "avoid",
  endOfLine: "auto", // tự động chỉnh lại cuối dòng - không sẽ bị lỗi
  printWidth: 120, // độ dài tối đa của dòng
  tabWidth: 2,
};
```
