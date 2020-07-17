---
tags:
- github
title: gitで過去コミットのauthorとcommiterを変更する
date: 2019-06-17T15:00:00.000+00:00
featuredimg: "/assets/img/tech-lunch-box-notext.png"
summary: githubにコミットしたらPC名出ちゃったときの話。

---
# gitで過去コミットのauthorとcommiterを変更する
GitのAuthor, Comitterの設定を初期設定のまま使うと、PC名になってしまう。
（そのため、意図せずAuthorが本名でコミットされたりする。)
ここでは後からAuthorやComitterを変える方法を記す。
## このページで分かること
- 過去のコミットのAuthorとcomitterを変更する方法
- コミットする際に適用されるcommiterを変更する方法

## 過去のAuthor / Comitterを変更
名前とメアドの部分を置き換えること。
:::danger
このコマンドを実行するとすべてのコミットが置き換わる。（自分のコミット分以外も）
なので個人的なリポジトリ以外では非推奨。
:::
``` sh
$ git filter-branch -f --env-filter "GIT_AUTHOR_NAME='変更後名前'; GIT_AUTHOR_EMAIL='変更後メールアドレス'; GIT_COMMITTER_NAME='変更後名前'; GIT_COMMITTER_EMAIL='変更後メールアドレス';" HEAD 
```

## 今後のコミット時のAuthorとComitterを変更する
以下のコマンドを実行する。
``` sh
git config --global user.name 名前
git config --global user.email メールアドレス
```