## Getting Started

下記手順で依存関係をインストールし、開発サーバーを立ち上げられます

```bash
yarn install
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
