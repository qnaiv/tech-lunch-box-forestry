# VuePressからAstroへの移行作業ログ

## 完了したタスク

### フェーズ1: Astroプロジェクトのセットアップと基本設定
- `astro-blog` ディレクトリを作成し、Astroプロジェクトを初期化。
- `package.json` を作成し、`astro` と `@astrojs/vue` を依存関係に追加。
- `astro.config.mjs` を作成し、Vueインテグレーションを有効化。
- `npm install` を実行し、依存関係をインストール。
- Astroプロジェクトの基本的なディレクトリ構造 (`src`, `public` など) を作成。
- `docs/_posts` から `astro-blog/src/content/blog` へMarkdownファイルをコピー。
- Astroのコンテンツコレクションを設定 (`src/content/config.ts`)。
  - frontmatterの `date` の型問題を修正 (`z.union([z.string(), z.date()]).transform(...)`)。
- 静的ファイル (`fonts`, ロゴ画像) を `public` ディレクトリにコピー。
- 基本的なレイアウト (`BlogPost.astro`, `BaseLayout.astro`) と動的ルート (`/blog/[...slug].astro`)、トップページ (`index.astro`) を作成。

### フェーズ2: Vueコンポーネントの移行と再利用
- `components`, `global-components` から `astro-blog/src/components` へVueコンポーネントをコピー。
- `BlogPost.astro`, `BaseLayout.astro` に `Header.vue` と `Footer.vue` を統合。
- 開発サーバーを起動し、発生したエラーを順次修正。
  - `Header.vue`: VuePress依存 (`@SearchBox`, `NavLink`, `$themeConfig` 等) を削除・修正。
  - `Header.vue`: Stylusの `@import` パスを修正。
  - `Feed.vue`: VuePress依存 (`$service`) を削除し、機能を一時的に無効化。
  - `Footer.vue`: VuePress依存 (`$withBase`, `$themeConfig`) を削除・修正。
  - `MobileHeader.vue`: VuePress依存 (`$withBase`, `$themeConfig`, `$site`) を削除・修正。
  - `NavLink.vue`: `router-link`, `$site.locales` 依存を削除し、`<a>`タグに置き換え。
  - `util.js`: `ensureExt` 関数を削除。
  - `Avatar.vue`: `$themeConfig.authors`, `$frontmatter.author`, `$withBase` 依存を削除し、propsとしてデータを受け取るように修正。
  - `BaseListLayout.vue`: `router-link`, `$pagination`, `THEME_BLOG_PAGINATION_COMPONENT`, `$site.pages`, `$themeConfig.dateFormat` 依存を削除し、propsとしてデータを受け取るように修正。
  - `BlogTag.vue`: `router-link` 依存を削除し、`<a>`タグに置き換え。
  - `PostMeta.vue`: `$themeConfig.dateFormat` 依存を削除し、固定フォーマットに修正。
  - `PostTag.vue`: `router-link` 依存を削除し、`<a>`タグに置き換え。
- ロゴ画像の404エラーを解決。
- 使用されていないVueコンポーネントを削除。
  - `astro-blog/src/components/Newsletter.vue`
  - `astro-blog/src/components/Sticker.vue`
  - `astro-blog/src/components/Toc.vue`
- スタイリングをAstro環境に適合。
  - `astro-blog/src/styles/`内のStylusファイルをSass（SCSS記法）に変換し、`_config.scss`, `_palette.scss`, `_code.scss`, `_mobile.scss`, `_sw-popup.scss`, `_wrapper.scss`を作成。
  - Vueコンポーネント内のスタイルブロックを`lang="scss"`に変更し、`@import`パスをSassの形式に修正。
- タグ機能の再実装。
  - `astro-blog/src/pages/tags/index.astro` (タグ一覧ページ) を作成。
  - `astro-blog/src/pages/tags/[tag].astro` (各タグの記事リストページ) を作成。

## 現在の状況
- 開発サーバーは起動しているが、ロゴ画像 (`/assets/img/lunchbox-logo.png`) の404エラーは解決済み。
- Vueコンポーネント内のVuePress特有のコードは大部分が修正された。
- StylusファイルがSassに変換され、Vueコンポーネント内のスタイルブロックもSass形式に更新された。
- タグ機能がAstroに再実装された。
- 検索、PWAなどのプラグイン機能は未実装。
- ESLintのエラーがいくつか残っている。

## 次のステップ
1. 検索機能などをAstroのインテグレーションを使って再実装する。
2. `package.json` を整理し、不要なVuePress関連の依存を削除する。
3. ESLintのエラーを修正する。
