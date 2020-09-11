
## 使用パッケージ

- express
- mongoose


##  Mongo DBのインストール

本課題ではMongo DBを使って課題を進めるのでMongoのインストールが必要です。

- mongodbのインストール

```console
$ brew tap mongodb/brew
$ brew install mongodb-community@4.4
```

- mongodb の起動（サービスへの登録）

```console
$ brew services start mongodb-community 
```
- mongodbへの接続

その他操作は下記記事参照ください。

- [MongoDB 超入門](https://qiita.com/saba1024/items/f2ad56f2a3ba7aaf8521)



## 補足記事

- [mongoose | 公式](https://mongoosejs.com/docs/index.html)
- [Node.jsを使ってWebアプリケーションを作るための流れ - 事前知識 & ベタ書きで書いてみる 編 - - Qiita](https://qiita.com/don-bu-rakko/items/b74b9a353ecaf7ac54a8)
- [Node.js用MongoDBライブラリ mongooseの基本操作まとめ（すぐ試せるサンプル付き）](https://qiita.com/takehilo/items/4b89f8ee432b0a06c691)
- [Node.jsとexpressを使って簡単なWebAPIを作成する - Qiita](https://qiita.com/s_harada/items/8e9413b981cfbff4db2d)
- [node.js + expressでPOSTを受け取る & POSTパラメータをJSONで取得する](https://qiita.com/ktanaka117/items/596febd96a63ae1431f8)
