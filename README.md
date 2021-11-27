# svelte-ie11-boilerplate
svelte-template for IE11 

# 特徴
- この Svelte apps は [https://github.com/sveltejs/template](https://github.com/sveltejs/template) に基づいています。
  - 非推奨となったパッケージを整理削除しました(2021-02-14)。
     - @babel/polyfill, node-sass 等。
  - 最新版 sveltejs/template に対応しています(2021-01-31)。
     - [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte/blob/master/CHANGELOG.md) 7.x  
     - Rollup 2.x
- 特に IE11 に対応するためのものです(バージョン 11.1087.16299.0 で確認)。  
※  IE11対応 **fetch** の使い方 (src/main.js に定義してあります) 
 ```
import {fetch as fetchPolyfill} from 'whatwg-fetch';  
const res = await fetchPolyfill(`./data.json`);
```
- Android 4.4- で確認しています。  

- 開発環境：Linux(Debian), Node.js 15.8.0。  

- この boilerplate に基づき新規の project を構築するには [degit](https://github.com/Rich-Harris/degit) を使用します。

```
npx degit ru-museum/svelte-ie11-boilerplate svelte-app
cd svelte-app
```

### 【注意: 1】
```
! could not find commit hash for master
```
上記エラーが表示された場合は、branch 名を指定して下さい(**#main**)。
```
npx degit ru-museum/svelte-ie11-boilerplate#main svelte-app
```

- デフォルト branch 名は、**master** から **main** へ変更されています。
- **npm** 又は **degit** 側が未対応の理由に依ると思われます。

　　参照 ⇒ [github / renaming: Renaming the default branch from master](https://github.com/github/renaming)

- 構築するには [Node.js](https://nodejs.org/) のインストールが必要です。

### 【注意: 2】（2021-06-24）
- v. 3.38.3 において下記のエラーが表示される場合は以下を参照して下さい。  
**複数の同時記述**は不可となっています。 

- Throw compiler error when <code>:global()</code> contains multiple selectors (<a href="https://github.com/sveltejs/svelte/issues/5907">#5907</a>)
- Fix <code>:global(...):some-pseudoclass</code> selectors not being seen as global (<a href="https://github.com/sveltejs/svelte/issues/6306">#6306</a>)
- disallow multiple selectors inside :global() (<a href="https://github.com/sveltejs/svelte/issues/6428">#6428</a>)

```
[!] (plugin svelte) ValidationError: :global(...) must contain a single selector
  ...
   :global(app, body, html) {
   ^
```
- 回避するには以下の様に分割して記述して下さい。
```
:global(app),:global(body),:global(html){ 
```
### 【注意: 3】（2021-11-27）
- marked v. 4.0.0- において下記のエラーが表示される場合は以下を参照して下さい。  
- ファイルが cjs.js, esm.js, umd.js とに分割されています。
```
 [!] Error: 'default' is not exported by node_modules/marked/lib/marked.esm.js, imported by src/*.svelte
  import marked from 'marked';
         ^
```
- **module 名を { } で明示する必要があります**。
```
  import { marked } from 'marked';
  
  marked(text) OR marked.parse(text) 
```
参照 ⇒ [Error: "&#91;name&#93; is not exported by &#91;module&#93;"] (https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module)
# 構築手順

1. 依存ライブラリーのインストール。

```
cd svelte-app
npm install
```

2. [Rollup](https://rollupjs.org/) をスタートします。

```
npm run dev
```

- ブラウザで [localhost:5000](http://localhost:5000/) にアクセスしますと初期画面が表示されます。

3. 公開用にビルドします。

```
npm run build
```

4. WEB 上へ公開するには、public フォルダ内の必要なファイル(.map を除く)を アップします。
 

# TypeScript 及び SCSS(SASS) の利用

- TypeScript を利用する為のスクリプトが用意されています：
```
node scripts/setupTypeScript.js 
```
## 【注意】

* TypeScript 利用での build 時に以下の警告が表示される場合は一部を修正して下さい。
```
(!) Plugin typescript: @rollup/plugin-typescript: Typescript 'sourceMap' compiler option must be set to generate source maps.
```
**rollup.config.js**：  
【修正】  sourcemap: true　⇒ **sourcemap: !production**

```
export default {
    input: 'src/main.ts',
    output: {
    // sourcemap: true,  
    sourcemap: !production,
```
　　※ [参考：stackoverflow](https://stackoverflow.com/questions/63128597/how-to-get-rid-of-the-rollup-plugin-typescript-rollup-sourcemap-option-must)  
  
又は以下を利用出来ます。

- TypeScript 及び SCSS(SASS) に対応 app（公開：2021/10/20）：  
[svelte-ie11-boilerplate-ts-scss](https://github.com/ru-museum/svelte-ie11-boilerplate-ts-scss)



