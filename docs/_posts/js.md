---
tags: []
featuredimg: "/assets/img/20200716-lunchbox-feature-image.png"
title: jsの変数の中身をクリップボードにコピーする
date: 2020-11-10 00:00:00 +0900
summary: ''

---
## このページでわかること

Chromeの開発者ツールにコンソールを使って、console.logで出力した値や、デバッグ中の値をクリップボードにまるごとコピーする方法。

APIのレスポンスのjsonをコピーしてどこかに貼り付けたい時などに使える。

## やりかた

### console.logでコンソールに値を出力済みの場合

1. 開発者ツールのコンソールで値を右クリックし、`Store as global variable`をクリックする。

![](/assets/img/screenshot-2020-11-10-at-23-00-35.png)2. copy(変数名)と入力して実行。

![](/assets/img/screenshot-2020-11-10-at-23-02-33.png)

undefinedと表示されるが、クリップボードに値がコピーされている。

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

### デバッグ中の値をコピーする場合

1. 開発者ツールのソースタブでブレークポイントを貼り、jsを実行する。

   ![](/assets/img/screenshot-2020-11-10-at-23-09-07.png)
2. copy(変数名)と入力して実行。

これで途中の状態を丸コピできる。