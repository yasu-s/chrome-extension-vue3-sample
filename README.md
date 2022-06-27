# chrome-extension-vue3-sample

## 概要

- Vue3で作成したChrome拡張機能のサンプルです。


## 動作環境

- Node.js - 16.x
- Yarn - 1.22.x

## ライブラリ

- vue - 3.2.x
- vue-router - 4.0.x
- @types/chrome - 0.0.190

## 動作確認

```bash
# パッケージインストール
yarn

# ビルド
yarn build
```

## 拡張機能のインストール

1. Chromeを起動して「chrome://extensions/」に移動
1. 「デベロッパーモード」をON
1. 「パッケージ化されていない拡張機能を読み込む」をクリック
1. ビルド時に生成された「dist」ディレクトリを選択

## 実行結果

![拡張機能](https://user-images.githubusercontent.com/2668146/175852012-d5a4dfd3-95c6-4f4e-848f-0da9ff176acd.png)

## 参考URL

- https://vuejs.org/
- https://developer.chrome.com/docs/extensions/

