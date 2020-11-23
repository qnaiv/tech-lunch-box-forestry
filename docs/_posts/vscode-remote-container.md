---
tags:
- vscode
- docker
featuredimg: "/assets/img/20200716-lunchbox-feature-image.png"
title: VSCode Remote Containerで開発環境をサクッと構築する
date: 2020-11-22 00:00:00 +0900
summary: Remote Containerの使い方

---
## Remote Containerとは

[Remote Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack "Remote Container")はVSCodeの拡張機能のひとつ。

Dockerの機能を活用して、コンテナ内で作業ができる。

これにより、以下のような恩恵を得られる。（一例）

* ローカルを汚さずに開発環境を整えられる。
* 環境構築をコード化できる。
* プロジェクトごとにVSCode拡張機能を使い分けられるようになる。

## クイックスタート

ためしにVuejsの開発環境をRemoteContainerで作ってみる。

以下にすべて書いてあるが、日本語でまとめてみる。  
[https://code.visualstudio.com/docs/remote/containers](https://code.visualstudio.com/docs/remote/containers "https://code.visualstudio.com/docs/remote/containers")

### 前提

* Dockerがインストール済みであること。
* VSCodeの拡張機能「[Remote Container](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack "Remote Container")」がインストール済みであること。

### Container を立ち上げる

1. 空のフォルダを作成し、VSCodeで開く。
2. `Ctrl+Shift+P`を押し、以下のコマンドを実行する

   > Remote-Containers: Add Development Container Configuration Files
3. `Show All Definitions...` をクリック。![](/assets/img/screenshot-2020-11-23-at-19-37-16.png)
4. nodeと入力して`Node.js` を選択。![](/assets/img/screenshot-2020-11-23-at-19-38-51.png)
5. バージョンを選択。  
   ![](/assets/img/screenshot-2020-11-23-at-20-07-36.png)
6. 以下のようなメッセージが出たら`Reopen in Container`をクリック。  
   ![](/assets/img/screenshot-2020-11-23-at-20-08-21.png)コンテナの準備が整うまでしばらく待つ。VSCodeの左下が以下のようになれば完了。  
   ![](/assets/img/screenshot-2020-11-23-at-20-10-42.png)

   なお、コンテナの準備に時間がかかるのは初回のみで、次回からはもう少し早く起動できる。

これだけでNodejs導入済みのコンテナを立ち上げ、リモート接続することができた。

試しにnpmが動くか確認。

        $ npm -v
        6.14.8

### ディレクトリの内訳

ディレクトリの中身を見ると、以下のようになっている。

![](/assets/img/screenshot-2020-11-23-at-20-26-05.png)[devcontainer.json](https://code.visualstudio.com/docs/remote/devcontainerjson-reference)**  
**コンテナ内で使用するVSCodeの設定、拡張機能、使用するDockerfileなどを指定できる。

[Dockerfile](http://docs.docker.jp/v17.06/engine/reference/builder.html)  
dockerイメージをビルドする際の設定を書くファイル。

### Vue CLIが初回起動時にグローバルインストールされるようにする

Vueには便利な[公式cli](https://v3.vuejs.org/guide/installation.html#cli)が存在するため、コンテナの初回起動時に自動でインストールされるようにしてみる。

1. `Dockerfile`を開き、以下の行を追記する。

       RUN npm install -g @vue/cli
2. 左下の`Dev Container: Node.js`を押下し、`Rebuild...`を選択する。  
   ![](/assets/img/screenshot-2020-11-23-at-21-06-51.png)
3. ターミナルで以下のように入力し、Vue cliがグローバルインストールされている事を確認する。

       $ vue -V
       @vue/cli 4.5.9

### Vue拡張機能が初回起動時にインストールされるようにする

VSCodeには、Vuejs開発に便利な[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)という拡張機能がある。  
なのでこれをコンテナの初回起動時に自動インストールされるようにしてみる。

1. 拡張機能ペインを開き、`Vetur`と検索する。
2. Veturを右クリックし、`Add to devcontainer.json`をクリックする。

   ![](/assets/img/screenshot-2020-11-23-at-22-47-54.png)
3. `devcontainer.json`を開き、VeturのIDが追加されている事を確認する。

       "extensions": [
       		"dbaeumer.vscode-eslint",
       		"octref.vetur"
       	],
4. コンテナをリビルドする。  
   ![](/assets/img/screenshot-2020-11-23-at-21-06-51.png)
5. `DEV CONTAINER... - インストール済み`のところにVeturが追加された。

   ![](/assets/img/screenshot-2020-11-23-at-22-55-14.png)

## おわりに

今まではローカル環境に全ての拡張機能を入れていたので、「Vue開発してる時はJava拡張機能が邪魔で、Java開発する時にはVue拡張機能が邪魔」みたいな事になっていた。

これが解決出来るだけでもめちゃくちゃ有り難い。

チームでエディタの設定なども同時に共有出来るのもすごく捗りそうだなと思った。

## 今回の成果物

[https://github.com/qnaiv/remote-container-quickstart](https://github.com/qnaiv/remote-container-quickstart "https://github.com/qnaiv/remote-container-quickstart")