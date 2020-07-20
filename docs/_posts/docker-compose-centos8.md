---
tags:
- docker
- docker-compose
- linux
featuredimg: "/assets/img/docker.png"
title: docker-compose を CentOS8 に導入するまで
date: 2019-10-30 00:00:00 +0900
summary: Centos環境にdocker-composeを導入して使い始めるまで。

---
## リポジトリの追加

```sh
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

## containerd.io インストール

以下から、新しいバージョンの containerd.io の URL を入手し、インストールする。
[https://download.docker.com/linux/centos/7/x86_64/stable/Packages/](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/)

```sh
# 最新バージョン
sudo dnf install https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm
```

## docker インストール

```sh
sudo dnf -y install docker-ce docker-ce-cli
```

## docker-compose インストール

```sh
# インストール
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 実行権限付与
sudo chmod +x /usr/local/bin/docker-compose

# sudoで実行できるようにシンボリックリンクを張る
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# 実行確認
sudo docker-compose --version
```

参考: https://docs.docker.com/compose/install/
