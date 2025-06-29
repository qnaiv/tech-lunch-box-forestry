---
tags:
- firebase
- pwa
featuredimg: "/assets/img/fcm.png"
title: PWA の WebPush 機能を試した
date: 2020-02-03 00:00:00 +0900
summary: firebaseでweb push飛ばすハンズオン

---
仕事でプッシュ通知について調査する機会があったのでメモ。

## Firebase 導入

参考:  
[https://firebase.google.com/docs/cli?hl=ja](https://firebase.google.com/docs/cli?hl=ja)

### Google アカウントを用意

Firebase を利用するために Google アカウントが必要。

### nodejs をインストール

npm を使うため。

### firebase-tools 導入

```sh
npm install -g firebase-tools
```

### firebase-cli 認証設定

```sh
npm install -g firebase-tools
firebase login // ログイン
```

### プロジェクトに Firebase を導入する

プロジェクトディレクトリで以下のコマンドを実行。

```sh
firebase init //プロジェクトディレクトリにfirebaseを設定
```

## 手動で通知を飛ばしてみる

### 通知の許可を求める＆デバイストークンを取得する。

public ディレクトリに`index.html` を作成。

    <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js"></script>
    <script>
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "***",
        authDomain: "***",
        databaseURL: "***",
        projectId: "***",
        storageBucket: "***",
        messagingSenderId: "***",
        appId: "***",
        measurementId: "***"
      };
      const VAPID =
        "公開鍵";
    
      // firebaseの初期化
      firebase.initializeApp(firebaseConfig);
      // 通知を許可をユーザに求める
      Notification.requestPermission(function(result) {
        console.log("User choice", result);
        if (result !== "granted") {
          console.log("No notification permission granted!");
        } else {
          console.log("ok!");
          const messaging = firebase.messaging();
          // 公開鍵を設定
          messaging.usePublicVapidKey(VAPID);
    
        // トークン取得
          messaging.getToken().then(currentToken => {
              // デバイストークンがコンソールに出力される。
            console.log(currentToken);
          });
        }
      });

public ディレクトリに以下の `firebase-messaging-sw.js` を作成

```javascript
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "***"
});

const messaging = firebase.messaging();
```

### デプロイする

firebase hosting にデプロイする。

```sh
firebase deploy
```

### 手動でデバイスに通知を送る

"Send your first message"をクリック
![](/assets/img/web-push-hands-on-1.png)

タイトルとテキストを入力して"テストメッセージを送信"をクリック。
![](/assets/img/web-push-hands-on-2.png)

先ほどコンソールに出ていたトークンをコピペする。
![](/assets/img/web-push-hands-on-3.png)

通知が表示される。
![](/assets/img/web-push-hands-on-4.png)

## firebase-messaging-sw.js について

`firebase-messaging-sw.js`(ServiceWorker)では、メッセージ受信時の処理を書くことができる。
Web アプリがフォアグラウンド時、バックグラウンド時、閉じられている時で処理を分けて書く。

[https://firebase.google.com/docs/cloud-messaging/js/receive?hl=ja#handle_messages_when_your_web_app_is_in_the_foreground](https://firebase.google.com/docs/cloud-messaging/js/receive?hl=ja#handle_messages_when_your_web_app_is_in_the_foreground)