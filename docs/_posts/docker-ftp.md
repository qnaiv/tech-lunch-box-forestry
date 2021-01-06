---
tags:
- docker
featuredimg: "/assets/img/docker.png"
title: Dockerで速攻でFTPサーバを立てて外部から見れるようにするまで
date: 2021-01-06T00:00:00.000+09:00
summary: とりあえずサクッとFTPサーバを立てる

---
# Dockerで速攻でFTPサーバを立てて外から見れるようにするまで

仕事で調査のためにconohaに使い捨てのインスタンスを作ってFTPサーバ立てたときのメモ。

# Docker導入

[Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)

```bash
$ sudo yum install -y yum-utils

# リポジトリ追加
$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

# dockerインストール
$ sudo yum install docker-ce docker-ce-cli containerd.io

# docker起動
$ sudo systemctl start docker

# dockerコマンドが実行できることを確認
$ docker --help
```

# pure-ftpdイメージを起動

[Docker Hub](https://hub.docker.com/r/stilliard/pure-ftpd/)

```bash
$ docker run -d --name ftpd_server -p 21:21 -p 30000-30009:30000-30009 -e "PUBLICHOST=[グローバルIP]" stilliard/pure-ftpd:hardened
```

::: tip
ポイントは`"PUBLICHOST=[グローバルIP]"`の部分。  
公式ドキュメントや検索して出てくる資料では、`"PUBLICHOST=localhost"`と書いてあるが、外部から見れるようにする場合、グローバルIPを指定してdockerイメージを起動する必要があった。
:::

# FTPユーザ作成

```bash
# コンテナ内に入る
$ docker exec -it ftpd_server bash

# FTPユーザ作成(この例ではtestというユーザを作る)
root@xxx:$ pure-pw useradd test -f /etc/pure-ftpd/passwd/pureftpd.passwd -m -u ftpuser -d /home/ftpusers/test

Password: ********         (パスワード)
Enter it again: ********   (パスワード確認)

# フォルダがなければ作成する
$ cd /home/ftpusers/
$ ls -al # ユーザ用のフォルダがあるかどうか確認
$ mkdir test # なければ作成
$ chown ftpuser:ftpgroup test # 権限設定

$ exit # コンテナから出る
```

# ポート開放

21ポートを開放する。

```bash
firewall-cmd --permanent --add-port=21/tcp
firewall-cmd --reload
```

# 完了

検証用に使い捨ての環境を作ったときの手順なので、セキュリティ面の考慮は出来てないので注意。

# 参考

[すぐ作れる！DockerでFTPサーバーを構築](https://www.sukerou.com/2019/07/dockerftp.html)