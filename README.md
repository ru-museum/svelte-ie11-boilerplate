# svelte-ie11-boilerplate
svelte-template for IE11 

- この Svelte apps は [https://github.com/sveltejs/template](https://github.com/sveltejs/template) に基づいています。
- 特に IE11 に対応するためのものです。
- この boilerplate に基づき新規の project を構築するには [degit](https://github.com/Rich-Harris/degit) を使用します。

```

npx degit ru-museum/svelte-ie11-boilerplate svelte-app
cd svelte-app

```

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
- public 内にはその他の必要に応じたファイルを設置出来ます。
