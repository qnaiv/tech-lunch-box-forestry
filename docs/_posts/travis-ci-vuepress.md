---
tags:
- vuepress
- github pages
- travis ci
featuredimg: "/assets/img/vuepress-travisci.png"
title: Travis CIでVuepressの公開を自動化する
date: 2019-07-21 15:00:00 +0000
summary: ''

---
## このページでわかること

* Travis CIの基礎
* markdownファイルをpushされたとき、Vuepressサイトが自動ビルドする手順

## 前提条件

以下の作業が完了していること  
[vuepressで作った静的サイトをGithub pagesで公開するまで](/posts/2019/06/15/vuepress-introduction.md)

## Travis CIとは

Githubのpublicリポジトリなら無料で利用できるCI/CDサービス

> #### CI/CD(継続的インテグレーション/デリバリー)とは
>
> ビルドやテスト、デプロイを自動化してバグの早期発見、開発効率の工場を図る仕組みのこと。

`.travis.yml`をGithubリポジトリに含めるだけでジョブの設定が可能。

## .travis.ymlについて

### ジョブのライフサイクル

ライフサイクルは以下のフェーズで構成されている。
上から順に実行されるので、好きなフェーズをチョイスしてymlに書く。

 1. \[任意\] `apt addons`
 2. \[任意\] `cache components`
 3. `before_install`
 4. `install`
 5. `before_script`
 6. `script`
 7. \[任意\] `before_cache` (for cleaning up cache)
 8. `after_success` or `after_failure`
 9. \[任意\] `before_deploy`
10. \[任意\] `deploy`
11. \[任意\] `after_deploy`
12. `after_script`

## 導入

### 1. アカウントを作成する

Githubアカウントでログイン可能。

### 2. リポジトリを有効化する

右上のSettingsから設定画面を開き、デプロイ自動化したいリポジトリを有効化する。

![](/assets/img/vuepress-automate-deployment-with-travis-1.png)

![](/assets/img/vuepress-automate-deployment-with-travis-2.png)

### 3. GIthubのアクセストークンを取得してTravisに登録する。

1. Githubのユーザ設定 > Developer settings > Personal access tokens画面を開く
2. Generate new tokenを押す。
3. Noteに好きな識別子を入力し、public_repoにチェックを入れる。
   ![](/assets/img/vuepress-automate-deployment-with-travis-3.png)
4. 緑色の部分にアクセストークンが表示されるのでコピーする。
   ![](/assets/img/vuepress-automate-deployment-with-travis-4.png)
5. Travis CIのリポジトリ設定画面を開き、`Environment Variables`の`name`を好きな文字列に、`value`を先ほどコピーしたtokenを入力する。
   ![](/assets/img/vuepress-automate-deployment-with-travis-5.png)

### 4. `.travis.yml`を作成する

``` yml
script:
  - npm install
  - npm run build
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $github_token
  keep_history: true
  local-dir: .vuepress/dist
  on:
    branch: master
```

### 5. 完了

`.travis.yml`をpushした瞬間から、自動デプロイが動くようになる。

![](/assets/img/vuepress-automate-deployment-with-travis-6.png)

## 今回のソース

[https://github.com/qnaiv/automate-deploy-with-travis](https://github.com/qnaiv/automate-deploy-with-travis)