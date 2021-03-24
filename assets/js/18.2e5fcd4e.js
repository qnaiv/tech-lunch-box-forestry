(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{477:function(t,s,a){"use strict";a.r(s);var e=a(8),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"dockerで速攻でftpサーバを立てて外から見れるようにするまで"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dockerで速攻でftpサーバを立てて外から見れるようにするまで"}},[t._v("#")]),t._v(" Dockerで速攻でFTPサーバを立てて外から見れるようにするまで")]),t._v(" "),a("p",[t._v("仕事で調査のためにconohaに使い捨てのインスタンスを作ってFTPサーバ立てたときのメモ。")]),t._v(" "),a("h1",{attrs:{id:"docker導入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker導入"}},[t._v("#")]),t._v(" Docker導入")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Docker Engine on CentOS"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# リポジトリ追加")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --add-repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://download.docker.com/linux/centos/docker-ce.repo\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dockerインストール")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce docker-ce-cli containerd.io\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# docker起動")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start docker\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dockerコマンドが実行できることを確認")]),t._v("\n$ docker --help\n")])])]),a("h1",{attrs:{id:"pure-ftpdイメージを起動"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pure-ftpdイメージを起動"}},[t._v("#")]),t._v(" pure-ftpdイメージを起動")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/stilliard/pure-ftpd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run -d --name ftpd_server -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(":21 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),t._v("-30009:30000-30009 -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUBLICHOST=[グローバルIP]"')]),t._v(" stilliard/pure-ftpd:hardened\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("ポイントは"),a("code",[t._v('"PUBLICHOST=[グローバルIP]"')]),t._v("の部分。"),a("br"),t._v("\n公式ドキュメントや検索して出てくる資料では、"),a("code",[t._v('"PUBLICHOST=localhost"')]),t._v("と書いてあるが、外部から見れるようにする場合、グローバルIPを指定してdockerイメージを起動する必要があった。")])]),t._v(" "),a("h1",{attrs:{id:"ftpユーザ作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftpユーザ作成"}},[t._v("#")]),t._v(" FTPユーザ作成")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# コンテナ内に入る")]),t._v("\n$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it ftpd_server "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# FTPユーザ作成(この例ではtestというユーザを作る)")]),t._v("\nroot@xxx:$ pure-pw "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" -f /etc/pure-ftpd/passwd/pureftpd.passwd -m -u ftpuser -d /home/ftpusers/test\n\nPassword: ********         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("パスワード"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nEnter it again: ********   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("パスワード確認"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# フォルダがなければ作成する")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/ftpusers/\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" -al "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ユーザ用のフォルダがあるかどうか確認")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# なければ作成")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" ftpuser:ftpgroup "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 権限設定")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# コンテナから出る")]),t._v("\n")])])]),a("h1",{attrs:{id:"ポート開放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ポート開放"}},[t._v("#")]),t._v(" ポート開放")]),t._v(" "),a("p",[t._v("21ポートを開放する。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("firewall-cmd --permanent --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v("/tcp\nfirewall-cmd --reload\n")])])]),a("h1",{attrs:{id:"完了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完了"}},[t._v("#")]),t._v(" 完了")]),t._v(" "),a("p",[t._v("検証用に使い捨ての環境を作ったときの手順なので、セキュリティ面の考慮は出来てないので注意。")]),t._v(" "),a("h1",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.sukerou.com/2019/07/dockerftp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("すぐ作れる！DockerでFTPサーバーを構築"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);