# TiktokSample

TikTok風のUIを採用した動画フィードのモックアップアプリケーションです。映画の予告編やメイキング映像を縦スクロールで楽しめます。

![デモ](public/demo.gif)

## 機能

- 縦スワイプによる動画切り替え
- 動画の自動再生/一時停止
- 作品詳細ページへの遷移
- レスポンシブデザイン
- 映画情報の表示（監督、タイトル）
- メモリ最適化された動画再生
- モダンなUI/UXデザイン

## 技術スタック

- React 18
- TypeScript
- Vite
- Chakra UI
- Swiper
- React Router
- Plyr

## 開発環境のセットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview
```

## プロジェクト構造

```
TiktokSample/
├── src/
│   ├── components/     # Reactコンポーネント
│   │   ├── VideoFeed.tsx    # メインの動画フィード
│   │   ├── VideoPlayer.tsx  # 動画プレーヤー
│   │   ├── Header.tsx      # ヘッダーコンポーネント
│   │   ├── Footer.tsx      # フッターコンポーネント
│   │   └── ProductPage.tsx  # 作品詳細ページ
│   ├── App.tsx        # アプリケーションのルートコンポーネント
│   └── main.tsx       # エントリーポイント
├── public/
│   └── videos/        # サンプル動画
└── package.json       # 依存関係の定義
```

## 主な特徴

- **パフォーマンス最適化**: 表示中の動画のみを再生し、他の動画は一時停止
- **モダンなUI**: Chakra UIを使用したレスポンシブで美しいデザイン
- **スムーズな遷移**: Swiperによる滑らかな動画切り替え
- **作品情報**: 各動画に関連する映画の詳細情報を表示

## ライセンス

MIT
