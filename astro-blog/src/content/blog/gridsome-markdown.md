---
tags:
- ssg
- gridsome
featuredimg: "/assets/img/20200716-lunchbox-feature-image.png"
title: gridsomeで日本語ファイル名のmarkdownを認識できるようにする
date: 2020-08-01 00:00:00 +0900
summary: gridsomeで日本語ファイル名のmdをスキャンさせたらpathがおかしくなった

---
# 現象

日本語ファイル名のmarkdown(.md)ファイルを複数個用意して、`@gridsome/source-filesystem`を使ってスキャンさせようとした。

gridsome.config.jsの設定は以下のような感じ。

    ...
    plugins: [
        {
          use: "@gridsome/source-filesystem",
          options: {
            path: "projects/**/*.md",
            typeName: "ProjectPost",
            resolveAbsolutePaths: true,
            remark: {
              externalLinksTarget: "_blank",
              externalLinksRel: ["nofollow", "noopener", "noreferrer"],
            },
          },
        },
    ]
    ...

しかし、画面上に1つの記事しか表示されなかった。

そしてURLが/projects/で終わってしまっている。(記事ごとにユニークなURLになってない。)

![](/assets/img/screenshot-2020-08-01-at-13-48-08-display-1.png)

# 結論

`gridsome.config.js`に`templates`を定義し、記事のpathにファイル名ではなくidを使うように変更した。

gridsome.config.js

    plugins: [
    	...
    ],
    templates: {
    	ProjectPost: "/projects/:id",
    }

URLがユニークになって、すべての記事が画面上に表示されるようになった。

![](/assets/img/screenshot-2020-08-01-at-13-51-18-display-1.png)

# 原因

Gridsomeの[公式ドキュメント](https://gridsome.org/docs/templates/)を見ると、以下のように書いてある。

> Path parameters are slugified by default
>
> (パスパラメータはデフォルトでslug化される）

slug化とは、文章の中のスペースをスラッシュに置き換えたりしてURLに使える形に最適化することのようだ。

> some string -> some-string

おそらくこのslug化する機能が日本語を認識してくれないのではないかと思う。(未検証)

今回、URLにslugを用いるのをやめてIDをつけるように対応したが、本当はslugを用いたほうがSEO的には良いらしい？

参考: [https://school.dhw.co.jp/word/design/slug.html](https://school.dhw.co.jp/word/design/slug.html "https://school.dhw.co.jp/word/design/slug.html")

でも、個人的にはSEOはあまり重要視していないので、IDで行くことにする。

\-完-