# 仙台社長右腕サロン 公開用ファイル

## 中身
- `index.html`：公開用LP本体
- `styles.css`：デザインCSS
- `assets/lp-mockup.png`：AI生成LPビジュアル参考画像
- `assets/form-mockup.png`：フォーム画面ビジュアル参考画像
- `assets/event-poster.png`：初回作戦会議の告知ビジュアル

## そのまま公開する方法

### GitHub Pagesで公開する場合
1. 新しいリポジトリを作成
2. このフォルダの中身をそのままアップロード
3. `index.html` がリポジトリ直下にある状態にする
4. Settings → Pages で公開元を `main` / root にする
5. 表示されたURLを確認

### Netlifyで公開する場合
1. Netlifyにログイン
2. Add new project → Deploy manually
3. このフォルダをドラッグ&ドロップ
4. 表示されたURLを確認

## 公開前に差し替えるところ
- フォーム送信先：現在は `mailto:naoya.sakamoto@sakamoto-growth-partners.com` です。GoogleフォームやHubSpot等に差し替え推奨。
- 開催日：初回作戦会議の開催日が決まったら本文に追記。
- 会場：仙台市内の会場が決まったら追記。
- CTAリンク：GoogleフォームURLができたら `href="#contact"` をフォームURLに差し替え。

## 注意
AI画像をそのまま1枚で貼るより、このHTML版で公開した方がスマホ表示・SEO・読みやすさ・信用感が高くなります。
