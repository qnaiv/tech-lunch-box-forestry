---
tags:
- linux
- vps
featuredimg: "/assets/img/conoha.png"
title: VPS をレンタルしたときの初期設定
date: 2019-10-27 00:00:00 +0900
summary: conoha VPSをレンタルしたときの初期設定をメモ。

---
conoha の VPS を借りた時に行った初期設定をまとめる。

## 手順

1. SSH 接続する
2. ユーザ作成
3. SSH 鍵作成
4. sshd_config 編集

## 1. SSH 接続する

[VSCode で SSH 接続する](/posts/2019/10/26/ssh-connection-with-vscode.html)

## 2. ユーザ作成

レンタルした直後は root ユーザしかないので新しいユーザを作る

```sh
adduser 新規ユーザ名 #ユーザ作成
passwd 新規ユーザ名 #パスワード設定
```

そして wheel グループに追加

```sh
gpasswd -a 新規ユーザ名 wheel
su 新規ユーザ名
sudo id #sudoできるか確認
```

::: tip wheel ユーザ
sudo 権限を持つグループ
:::

## 2. SSH 鍵作成

```sh
#新規ユーザで行う
cd ~/.ssh
ssh-keygen -t rsa -b 4096
mv id_rsa.pub authorized_keys #公開鍵のほうをauthorized_keysにリネーム
chmod 600 authorized_keys
```

## 3. SSH 秘密鍵をクライアント側にダウンロードする

id_rsa(秘密鍵)のほうをクライアントの.ssh ディレクトリに置く。

config ファイルを編集し、`IdentityFile`に秘密鍵のパスを指定する。

```
Host 任意の接続名
HostName ホスト名
User ユーザー名
Port ポート番号
IdentityFile 鍵の場所(例: ~/.ssh/test.key)
```

## 3. sshd_config 変更

sshd_config で以下の項目を変更する。

- 鍵認証設定
- SSH ポート変更(デフォルトの 22 だと攻撃されまくるので変更する)
- root ログインを禁止する
- パスワードログイン禁止

```sh
sudo vi /etc/ssh/sshd_config

#Port 22
Port 49152 #49152〜65535 がいいらしい。

#PermitRootLogin yes
PermitRootLogin no #rootログイン禁止

RSAAuthentication yes #追記

PubkeyAuthentication yes #コメントアウト解除

#パスワードログイン禁止
#PasswordAuthentication yes
PasswordAuthentication no #パスワードログイン禁止
```

sshd を再起動する。

```sh
sudo systemctl restart sshd
```

次に、firewalld のポート開放設定を変更する。

```sh
sudo cp /usr/lib/firewalld/services/ssh.xml /etc/firewalld/services/
sudo vi /etc/firewalld/services/ssh.xml
sudo firewall-cmd --reload # 設定反映
```

## 参考

[https://www.conoha.jp/guide/addusersshkey.php](https://www.conoha.jp/guide/addusersshkey.php)
