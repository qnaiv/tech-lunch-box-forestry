---
tags:
- vuejs
- typescript
featuredimg: "/assets/img/javascript.png"
title: VuejsをあとからTypeScriptに対応させる
date: 2021-03-18 00:00:00 +0900
summary: VuejsをあとからTypeScriptに対応させる方法とつまづきポイント

---
## 手順

`vue add @vue/typescript`を実行するだけ。

オプションによっては、既存のjsファイルをtsに変換することもできる。

    $ vue add @vue/typescript
    WARN  There are uncommitted changes in the current repository, it's recommended to commit or stash them first. // 未コミットのがあるが継続して良いかどうか。（コミットかstashを推奨)
    ? Still proceed? Yes
    
    📦  Installing @vue/cli-plugin-typescript...
    
    + @vue/cli-plugin-typescript@4.5.12
    updated 1 package in 52.045s
    
    48 packages are looking for funding
      run `npm fund` for details
    
    ✔  Successfully installed plugin: @vue/cli-plugin-typescript
    
    // classスタイルで定義するかどうか
    ? Use class-style component syntax? Yes
    
    // Babelを使うか
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
    // TSLintを使うか
    ? Use TSLint? Yes
    // lintを実行するタイミング(セーブ時・コミット時）
    ? Pick lint features: Lint on save
    // 既存のjsファイルをtsに変換するか？
    ? Convert all .js files to .ts? Yes
    // jsファイルをコンパイルに含めるかどうか
    ? Allow .js files to be compiled? Yes
    // 宣言ファイルの型チェックをスキップするかどうか
    ? Skip type checking of all declaration files (recommended for apps)? Yes

## 実行時にエラーが発生する場合

以下のようなエラーが発生することがある。

    🚀  Invoking generator for @vue/cli-plugin-typescript...
     ERROR  Error: Cannot find module '@vue/cli-service/generator/template/src/App.vue' from '/workspaces/vue-chrome-extension-boilerplate-ts/node_modules/@vue/cli-plugin-typescript/generator/template/src'
    Error: Cannot find module '@vue/cli-service/generator/template/src/App.vue' from '/workspaces/vue-chrome-extension-boilerplate-ts/node_modules/@vue/cli-plugin-typescript/generator/template/src'
        at Function.resolveSync [as sync] (/usr/local/share/npm-global/lib/node_modules/@vue/cli/node_modules/resolve/lib/sync.js:102:15)
        at renderFile (/usr/local/share/npm-global/lib/node_modules/@vue/cli/lib/GeneratorAPI.js:515:17)
        at /usr/local/share/npm-global/lib/node_modules/@vue/cli/lib/GeneratorAPI.js:300:27
        at processTicksAndRejections (internal/process/task_queues.js:97:5)
        at async Generator.resolveFiles (/usr/local/share/npm-global/lib/node_modules/@vue/cli/lib/Generator.js:268:7)
        at async Generator.generate (/usr/local/share/npm-global/lib/node_modules/@vue/cli/lib/Generator.js:175:5)
        at async runGenerator (/usr/local/share/npm-global/lib/node_modules/@vue/cli/lib/invoke.js:111:3)
        at async invoke (/usr/local/share/npm-global/lib/node_modules/@vue/cli/lib/invoke.js:92:3)

### 解決方法

`vue add @vue/typescript`をする前に、以下のコマンドを実行すればOK。

`npm install --save-dev @vue/cli-service`