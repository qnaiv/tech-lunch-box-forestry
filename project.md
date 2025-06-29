# プロジェクト概要: Tech-Lunch-Boxブログ Astro移行

## 目的
既存のVuePressで構築された技術ブログを、モダンな静的サイトジェネレーターであるAstroに移行する。

## プロジェクト構造
- **旧プロジェクト (VuePress):**
  - ソースコードはプロジェクトルートに配置。
  - 記事: `docs/_posts/`
  - コンポーネント: `components/`, `global-components/`
  - スタイル: `styles/` (Stylus)
  - 設定: `index.js`, `package.json`

- **新プロジェクト (Astro):**
  - ソースコードは `astro-blog/` ディレクトリに配置。
  - 記事: `astro-blog/src/content/blog/`
  - コンポーネント: `astro-blog/src/components/` (Vueコンポーネントを流用)
  - レイアウト: `astro-blog/src/layouts/` (Astroコンポーネント)
  - ページ: `astro-blog/src/pages/`
  - スタイル: `astro-blog/src/styles/`
  - 静的ファイル: `astro-blog/public/`
  - 設定: `astro-blog/astro.config.mjs`, `astro-blog/package.json`

## 次回作業を再開するには
1. **`project.md` を読み込む:** プロジェクトの全体像と目的を再確認する。
2. **`task.md` を読み込む:** 前回までの詳細な作業ログと、残っているタスク（次のステップ）を確認する。
3. **開発サーバーを起動する:**
   ```bash
   cd astro-blog; npm run dev
   ```
4. **`task.md` の「次のステップ」に基づいて作業を再開する。**
   - 現在の問題は、起動したサーバーでロゴ画像の404エラーが発生している点です。ここからデバッグを開始してください。
