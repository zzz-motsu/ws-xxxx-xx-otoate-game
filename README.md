## Web API(サーバサイド課題）

デモ: https://version1-workspace.github.io/ws-xxxx-xx-otoate-game/front-js/

Expressを使用した簡易的なWeb APIを作成してフロントエンドとサーバサイドの接続を勉強するためのリポジトリです。
上記デモをみながらなるべく同じサイトができるように実装をお願いします。

※ フロント側は大方の実装はすんでいるので、APIとの接続部分の実装だけ必要になります。

```
-+- front-js/ フロント用ディレクトリ
 |
 +- server/  サーバサイド用ディレクトリ
```

## 課題で身に着けること

- 簡単なWeb APIの作成(取得、作成)
- HTTPの仕組み、構造
- Express.jsの作り方
- MVCアーキテクチャ(モデル・ビュー・コントローラ）
- Promise, async/awaitをつかった非同期処理の扱い

## 課題の進め方

### 1. ドキュメント/記事を読んで必要な知識を理解する

#### MVCとは

- [MVCモデルとは！概念やそのメリットをわかりやすく解説！](https://www.geekly.co.jp/column/cat-technology/1911_040/)

#### HTTPについて

- [HTTPリクエスト/レスポンスの構成要素を初心者にも分かるように解説してみた](https://qiita.com/koheiyamaguchi0203/items/5777c4653a01ae4c7b06)

#### Webアプリケーションフレームワーク

- [フレームワークとは？今更聞けないWebフレームワークを始めから丁寧に](https://blog.codecamp.jp/web_framework)
- [Webフレームワークとは何か](https://postd.cc/what-is-a-web-framework/)
- [Express.js公式ドキュメント](https://expressjs.com/ja/)
- [Express のインストール - Express.js](https://expressjs.com/ja/starter/installing.html)

#### REST APIについて
- [HTTPリクエスト/レスポンスの構成要素を初心者にも分かるように解説してみた](https://qiita.com/koheiyamaguchi0203/items/5777c4653a01ae4c7b06)
- [初心者目線でAjaxの説明](https://qiita.com/hisamura333/items/e3ea6ae549eb09b7efb9)
- [RESTful APIとは何なのか](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2)
- [0からREST APIについて調べてみた](https://qiita.com/masato44gm/items/dffb8281536ad321fb08)

#### Fetch APIについて

- [Fetch API について](https://qiita.com/sotasato/items/31be24d6776f3232c0c0)
- [Fetch の使用](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

#### Promise async, wait

- [Promiseの使い方、それに代わるasync/awaitの使い方](https://qiita.com/suin/items/97041d3e0691c12f4974)

#### ORM(オブジェクトリレーショナルマッッピング)

- [もっとORMを使えるようになりたいので、見直してみた](https://qiita.com/niisan-tokyo/items/156eb35c6eeaf07b9b65)
- [オブジェクト関係マッピング](https://qiita.com/yk-nakamura/items/acd071f16cda844579b9)

### 2. 課題を始める前にリポジトリ をフォーク

- [GitHubフォークのやり方](https://version-1workspace.gitbook.io/github/how-to-fork)

### 3. フォークしてリポジトリ をクローンして課題をスタート

Gitが初めての方は下記を参照ください。

- [プログラミングを学ぶ前に始めるGit入門](https://version-1workspace.gitbook.io/git/)

### 4. クローンしたファイルの中身を確認して課題を開始

フロント側は下記READMEを参照してください

- [フロント - JavaScript](./front-js/README.md)
- ~フロント - React~

サーバ側は下記READMEを参照してください

- [README](./server/README.md)
