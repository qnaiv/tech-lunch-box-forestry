---
tags:
- javascript
featuredimg: "/assets/img/javascript.png"
title: Javascriptの論理演算子(&&,||)について知らなかったこと
date: 2020-06-24 00:00:00 +0900
summary: 論理演算子のトリッキーな使い方を知ったので

---
表題の通り、論理演算子(&&,||)のちゃんとした仕様を理解できてなかった事が判明したのでメモ。

## 今までの理解: 論理演算子は判定式を組み合わせるために使うもの

以下のように、判定式を組み合わせるために使うだけだと思っていた。

``` javascript
if(a == null && b == null){
    // aもbもnullのとき
}
if(a == null || b == null){
    // aかbがnullのとき
}
if(a && b){
    // aもbもnullじゃないとき
}
```

## 知らなかったこと: 論理演算子は必ずしも真偽値を返すわけではない。

[論理演算子 / MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators) MDNをよく読むと、次のように書いてある。

> expr1 && expr2
>
> `expr1` を false と見ることができる場合は、`expr1` を返します。そうでない場合は、`expr2` を返します。
>
> expr1 || expr2
>
> `expr1` を true と見ることができる場合は、`expr1` を返します。そうでない場合は、`expr2` を返します。
>
> `true` に変換できる値は、いわゆる [truthy](https://developer.mozilla.org/ja/docs/Glossary/Truthy) です。`false` に変換できる値は、いわゆる [falsy](https://developer.mozilla.org/ja/docs/Glossary/Falsy) です。

その仕様をうまく利用すると、実は次のように条件分岐を省略して書くことが出来る。

```js
// [省略前]
let userName
if(name){
	userName = name
} else {
	userName = 'guest'
}

// [省略後]
// nameがtrueと見ることができる場合は、nameを返す。
// そうでないなら、'guest'を返す。
let userName = name || 'guest'
// lastNameがあればそれを代入。なければfirstNameを代入。firstNameもなければ'guest'を代入。
let userName = lastName || (firstName || 'guest')

// 三項演算子でも同じようなことできる…けど読みづらいかも？
let userName = name ? name : 'guest'
let userName = lastName ? lastName : firstName ? firstName : 'guest
```