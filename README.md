## Getting Started

下記手順で依存関係をインストールし、開発サーバーを立ち上げられます

```bash
yarn install

# http://localhost:3000 で立ち上がります
yarn dev
```

## Playwright

下記の通りコマンドを用意しています。

```bash
# 通常の playwright test
yarn test:e2e

# debug モード（ブラウザが自動で立ち上がります）
yarn test:debug

# ui モード（debug モードより詳細の確認が可能です）
# 参照: https://zenn.dev/keita_hino/articles/6f2e30930bb2cd
yarn test:ui

# スクリーンショットの更新ができます
yarn test:update-snapshot
```

`e2e/Spec` 配下に各テストを記述しています。

`e2e/__screenshots__` 配下に各テストファイルで `toHaveScreenShot()` で取得した画像が自動で保存されます。

`yarn test:e2e` を実行したのち、 `yarn playwright show-report` を実行 or テストが失敗すると、

http://localhost:9323/ でテスト詳細が確認できるレポート画面を立ち上げることができます。

スクリーンショット比較のテストをわざと失敗させたい場合は、 `pages` 配下の `tsx` ファイルに適当な要素を追加し、

再度 `yarn test:e2e` コマンドを実行してください。
