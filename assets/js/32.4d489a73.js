(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{491:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("conoha の VPS を借りた時に行った初期設定をまとめる。")]),s._v(" "),a("h2",{attrs:{id:"手順"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手順"}},[s._v("#")]),s._v(" 手順")]),s._v(" "),a("ol",[a("li",[s._v("SSH 接続する")]),s._v(" "),a("li",[s._v("ユーザ作成")]),s._v(" "),a("li",[s._v("SSH 鍵作成")]),s._v(" "),a("li",[s._v("sshd_config 編集")])]),s._v(" "),a("h2",{attrs:{id:"_1-ssh-接続する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-ssh-接続する"}},[s._v("#")]),s._v(" 1. SSH 接続する")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/posts/2019/10/26/ssh-connection-with-vscode.html"}},[s._v("VSCode で SSH 接続する")])],1),s._v(" "),a("h2",{attrs:{id:"_2-ユーザ作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ユーザ作成"}},[s._v("#")]),s._v(" 2. ユーザ作成")]),s._v(" "),a("p",[s._v("レンタルした直後は root ユーザしかないので新しいユーザを作る")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("adduser 新規ユーザ名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ユーザ作成")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" 新規ユーザ名 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#パスワード設定")]),s._v("\n")])])]),a("p",[s._v("そして wheel グループに追加")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("gpasswd -a 新規ユーザ名 wheel\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" 新規ユーザ名\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudoできるか確認")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("wheel ユーザ")]),s._v(" "),a("p",[s._v("sudo 権限を持つグループ")])]),s._v(" "),a("h2",{attrs:{id:"_2-ssh-鍵作成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssh-鍵作成"}},[s._v("#")]),s._v(" 2. SSH 鍵作成")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新規ユーザで行う")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\nssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" id_rsa.pub authorized_keys "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#公開鍵のほうをauthorized_keysにリネーム")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" authorized_keys\n")])])]),a("h2",{attrs:{id:"_3-ssh-秘密鍵をクライアント側にダウンロードする"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ssh-秘密鍵をクライアント側にダウンロードする"}},[s._v("#")]),s._v(" 3. SSH 秘密鍵をクライアント側にダウンロードする")]),s._v(" "),a("p",[s._v("id_rsa(秘密鍵)のほうをクライアントの.ssh ディレクトリに置く。")]),s._v(" "),a("p",[s._v("config ファイルを編集し、"),a("code",[s._v("IdentityFile")]),s._v("に秘密鍵のパスを指定する。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Host 任意の接続名\nHostName ホスト名\nUser ユーザー名\nPort ポート番号\nIdentityFile 鍵の場所(例: ~/.ssh/test.key)\n")])])]),a("h2",{attrs:{id:"_3-sshd-config-変更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-sshd-config-変更"}},[s._v("#")]),s._v(" 3. sshd_config 変更")]),s._v(" "),a("p",[s._v("sshd_config で以下の項目を変更する。")]),s._v(" "),a("ul",[a("li",[s._v("鍵認証設定")]),s._v(" "),a("li",[s._v("SSH ポート変更(デフォルトの 22 だと攻撃されまくるので変更する)")]),s._v(" "),a("li",[s._v("root ログインを禁止する")]),s._v(" "),a("li",[s._v("パスワードログイン禁止")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ssh/sshd_config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Port 22")]),s._v("\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("49152")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#49152〜65535 がいいらしい。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PermitRootLogin yes")]),s._v("\nPermitRootLogin no "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rootログイン禁止")]),s._v("\n\nRSAAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#追記")]),s._v("\n\nPubkeyAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#コメントアウト解除")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#パスワードログイン禁止")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PasswordAuthentication yes")]),s._v("\nPasswordAuthentication no "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#パスワードログイン禁止")]),s._v("\n")])])]),a("p",[s._v("sshd を再起動する。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart sshd\n")])])]),a("p",[s._v("次に、firewalld のポート開放設定を変更する。")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/lib/firewalld/services/ssh.xml /etc/firewalld/services/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/firewalld/services/ssh.xml\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --reload "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 設定反映")]),s._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.conoha.jp/guide/addusersshkey.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.conoha.jp/guide/addusersshkey.php"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);