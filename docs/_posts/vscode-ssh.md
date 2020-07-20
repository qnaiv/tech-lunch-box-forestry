---
tags:
- vscode
featuredimg: "/assets/img/vscode.png"
title: VSCode で SSH 接続する
date: 2019-10-26 00:00:00 +0900
summary: VSCodeでSSH接続する方法について

---
## 拡張機能をインストール

Remote - SSH
[https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh)

## SSH 接続先を追加

左下のアイコンをクリックし、`Open Configuration file...`をクリック
![](/assets/img/ssh-connection-with-vscode-1.png)

config ファイルを作成されるので、下記の内容を記述する。

    Host 任意の接続名
    HostName ホスト名
    User ユーザー名
    Port ポート番号
    IdentityFile 鍵の場所(例: ~/.ssh/test.key)

## SSH で接続する

1. 左下のアイコンをクリック
2. `Connect to Host...`をクリック
   ![](/assets/img/ssh-connection-with-vscode-2.png)
3. 接続先の接続名を選択
   ![](/assets/img/ssh-connection-with-vscode-3.png)

### ターミナルから操作する

`Ctrl + @`で SSH 接続先のターミナルが表示される。
![](/assets/img/ssh-connection-with-vscode-4.png)

### エクスプローラに接続先のディレクトリを表示する

`フォルダーを開く`をクリック
![](/assets/img/ssh-connection-with-vscode-5.png)

ルートにするディレクトリを選択して`OK`をクリック
![](/assets/img/ssh-connection-with-vscode-6.png)

SSH 接続先のディレクトリがエクスプローラに表示される。
![](/assets/img/ssh-connection-with-vscode-7.png)