/*
 * @Description:
 * @Author: zian_Chen
 * @Date: 2023-01-10 15:32:52
 * @FilePath: \my-project\vue_3.2\.eslintrc.js
 * @LastEditTime: 2023-01-10 15:39:44
 * @LastEditors: zian_Chen
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
     indent: 0
  }
}
