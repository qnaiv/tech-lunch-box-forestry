---
tags:
- graph ql
- aws
featuredimg: "/assets/img/graphql.png"
title: schema.graphqlで使えるディレクティブについて
date: 2020-04-14 00:00:00 +0900
summary: aws amplifyでgraphQLを初めて触ったときのメモ

---
schema.graphqlで利用可能な3つのディレクティブについて。
## 参考
[https://aws-amplify.github.io/docs/cli-toolchain/graphql](https://aws-amplify.github.io/docs/cli-toolchain/graphql)

## @model
@modelをつける事で、デフォルトで以下のリソースが自動作成される。

- オンデマンドキャパシティーモードが有効化されたDynamoDBテーブル
- 上記のテーブルにアクセスできるAWS AppSync DataSource
- AWS AppSync DataSource用のIAMロール
- 8つのリゾルバ(create, update, delete, get, list, onCreate, onUpdate, onDelete)。ただし`queries`, `mutations`,` subscriptions`などの引数を@modelにつける必要あり。
- create, update, delete操作をする際に用いる入力オブジェクト
- レコードや項目を絞り込むためのフィルターオブジェクト

```graphql
type Order @model {
    email: String!
    createdAt: String!
    orderId: ID!
}
```

## @key
@keyをつけることで、パーティションキーとソートキーを指定できる。
(=絞り込み条件やソート条件の指定をするために必要。)

例: emailで絞り込み、createdAtでソートするための設定。
```graphql
# Get orders by customer by createdAt.
type Order @model @key(fields: ["email", "createdAt"]) {
    email: String!
    createdAt: String!
    orderId: ID!
}
```

## @auth
何もせずともAPI全体にAPI認証は適用されているが、
typeやfieldごとに詳細な認証設定をしたいときは@authを利用する。

### オーナー認証
引数に`rules: [{allow: owner}]`を指定すると、取得できるデータを所有している物のみに制限できる。
例えば、ログインユーザに紐づく投稿だけを取得できるようにしたいときなど。

``` graphql
type Post @model @auth(rules: [{allow: owner}]) {
  id: ID!
  title: String!
}
```
`@auth(rules: [{allow: owner}])`は、以下の記述の省略記法であり、
「CRUD操作全て」において、「`owner`フィールドがログインユーザIDと同じ」データしか取得できなくなる。
``` graphql
@auth(
    rules: [
      {
	      allow: owner, ownerField: "owner", 
	      operations: [create, update, delete, read]
      },
    ]
)
```
