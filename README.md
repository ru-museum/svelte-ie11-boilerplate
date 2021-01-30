# svelte-ie11-boilerplate
svelte-template for IE11 

- この Svelte apps は [https://github.com/sveltejs/template](https://github.com/sveltejs/template) に基づいています。
- 特に IE11 に対応するためのものです。
　※  IE11対応 **fetch** の使い方  
```
import {fetch as fetchPolyfill} from 'whatwg-fetch';  
const res = await fetchPolyfill(`./data.json`);
```

- この boilerplate に基づき新規の project を構築するには [degit](https://github.com/Rich-Harris/degit) を使用します。

```
npx degit ru-museum/svelte-ie11-boilerplate svelte-app
cd svelte-app
```

# 【注意】
**! could not find commit hash for master** のエラーが表示された場合は、branch 名を指定して下さい(**#main**)。

npx degit ru-museum/svelte-ie11-boilerplate<strong>#main</strong> svelte-app

- デフォルト branch 名は、**master** から **main** へ変更されています。
- degit 側が未対応の理由に依ると思われます。

　　参照 ⇒ [github / renaming: Renaming the default branch from master](https://github.com/github/renaming)

- 構築するには [Node.js](https://nodejs.org/) のインストールが必要です。


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

