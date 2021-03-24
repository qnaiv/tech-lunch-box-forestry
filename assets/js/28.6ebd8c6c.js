(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{487:function(t,a,s){"use strict";s.r(a);var n=s(8),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("schema.graphqlで利用可能な3つのディレクティブについて。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://aws-amplify.github.io/docs/cli-toolchain/graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://aws-amplify.github.io/docs/cli-toolchain/graphql"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" @model")]),t._v(" "),s("p",[t._v("@modelをつける事で、デフォルトで以下のリソースが自動作成される。")]),t._v(" "),s("ul",[s("li",[t._v("オンデマンドキャパシティーモードが有効化されたDynamoDBテーブル")]),t._v(" "),s("li",[t._v("上記のテーブルにアクセスできるAWS AppSync DataSource")]),t._v(" "),s("li",[t._v("AWS AppSync DataSource用のIAMロール")]),t._v(" "),s("li",[t._v("8つのリゾルバ(create, update, delete, get, list, onCreate, onUpdate, onDelete)。ただし"),s("code",[t._v("queries")]),t._v(", "),s("code",[t._v("mutations")]),t._v(","),s("code",[t._v("subscriptions")]),t._v("などの引数を@modelにつける必要あり。")]),t._v(" "),s("li",[t._v("create, update, delete操作をする際に用いる入力オブジェクト")]),t._v(" "),s("li",[t._v("レコードや項目を絞り込むためのフィルターオブジェクト")])]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("createdAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("orderId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[t._v("#")]),t._v(" @key")]),t._v(" "),s("p",[t._v("@keyをつけることで、パーティションキーとソートキーを指定できる。\n(=絞り込み条件やソート条件の指定をするために必要。)")]),t._v(" "),s("p",[t._v("例: emailで絞り込み、createdAtでソートするための設定。")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Get orders by customer by createdAt.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Order")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fields")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("createdAt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("orderId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"auth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" @auth")]),t._v(" "),s("p",[t._v("何もせずともAPI全体にAPI認証は適用されているが、\ntypeやfieldごとに詳細な認証設定をしたいときは@authを利用する。")]),t._v(" "),s("h3",{attrs:{id:"オーナー認証"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#オーナー認証"}},[t._v("#")]),t._v(" オーナー認証")]),t._v(" "),s("p",[t._v("引数に"),s("code",[t._v("rules: [{allow: owner}]")]),t._v("を指定すると、取得できるデータを所有している物のみに制限できる。\n例えば、ログインユーザに紐づく投稿だけを取得できるようにしたいときなど。")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Post")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@model")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" owner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("@auth(rules: [{allow: owner}])")]),t._v("は、以下の記述の省略記法であり、\n「CRUD操作全て」において、「"),s("code",[t._v("owner")]),t._v("フィールドがログインユーザIDと同じ」データしか取得できなくなる。")]),t._v(" "),s("div",{staticClass:"language-graphql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive function"}},[t._v("@auth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("allow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" owner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ownerField")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"owner"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\t      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("operations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" update"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" read"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);