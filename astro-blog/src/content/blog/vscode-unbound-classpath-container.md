---
tags:
- vscode
- java
featuredimg: "/assets/img/vscode.png"
title: VSCode で Unbound classpath container が出たときの対処法
date: 2019-09-21T15:00:00.000+00:00
summary: vscodeでjavaうまく設定できなかったときの話

---
## 事象

以下のようなエラーが出た
`Unbound classpath container: 'JRE System Library[jdkx.x.x]'`

## 解決法

### 1. VSCode を終了する。

### 2. プロジェクトフォルダの中から`.setting`フォルダを消す。

### 3. VSCode のワークスペースディレクトリの中身を消す。

**VSCode のワークスペースディレクトリ**

- Windows : `%APPDATA%\Code[ - Variant]\User\workspaceStorage\`
- MacOS : `$HOME/Library/Application Support/Code[ - Variant]/User/workspaceStorage/`
- Linux : `$HOME/.config/Code[ - Variant]/User/workspaceStorage/`

## 参考:

[https://github.com/redhat-developer/vscode-java/wiki/Troubleshooting#clean-the-workspace-directory](https://github.com/redhat-developer/vscode-java/wiki/Troubleshooting#clean-the-workspace-directory)