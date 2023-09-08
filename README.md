# Example Training Task from interview 🐙
  > An open source frontend application built using the **React** ⚛️ and **Feature-Sliced Design** 🍰.
  - React, Redux Toolkit, Zod, React Router, Axios, SCSS
  - Vite, TypeScript, React
  - Feature Sliced
  ### Steps create app:
  - Create base vite react-ts app
    ```
    npm create vite@latest rick-and-morty -- --template react-ts
    ```
  - Config development environment
    - add .editorconfig for synchronic different IDE
    - install prettier (linter exist in vite base app) and install eslint plugins and config
      ```
        npm i -D prettier eslint-config-prettier eslint-config-standard-with-typescript eslint-import-resolver-typescript
        eslint-plugin-import eslint-plugin-prettier eslint-plugin-promise 
        eslint-plugin-react @feature-sliced/eslint-config
      ```
      > @feature-sliced/eslint-config - it's esLint rules Feature-Sliced Design
    - add prettier.json
      ```
        echo > .prettierrc.json
        {
          "trailingComma": "es5",
          "tabWidth": 2,
          "printWidth": 80,
          "semi": false,
          "singleQuote": true
        }
      ```
    - add configuration to .eslintrc.json
    - add configuration to tsconfig.ts
    - add config to vite
      - "vite-tsconfig-paths" is a plugin for Vite that enables the use of path aliases specified in your tsconfig.json file.
        ```
          npm i -d vite-tsconfig-paths
        ```
        ```
          export default defineConfig({
            plugins: [
              react(),
              tsconfigPaths()] ,
            resolve: {
              alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
            }
          })
        ```
  <!-- - npm add -D sass
  ---
  - Create scss styles:
    - create folder scss
    - create vars
      ```
      /*COLORS*/
      /*GAPS*/
      /*WIDTH*/
      ```
    - create typography styles
      ```
      use @each from scss and create font style bilder
      ```
    - create Layout style (it's grid container)
    - add some universal style to main.css 
    - imports all styles to app.scss
  - Create folder strictures
    - components 
    - pages
    - services/networking
    - types (for ts Types) -->
# Compatibility Note: Vite requires Node.js version 18+, 20+.
# Start app 
  ```
  npm install
  npm run dev
  ```
